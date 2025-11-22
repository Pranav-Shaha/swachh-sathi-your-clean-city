import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const MapView = () => {
  const mockReports = [
    { id: 1, title: "Garbage near Central Park", status: "pending", lat: 28.6139, lng: 77.2090 },
    { id: 2, title: "Industrial waste dumping", status: "in-progress", lat: 28.7041, lng: 77.1025 },
    { id: 3, title: "Plastic pollution at beach", status: "completed", lat: 19.0760, lng: 72.8777 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Interactive Map</h1>
          <p className="text-muted-foreground">View all pollution reports and cleanup progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      Map Integration Ready
                    </p>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Interactive map will display here showing all reported locations, 
                      volunteer groups, and cleanup progress using Mapbox or Google Maps API
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Reports</h2>
            {mockReports.map((report) => (
              <Card key={report.id} className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{report.title}</h3>
                    {getStatusIcon(report.status)}
                  </div>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status.replace("-", " ")}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-2">
                    {report.lat.toFixed(4)}, {report.lng.toFixed(4)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapView;
