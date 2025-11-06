import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Globe, Heart, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">About AstroMobile</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Connecting Africa Through{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We're on a mission to make smartphones accessible to everyone across Africa through affordable devices and
              flexible payment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the digital divide in Africa by providing affordable, high-quality smartphones with flexible
                  payment options that empower individuals and communities to connect, learn, and grow.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's most trusted smartphone brand, recognized for innovation, accessibility, and our
                  commitment to empowering every African with the tools they need to thrive in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AstroMobile was founded with a simple yet powerful vision: to make smartphones accessible to every
                  African, regardless of their economic circumstances.
                </p>
                <p>
                  We recognized that traditional smartphone ownership models created barriers for millions of people
                  across the continent. High upfront costs, limited financing options, and expensive devices kept many
                  from accessing the digital world.
                </p>
                <p>
                  By partnering with leading mobile network operators and developing our innovative Pay-As-You-Use
                  model, we've helped over 500,000 people across 12 African countries own their first smartphone.
                </p>
                <p>
                  Today, we continue to innovate, bringing new devices, better payment options, and expanded
                  partnerships to serve more communities across Africa.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
              <img src="/african-team-working-together-on-technology.jpg" alt="Our Team" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Accessibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Making technology available to everyone, regardless of their circumstances
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivering reliable, durable devices that stand the test of time
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Continuously improving our products and payment solutions
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building lasting relationships with our customers and partners
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Making a difference across Africa, one smartphone at a time
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">500K+</div>
              <div className="text-primary-foreground/80">Devices Sold</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">12</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <div className="text-primary-foreground/80">MNO Partners</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
