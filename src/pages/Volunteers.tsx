import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Volunteers = () => {
  const { toast } = useToast();
  const [showJoinForm, setShowJoinForm] = useState(false);

  const mockGroups = [
    {
      id: 1,
      name: "Green Warriors Delhi",
      ngo: "Clean India Foundation",
      members: 45,
      location: "Delhi",
      activeCleanups: 3,
    },
    {
      id: 2,
      name: "Mumbai Beach Cleanup",
      ngo: "Ocean Conservation Society",
      members: 32,
      location: "Mumbai",
      activeCleanups: 2,
    },
    {
      id: 3,
      name: "Bangalore Nature Protectors",
      ngo: "EcoWarriors NGO",
      members: 28,
      location: "Bangalore",
      activeCleanups: 4,
    },
  ];

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent",
      description: "Your request to join the group has been submitted!",
    });
    setShowJoinForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Volunteer Groups</h1>
            <p className="text-muted-foreground">Join local cleanup initiatives and make a difference</p>
          </div>
          <Button onClick={() => setShowJoinForm(!showJoinForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {showJoinForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Volunteer Group</CardTitle>
              <CardDescription>Start a new cleanup initiative in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJoin} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="groupName">Group Name</Label>
                    <Input id="groupName" placeholder="Enter group name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City or area" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ngo">Associated NGO (Optional)</Label>
                  <Input id="ngo" placeholder="NGO name" />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Create Group</Button>
                  <Button type="button" variant="outline" onClick={() => setShowJoinForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGroups.map((group) => (
            <Card key={group.id} className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">{group.members} members</Badge>
                </div>
                <CardTitle className="text-xl">{group.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {group.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Associated NGO</p>
                  <p className="text-sm font-medium text-foreground">{group.ngo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Cleanups</p>
                  <p className="text-sm font-medium text-foreground">{group.activeCleanups} ongoing</p>
                </div>
                <Button className="w-full">Join Group</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Volunteers;
