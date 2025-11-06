import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, TrendingUp, Users, Package, HeadphonesIcon, CheckCircle2, Globe, DollarSign } from "lucide-react"

export default function DistributorPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Partnership Opportunity</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Become an{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AstroMobile Distributor
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Join Africa's fastest-growing smartphone brand and build a profitable business distributing quality
              devices across your region
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed as an AstroMobile distributor
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">High Profit Margins</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Competitive pricing with attractive margins for sustainable growth
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Quality Products</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reliable smartphones built for African markets with full warranty
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  24/7 partner support and training to help you succeed
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Marketing Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Co-branded materials and campaigns to drive sales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Distributor Requirements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're looking for passionate partners who share our vision of making technology accessible across Africa
              </p>
              <div className="space-y-4">
                {[
                  "Established business with retail or distribution experience",
                  "Strong local market knowledge and network",
                  "Ability to meet minimum order quantities",
                  "Commitment to customer service excellence",
                  "Secure storage and logistics capabilities",
                  "Financial stability and creditworthiness",
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="pt-6 space-y-2">
                  <Globe className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm text-primary-foreground/90">Countries Covered</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-accent to-accent/80 text-primary-foreground">
                <CardContent className="pt-6 space-y-2">
                  <Users className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-primary-foreground/90">Active Partners</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/80 to-accent text-primary-foreground">
                <CardContent className="pt-6 space-y-2">
                  <Package className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">500K+</div>
                  <div className="text-sm text-primary-foreground/90">Devices Distributed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-accent/80 to-primary text-primary-foreground">
                <CardContent className="pt-6 space-y-2">
                  <DollarSign className="w-8 h-8 mb-2" />
                  <div className="text-3xl font-bold">30%+</div>
                  <div className="text-sm text-primary-foreground/90">Average Margins</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply to Become a Distributor</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our partnership team will contact you within 48 hours
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
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your Company Ltd" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country/Region *</Label>
                  <Input id="country" placeholder="Zimbabwe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Business Experience *</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your business, experience in retail/distribution, and why you want to partner with AstroMobile..."
                    rows={5}
                    required
                  />
                </div>
                <Button size="lg" className="w-full">
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Questions About Partnership?</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Our partnership team is here to help. Contact us to learn more about becoming an AstroMobile distributor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary">
                Contact Partnership Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
