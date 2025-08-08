import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Default = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 dark:bg-gray-800 mb-6">
        <AlertTriangle className="w-12 h-12 text-slate-500 dark:text-slate-400" />
      </div>
      <h1 className="text-6xl font-extrabold text-slate-800 dark:text-white tracking-tight">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-2">Page Not Found</h2>
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you may have mistyped the URL.
      </p>
      <Link 
        to="/" 
        className="mt-8 inline-block bg-slate-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-700 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Default;
