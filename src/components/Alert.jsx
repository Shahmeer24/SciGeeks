import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import styles from './styles/Alert.module.css';

const icons = {
  success: <CheckCircle className="w-6 h-6 text-green-500" />,
  error: <XCircle className="w-6 h-6 text-red-500" />,
  warning: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
};

const Alert = ({ message, type = 'success', duration = 3000, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  const alertClasses = {
    success: 'bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700',
    error: 'bg-red-50 dark:bg-red-900/50 border-red-200 dark:border-red-700',
    warning: 'bg-yellow-50 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-700',
  };

  return (
    <div className={`${styles.alertContainer} ${message ? styles.showAlert : ''}`}>
      <div className={`${styles.alertBox} ${alertClasses[type]}`}>
        {icons[type]}
        <p className="font-medium text-sm text-slate-700 dark:text-slate-200">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
