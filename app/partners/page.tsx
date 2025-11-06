import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Globe, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react"

export default function PartnersPage() {
  const partners = [
    { name: "Econet", country: "Zimbabwe", logo: "E" },
    { name: "MTN", country: "Multiple Countries", logo: "M" },
    { name: "Airtel", country: "Multiple Countries", logo: "A" },
    { name: "Safaricom", country: "Kenya", logo: "S" },
    { name: "NetOne", country: "Zimbabwe", logo: "N" },
    { name: "TNM", country: "Malawi", logo: "T" },
    { name: "Vodacom", country: "Multiple Countries", logo: "V" },
    { name: "Orange", country: "Multiple Countries", logo: "O" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Our Partners</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Building Africa's Future{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We collaborate with leading mobile network operators and distributors across Africa to bring affordable
              smartphones to millions
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our MNO Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with Africa's leading mobile network operators
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, i) => (
              <Card key={i} className="group hover:shadow-xl hover:border-primary transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a network that's transforming smartphone accessibility across Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Wide Reach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Access to 12+ countries and millions of potential customers
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Revenue Growth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Increase revenue through device sales and data usage
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Customer Loyalty</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build long-term relationships with subscribers
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Handshake className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Proven Model</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Tested and successful PAYU framework</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to collaborate and grow together
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">MNO Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrate our PAYU model with your mobile money platform and offer smartphones to your subscribers
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Revenue sharing model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Technical integration support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Marketing collaboration</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Become an MNO Partner
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20 hover:border-accent transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Distribution Partner</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Distribute AstroMobile devices in your region and earn competitive margins
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Competitive pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Marketing materials provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Training and support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Become a Distributor
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Retail Partner</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sell AstroMobile devices in your retail stores and expand your product offering
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flexible inventory options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Point-of-sale materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sales incentives</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Become a Retailer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Success Story
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              "Partnering with AstroMobile has transformed our business"
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              "Since partnering with AstroMobile, we've seen a 300% increase in device sales and significantly improved
              customer retention. The PAYU model has made smartphones accessible to customers who previously couldn't
              afford them, and our data revenue has grown substantially as a result."
            </p>
            <div className="pt-4">
              <div className="font-semibold text-lg">James Mutasa</div>
              <div className="text-primary-foreground/80">Regional Manager, Econet Zimbabwe</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Partner With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Let's discuss how we can work together to bring affordable smartphones to more people across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg">
                  Contact Partnership Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Partnership Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
