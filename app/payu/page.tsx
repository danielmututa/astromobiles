import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, CreditCard, Unlock, Shield, Clock, DollarSign, Users } from "lucide-react"

export default function PayuPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <Badge className="w-fit">Pay-As-You-Use</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Own Your Smartphone,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  One Payment at a Time
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Our flexible PAYU model makes smartphone ownership accessible to everyone. No large upfront costs, just
                affordable payments via mobile money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  Calculate Your Payment
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
              <img
                src="/person-using-smartphone-for-mobile-payment-in-afri.jpg"
                alt="PAYU Model"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How PAYU Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get your smartphone in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <Card className="border-2 hover:border-primary transition-colors relative">
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Choose Your Device</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Select from our range of smartphones that fit your needs and budget. All devices are available on
                  PAYU.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors relative">
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">Activate & Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get connected with one of our MNO partners. Your device is activated and ready to use immediately.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors relative">
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Unlock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Pay & Own</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make flexible payments via mobile money. Once you complete your payments, the device is fully yours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PAYU?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible smartphone ownership designed for Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">No Upfront Cost</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get your smartphone without paying the full price upfront
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Flexible Payments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pay at your own pace with affordable monthly installments
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All transactions are secure through trusted mobile money platforms
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Local Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated customer service to help you every step of the way
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Example */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Example</h2>
              <p className="text-lg text-muted-foreground">See how affordable smartphone ownership can be</p>
            </div>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Astro Energy</h3>
                      <p className="text-muted-foreground">6000mAh Battery • 32MP Camera • 6GB RAM</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Retail Price</span>
                        <span className="font-semibold text-lg">$199</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">PAYU Monthly</span>
                        <span className="font-semibold text-lg text-primary">$18/month</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Payment Period</span>
                        <span className="font-semibold text-lg">12 months</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-muted-foreground">Total Cost</span>
                        <span className="font-semibold text-lg">$216</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                      <h4 className="font-semibold text-lg">What's Included:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Device activation with MNO partner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">1-year warranty coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Free customer support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Flexible payment schedule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Full ownership after completion</span>
                        </li>
                      </ul>
                    </div>
                    <Button size="lg" className="w-full">
                      Get This Device on PAYU
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know about PAYU</p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What happens if I miss a payment?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand that circumstances change. If you miss a payment, we'll work with you to find a
                    solution. Your device will remain functional, and we'll help you get back on track.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I pay off my device early?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! You can pay off your device at any time without penalties. Once you complete all payments, the
                    device is fully yours with no restrictions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Which mobile money platforms do you accept?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We accept payments through all major mobile money platforms including EcoCash, MTN Mobile Money,
                    Airtel Money, M-Pesa, and more, depending on your country.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Is there a credit check required?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No traditional credit check is required. We work with our MNO partners to verify your eligibility
                    based on your mobile money usage and history.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What if my device needs repairs?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All PAYU devices come with a 1-year warranty. If your device needs repairs during this period, we'll
                    fix it at no additional cost. Contact our support team for assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Ready to Get Your Smartphone?</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Join over 500,000 satisfied customers who have chosen PAYU for affordable smartphone ownership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary">
                Browse Devices
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
