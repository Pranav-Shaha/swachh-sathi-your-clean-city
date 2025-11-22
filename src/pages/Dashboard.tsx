import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckCircle2, Clock, AlertCircle, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Reports", value: "156", icon: FileText, trend: "+12%" },
    { label: "Completed", value: "89", icon: CheckCircle2, trend: "+8%" },
    { label: "In Progress", value: "45", icon: Clock, trend: "+15%" },
    { label: "Pending", value: "22", icon: AlertCircle, trend: "-5%" },
  ];

  const recentReports = [
    { id: 1, title: "Garbage near Central Park", status: "pending", date: "2024-01-15", location: "Delhi" },
    { id: 2, title: "Industrial waste dumping", status: "in-progress", date: "2024-01-14", location: "Mumbai" },
    { id: 3, title: "Plastic pollution at beach", status: "completed", date: "2024-01-13", location: "Goa" },
    { id: 4, title: "Street littering issue", status: "pending", date: "2024-01-12", location: "Bangalore" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary text-primary-foreground";
      case "in-progress":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-destructive text-destructive-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Overview of pollution reports and cleanup activities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>{stat.trend} from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList>
            <TabsTrigger value="reports">Recent Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Latest pollution reports from citizens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {report.location} • {report.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(report.status)}>
                          {report.status.replace("-", " ")}
                        </Badge>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>Detailed statistics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center bg-muted rounded-lg">
                  <p className="text-muted-foreground">Charts and analytics will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
