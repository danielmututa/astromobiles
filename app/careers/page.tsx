import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, MapPin, Clock, Heart, Zap, Users, TrendingUp, Upload } from "lucide-react"

export default function CareersPage() {
  const openings = [
    {
      title: "Sales Manager",
      location: "Harare, Zimbabwe",
      type: "Full-time",
      department: "Sales",
    },
    {
      title: "Customer Support Specialist",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Support",
    },
    {
      title: "Marketing Coordinator",
      location: "Lusaka, Zambia",
      type: "Full-time",
      department: "Marketing",
    },
    {
      title: "Warehouse Manager",
      location: "Lilongwe, Malawi",
      type: "Full-time",
      department: "Operations",
    },
    {
      title: "Technical Support Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Technical",
    },
    {
      title: "Regional Sales Representative",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Sales",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Build Your Career at{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AstroMobile</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Join Africa's fastest-growing smartphone brand and help us connect millions of people across the continent
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building more than a company — we're creating opportunities and changing lives
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fast-track your career with training and advancement opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Diverse Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Work with talented people from across Africa and beyond
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Impact Work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Make a real difference by connecting communities
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Innovation Culture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Be part of a team that's shaping Africa's tech future
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Employee Benefits</h2>
              <p className="text-lg text-muted-foreground">We invest in our team's wellbeing and success</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Competitive salary packages",
                "Health insurance coverage",
                "Performance bonuses",
                "Professional development programs",
                "Flexible working arrangements",
                "Employee device discounts",
                "Paid time off and holidays",
                "Team building activities",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Find your perfect role and apply today</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-xl">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button>
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">General Application</h2>
              <p className="text-lg text-muted-foreground">
                Don't see the right position? Send us your CV and we'll keep you in mind for future opportunities
              </p>
            </div>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+263 123 456 789" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input id="position" placeholder="e.g., Sales Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cv">Upload CV/Resume *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
