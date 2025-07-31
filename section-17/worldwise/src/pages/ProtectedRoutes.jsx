import { useNavigate } from "react-router-dom";
import { useFakeAuth } from "../context/FakeAuthContext";
import { useEffect } from "react";

export const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useFakeAuth();
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated
    ? children
    : alert("You must be logged in to access this page.");
};
