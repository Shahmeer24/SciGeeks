import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
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
        showAlert('Successfully signed in!', 'success');
      } else {
        await register(formData.email, formData.password);
        showAlert('Account created successfully!', 'success');
      }
      navigate('/');
    } catch (err) {
      showAlert(err.message.replace('Firebase: ', ''), 'error');
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      showAlert('Successfully signed in with Google!', 'success');
      navigate('/');
    } catch (err) {
      showAlert(err.message.replace('Firebase: ', ''), 'error');
    }
  };

  const handleForgotPassword = () => {
    const email = prompt("Please enter your email address to reset your password:");
    if (email) {
      forgotPassword(email)
        .then(() => {
          showAlert("Password reset email sent! Please check your inbox.", 'success');
        })
        .catch((err) => {
          showAlert(err.message.replace('Firebase: ', ''), 'error');
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              {isLogin ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              {isLogin ? 'Sign in to continue your journey.' : 'Join the Scigeeks community.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" name="name" placeholder="Full Name" required className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500" onChange={handleChange} />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="email" name="email" placeholder="Email Address" required className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500" onChange={handleChange} />
            </div>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required className="w-full pl-10 pr-10 py-3 bg-slate-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500" onChange={handleChange} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {isLogin && <button type="button" onClick={handleForgotPassword} className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-white text-right block w-full">Forgot Password?</button>}
            <button type="submit" disabled={loading} className="w-full bg-slate-600 text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition-colors disabled:bg-slate-400">
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-slate-600 dark:text-slate-300 hover:underline ml-1">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
          
          <div className="flex items-center my-6">
            <hr className="w-full border-slate-200 dark:border-gray-600" />
            <span className="px-2 text-sm text-slate-400">OR</span>
            <hr className="w-full border-slate-200 dark:border-gray-600" />
          </div>

          <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 font-semibold py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.057 4.844C14.655 15.108 18.96 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.861 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
