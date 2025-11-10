"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Globe, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PartnersPage() {
  const scrollRef = useRef(null)
  const heroRef = useRef(null)
  const partnersRef = useRef(null)
  const benefitsRef = useRef(null)
  const typesRef = useRef(null)
  const storyRef = useRef(null)
  const ctaRef = useRef(null)

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

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-content > *'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3
        }
      )
    }

    // Partners grid animations
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.querySelectorAll('.partner-card'),
        { opacity: 0, scale: 0, rotate: -180 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Benefits animations
    if (benefitsRef.current) {
      gsap.fromTo(
        benefitsRef.current.querySelectorAll('.benefit-card'),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Types animations
    if (typesRef.current) {
      gsap.fromTo(
        typesRef.current.querySelectorAll('.type-card'),
        { opacity: 0, x: -100, rotateY: -45 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: typesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Story animations
    if (storyRef.current) {
      gsap.fromTo(
        storyRef.current.querySelectorAll('.story-content > *'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // CTA animations
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.querySelectorAll('.cta-content > *'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05), transparent)' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 hero-content">
            <Badge className="w-fit mx-auto" style={{ backgroundColor: '#8FC240' }}>Our Partners</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Building Africa's Future{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #8FC240, #7AB030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              We collaborate with leading mobile network operators and distributors across Africa to bring affordable
              smartphones to millions
            </p>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section ref={partnersRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our MNO Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with Africa's leading mobile network operators
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, i) => (
              <Card key={i} className="partner-card group hover:shadow-xl transition-all" style={{ borderColor: '#8FC240' }}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl text-primary-foreground flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
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
      <section ref={benefitsRef} className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a network that's transforming smartphone accessibility across Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="benefit-card border-2 transition-colors" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Globe className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Wide Reach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Access to 12+ countries and millions of potential customers
                </p>
              </CardContent>
            </Card>
            <Card className="benefit-card border-2 transition-colors" style={{ borderColor: '#8FC240' }}>
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
            <Card className="benefit-card border-2 transition-colors" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Users className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Customer Loyalty</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build long-term relationships with subscribers
                </p>
              </CardContent>
            </Card>
            <Card className="benefit-card border-2 transition-colors" style={{ borderColor: '#8FC240' }}>
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
      <section ref={typesRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to collaborate and grow together
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="type-card border-2 transition-colors" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Globe className="w-7 h-7" style={{ color: '#8FC240' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">MNO Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrate our PAYU model with your mobile money platform and offer smartphones to your subscribers
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
                    <span className="text-sm">Revenue sharing model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
                    <span className="text-sm">Technical integration support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
                    <span className="text-sm">Marketing collaboration</span>
                  </li>
                </ul>
                <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
                  Become an MNO Partner
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="type-card border-2 transition-colors" style={{ borderColor: '#8FC240' + '33' }}>
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
            <Card className="type-card border-2 transition-colors" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Handshake className="w-7 h-7" style={{ color: '#8FC240' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Retail Partner</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sell AstroMobile devices in your retail stores and expand your product offering
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
                    <span className="text-sm">Flexible inventory options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
                    <span className="text-sm">Point-of-sale materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8FC240' }} />
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
      <section ref={storyRef} className="py-16 md:py-24 text-primary-foreground relative z-10" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 story-content">
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
      <section ref={ctaRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 bg-gradient-to-br from-card hover:shadow-2xl transition-shadow" style={{ borderColor: '#8FC240' + '33', background: 'linear-gradient(to bottom right, var(--card), #8FC240' + '0D)' }}>
            <CardContent className="p-8 md:p-12 text-center space-y-6 cta-content">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Partner With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Let's discuss how we can work together to bring affordable smartphones to more people across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" style={{ backgroundColor: '#8FC240' }}>
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