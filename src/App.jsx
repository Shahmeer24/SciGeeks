import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AlertProvider, useAlert } from './context/AlertContext';

// Styles
import './styles/global.css';

// Components
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Alert from './components/Alert';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ResearchInstitutes from './pages/ResearchInstitute';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Auth from './pages/Auth';
import FreeTestPanel from './pages/FreeTestPanel';
import Default from './pages/Default';

const MainLayout = () => {
  const { alert, hideAlert } = useAlert();
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <ScrollToTop />
        <Alert 
          message={alert.message} 
          type={alert.type}
          onClose={hideAlert} 
        />
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research-institutes" element={<ResearchInstitutes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/freetestpanel" element={<FreeTestPanel />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Default />} />
    </Routes>
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
