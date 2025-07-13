import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, User } from 'lucide-react';

export default function DashboardPage() {
  // Placeholder user data
  const user = {
    name: 'Aisha Sharma',
    email: 'aisha.sharma@example.com',
    location: 'Pune, India',
    reports: [
      { id: 1, name: 'Annual_Health_Checkup_2023.pdf', date: '2023-10-15' },
      { id: 2, name: 'Blood_Test_Report_2024.pdf', date: '2024-03-22' },
    ],
  };

  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
            <User className="h-10 w-10 text-primary" />
            <div>
                <h1 className="text-3xl font-headline font-bold">My Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your personal details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p className="text-muted-foreground">{user.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{user.location}</p>
                </div>
                 <Button variant="outline" className="w-full mt-4">Edit Profile</Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Health Reports</CardTitle>
                        <CardDescription>Your uploaded reports for personalized recommendations.</CardDescription>
                    </div>
                     <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload New Report
                     </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {user.reports.length > 0 ? (
                    user.reports.map((report) => (
                      <li key={report.id} className="flex items-center justify-between p-3 bg-secondary rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">{report.name}</p>
                            <p className="text-sm text-muted-foreground">Uploaded on {report.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                      </li>
                    ))
                  ) : (
                    <div className="text-center py-8 border-2 border-dashed rounded-md">
                        <p className="text-muted-foreground">You haven&apos;t uploaded any reports yet.</p>
                        <Button variant="link" className="mt-2">Upload your first report</Button>
                    </div>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
