
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SocialLogin from "./SocialLogin";

const AuthForm = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  
  const handleError = (message: string) => {
    setError(message);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card-glass p-8 md:p-10">
        <Tabs 
          defaultValue="signin" 
          value={mode} 
          onValueChange={(value) => {
            setMode(value as "signin" | "signup");
            setError("");
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="signin" className="text-base">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="text-base">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="animate-fade-in">
            <SignInForm 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
            />
          </TabsContent>
          
          <TabsContent value="signup" className="animate-fade-in">
            <SignUpForm 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              name={name}
              setName={setName}
              error={error}
            />
          </TabsContent>
        </Tabs>
        
        <SocialLogin onError={handleError} />
      </div>
    </div>
  );
};

export default AuthForm;
