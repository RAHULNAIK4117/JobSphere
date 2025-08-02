import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const location = useLocation();

  
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    setIsAuthenticated(isAdmin);
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/admin/" /> : <Login />}
      />
      <Route
        path="/admin/*"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
