import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: null, type: 'success' });

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert({ message: null, type: 'success' });
  };

  const value = {
    alert,
    showAlert,
    hideAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};
