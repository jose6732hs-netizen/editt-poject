import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page instead of showing a 404
    console.log("404 intercepted: Redirecting to home");
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default NotFound;
