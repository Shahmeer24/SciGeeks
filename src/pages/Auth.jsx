import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-not-found":
      return "No account found with this email. Please sign up instead.";
    case "auth/wrong-password":
      return 'Incorrect password. Please try again or use "Forgot Password".';
    case "auth/email-already-in-use":
      return "An account with this email already exists. Please sign in.";
    case "auth/weak-password":
      return "Password should be at least 6 characters long.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);

  const { login, register, signInWithGoogle, forgotPassword } = useAuth();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        showAlert("Successfully signed in!", "success");
      } else {
        await register(formData.email, formData.password);
        showAlert("Account created successfully!", "success");
      }
      navigate("/");
    } catch (err) {
      showAlert(getErrorMessage(err.code), "error");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      showAlert("Successfully signed in with Google!", "success");
      navigate("/");
    } catch (err) {
      showAlert(getErrorMessage(err.code), "error");
    }
  };

  const handleForgotPassword = () => {
    const email = prompt(
      "Please enter your email address to reset your password:"
    );
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      forgotPassword(email)
        .then(() =>
          showAlert(
            "Password reset email sent! Please check your inbox.",
            "success"
          )
        )
        .catch((err) => showAlert(getErrorMessage(err.code), "error"));
    } else if (email) {
      showAlert("Please enter a valid email address.", "error");
    }
  };

  useEffect(() => {
    document.title = "Auth | SciGeeks";
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              {isLogin
                ? "Sign in to continue your journey."
                : "Join the Scigeeks community."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-10 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isLogin && (
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-white text-right block w-full"
              >
                Forgot Password?
              </button>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-600 text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-slate-600 dark:text-slate-300 hover:underline ml-1"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              className="text-sm text-slate-500 hover:text-slate-400 dark:hover:text-white text-left "
            >
              Go back to Home Page
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="w-full border-slate-200 dark:border-gray-600" />
            <span className="px-2 text-sm text-slate-400">OR</span>
            <hr className="w-full border-slate-200 dark:border-gray-600" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 font-semibold py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGoogle />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
