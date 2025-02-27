
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, AlertTriangle, CheckCircle, HelpCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get current time of day (morning, afternoon, evening, night)
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 22) return "evening";
    return "night";
  };
  
  const timeOfDay = getTimeOfDay();
  
  const ActivityItem = ({ 
    icon, 
    color, 
    title, 
    time 
  }: { 
    icon: React.ReactNode; 
    color: string; 
    title: string; 
    time: string;
  }) => (
    <div className="flex items-center gap-4 rounded-xl p-3 transition-all hover:bg-secondary/50">
      <div className={`rounded-full p-2 ${color}`}>
        {icon}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-20 mb-10 animate-fade-in">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">
              Welcome back
            </span>
            <h1 className="text-3xl font-bold tracking-tight">
              Good {timeOfDay}, {user?.name}
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={() => signOut()}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {progress}% complete
                  </span>
                  <span className="text-xs font-medium text-primary">
                    2/3 steps
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="pt-2 text-xs text-muted-foreground">
                  Complete your profile to unlock all features
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">
                User Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Name</div>
                  <div className="font-medium">{user?.name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">{user?.email}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">User ID</div>
                  <div className="font-medium text-sm">{user?.id}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-medium">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <ActivityItem
                  icon={<CheckCircle className="h-4 w-4 text-white" />}
                  color="bg-green-500"
                  title="Account created"
                  time="Just now"
                />
                <ActivityItem
                  icon={<Clock className="h-4 w-4 text-white" />}
                  color="bg-orange-500"
                  title="Profile setup pending"
                  time="5 minutes ago"
                />
                <ActivityItem
                  icon={<HelpCircle className="h-4 w-4 text-white" />}
                  color="bg-blue-500"
                  title="Verification email sent"
                  time="10 minutes ago"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span>Important Notice</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is a demo dashboard. In a real application, integration with Supabase would provide 
              actual authentication and data storage functionality. Currently using mock data for demonstration purposes.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
