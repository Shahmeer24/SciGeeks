import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Sun, Moon, Menu, X, ChevronDown, User as UserIcon, LogOut } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/research-institutes', label: 'Research Institutes' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const dropdownLinks = [
    { path: '/faq', label: 'FAQ' },
    { path: '/team', label: 'Our Team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClasses = "relative font-display text-base font-medium transition-colors duration-300 px-3 py-1.5 rounded-full";
    const activeClasses = "bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white";
    const inactiveClasses = "text-slate-600 dark:text-slate-300 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-slate-600 before:transition-transform before:duration-300 dark:before:bg-slate-400 hover:before:origin-left hover:before:scale-x-100";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `block px-4 py-2 rounded-md text-lg transition-colors ${isActive ? 'bg-slate-100 dark:bg-gray-700 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800'}`;
  };

   const handleLogout = async () => {
    try {
      await logout();
      showAlert('You have been logged out.', 'success');
      navigate('/auth');
    } catch (error) {
      showAlert('Failed to log out.', 'error');
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 font-display ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="text-3xl font-bold text-slate-800 dark:text-white">
            SciGeeks
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {mainLinks.map((link) => (
              <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
            
            <div className="relative group py-4">
              <button className="relative font-display text-base font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-slate-600 before:transition-transform before:duration-300 dark:before:bg-slate-400 hover:before:origin-left hover:before:scale-x-100">
                More <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 bg-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2">
                  {dropdownLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="block px-4 py-2 text-base text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            {user && !user.isAnonymous ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-600 dark:bg-slate-400 rounded-full flex items-center justify-center text-white font-bold text-base">
                  {user.email ? user.email.charAt(0).toUpperCase() : <UserIcon size={20}/>}
                </div>
                <button onClick={logout} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors" title="Logout">
                  <LogOut className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                </button>
              </div>
            ) : (
              <Link to="/auth" className="hidden md:inline-block bg-slate-600 text-white px-5 py-2 rounded-full text-base font-semibold hover:bg-slate-700 transition-colors">
                Register / Login
              </Link>
            )}
            
            <button onClick={toggleTheme} className="hidden md:inline-flex p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors">
              {theme === 'light' ? <Moon className="h-6 w-6 text-slate-600" /> : <Sun className="h-6 w-6 text-slate-300" />}
            </button>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {mainLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 dark:border-gray-700 my-2"></div>
            {dropdownLinks.map((link) => (
               <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 dark:border-gray-700 my-2"></div>
            {user && !user.isAnonymous ? (
              <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className={`${getMobileLinkClass(null)} w-full text-left`}>
                Logout
              </button>
            ) : (
              <Link to="/auth" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/auth')}>
                Register / Login
              </Link>
            )}
            <div className="pt-4 flex justify-center">
               <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors text-slate-600 dark:text-slate-300">
                {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                <span className="text-base">Toggle Theme</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
