import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// Contexts
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { AlertProvider, useAlert } from "./context/AlertContext";

// Styles
import "./styles/global.css";

// Layout & UI Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Alert from "./components/Alert";
import Loader from "./components/Loader";

// Page Components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ResearchInstitutes = lazy(() => import("./pages/ResearchInstitute"));
const Courses = lazy(() => import("./pages/Courses"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Auth = lazy(() => import("./pages/Auth"));
const FreeTestPanel = lazy(() => import("./pages/FreeTestPanel"));
const Default = lazy(() => import("./pages/Default"));

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ScrollToTop />
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

const AppContent = () => {
  const { loading: authLoading } = useAuth();
  const { alert, hideAlert } = useAlert();

  if (authLoading) {
    return <Loader />;
  }

  return (
    <>
      <Alert message={alert.message} type={alert.type} onClose={hideAlert} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/research-institutes"
              element={<ResearchInstitutes />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/freetestpanel" element={<FreeTestPanel />} />
          </Route>

          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AlertProvider>
          <Router>
            <AppContent />
          </Router>
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
