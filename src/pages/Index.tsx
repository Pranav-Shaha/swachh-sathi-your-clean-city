import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, MapPin, Users, BarChart3, Camera, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Report Pollution",
      description: "Upload geo-tagged photos of polluted areas and help track environmental issues",
    },
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "View real-time locations of pollution reports and cleanup activities",
    },
    {
      icon: Users,
      title: "Volunteer Groups",
      description: "Join local cleanup initiatives and connect with NGOs making a difference",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor cleanup status and view before/after photos of restored areas",
    },
    {
      icon: Shield,
      title: "Report Polluters",
      description: "Help identify and report industries or individuals causing environmental harm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <Leaf className="h-20 w-20 text-primary" />
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Join the Movement for a
              <span className="text-primary"> Cleaner India</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
              Report pollution, track cleanup progress, and connect with volunteers. 
              Together, we can make our communities cleaner and greener.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/report">Report Pollution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/volunteers">Join as Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Swachh Sathi Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform connecting citizens, volunteers, and NGOs for environmental action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Pollution Reports</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Partner NGOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="border-primary bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start reporting pollution in your area or join a volunteer group today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/report">Submit a Report</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/map">View Map</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
