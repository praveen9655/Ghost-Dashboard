
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="card-glass p-12 text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="auth-btn-primary"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
