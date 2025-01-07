import React, { createContext, useState, useEffect } from "react";
//import { useHistory } from 'react-router-dom';

// Create the context
export const AuthContext = createContext();

// Provide the context to the app
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const history   = useHistory(); 

  // Simulate checking login status from localStorage or an API
  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (user) {
      setIsAuthenticated(true);
      //history.push("/admin/dashboard");
    }
    
  }, []);

  // Login function
  const login = (userData) => {
    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(userData)); 
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
