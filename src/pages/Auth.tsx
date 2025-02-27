
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthForm from "@/components/auth/AuthForm";
import ThemeToggle from "@/components/common/ThemeToggle";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Auth = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="container flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <div className="text-center mb-8 space-y-2 max-w-md">
          <h1 className="text-4xl font-bold tracking-tight">Ghost Dashboard</h1>
          <p className="text-muted-foreground">
            Sign in to access your minimal and sleek dashboard
          </p>
        </div>
        
        <div className="w-full max-w-md animate-fade-in">
          <AuthForm />
        </div>
        
        <div className="mt-8 text-xs text-center text-muted-foreground max-w-md">
          By signing in, you agree to our Terms of Service and Privacy Policy.
          <br />
          Demo credentials: user@example.com / password
        </div>
      </div>
    </div>
  );
};

export default Auth;
