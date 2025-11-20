"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Globe, Heart, Award, TrendingUp, Lightbulb, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const scrollRef = useRef(null)

  useEffect(() => {
    // Animate sections on scroll
    const sections = scrollRef.current?.querySelectorAll('section')
    sections?.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const partner = [
    {img:"dr.jpg", headline:"Visionary Leadership:", des:"Our founder, Munyaradzi Gwatidzo, has been consistently recognized as one of Africa's top leaders, having been listed on Choiseul Africa more than 4 times, recognized by CNN as a young innovator to watch, and receiving over 20 innovation and business awards."},
    {img:"awards_.jpg", headline:"Award-Winning Foundation:", des:"Astro Mobile has garnered major regional and Zimbabwean awards for its contributions to the technology sector."},
    {img:"investing.jpg", headline:"Investing:", des:"You are investing in a proven, resilient team with a decade of market-entry and scaling expertise, now deploying a highly scalable, asset-light FinTech model to capture Africa's $10+ billion BNPL opportunity."},
    {img:"partnership.jpg", headline:"Partners & Employees:", des:"You are joining a purpose-driven company that transforms challenging origins into continental-scale solutions. You will be part of a high-impact culture that is truly empowering financial inclusion for everyone in Africa."},
  ]

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden z-10">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05), transparent)' }} />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto animate-in" style={{ backgroundColor: '#8FC240' }}>About AstroMobile</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance animate-in">
              Empowering Africa's{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #8FC240, #7AB030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty animate-in">
              Built on resilience and driven by inclusion, we're connecting Africa through affordable technology and innovative financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Target className="w-7 h-7" style={{ color: '#8FC240' }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Harnessing the power of technology to create superior products, solutions and services that empower individuals and communities across Africa.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Connecting people with technology for a fulfilled life. We aspire to be Africa's most trusted technology brand, empowering every African to thrive in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story - Genesis */}
      <section className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in">
              <Badge className="w-fit" style={{ backgroundColor: '#8FC240' }}>Our Genesis</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Built on Resilience, Driven by Inclusion</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AstroMobile's journey began in 2013, born from the personal tenacity of our founder, Munyaradzi Gwatidzo. 
                  Raised as an orphan in Mbare, one of Zimbabwe's poorest communities, Munyaradzi's path was forged in 
                  struggle—from juggling duties as a bank teller to becoming a self-taught cellphone engineer.
                </p>
                <p>
                  This unique resilience led him to co-found G-Tide, the first African-branded device company, which 
                  successfully sold over 10 million devices in partnership with a Chinese factory. Though he was eventually 
                  "booted out" as a young man, that setback was the crucible that inspired Astro Mobile.
                </p>
                <p>
                  AstroMobile was built on a foundational vision: to break down the barrier of affordability and connect 
                  every African to mobile phones. We expanded aggressively across SADC countries, working hand-in-hand with 
                  all major Mobile Network Operators (MNOs) and connecting more than 5 million people to affordable devices.
                </p>
              </div>
            </div>
            <div className="relative animate-in">
              <div className="absolute inset-0 rounded-3xl blur-3xl -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.2), rgba(122, 176, 48, 0.2))' }} />
              <img src="/african-team-working-together-on-technology.jpg" alt="Our Team" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Evolution */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Evolution: From Devices to Digital Credit</h2>
              <p className="text-lg text-muted-foreground">
                Today, AstroMobile is a Pan-African Technology Company that has strategically diversified its expertise, 
                moving beyond hardware to become an infrastructure of digital life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8FC240' + '1A' }}>
                    <TrendingUp className="w-6 h-6" style={{ color: '#8FC240' }} />
                  </div>
                  <h3 className="text-xl font-bold">AstroPay</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our flagship AI-driven platform that powers Buy Now Pay Later (BNPL), democratizing access to credit 
                    for the unbanked and underbanked population across Africa.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">eMart & Enterprise Solutions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Innovative e-commerce and digital transformation solutions tailored for enterprises in sectors like 
                    agriculture, telecoms, health, and public services.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center animate-in">
              <p className="text-muted-foreground leading-relaxed">
                Headquartered in South Africa, our ambition is to grow our presence across all key African markets by 2030, 
                building an integrated ecosystem that provides credit payment options seamlessly woven into the daily lifestyles 
                of millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Lightbulb className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We drive progress with fresh ideas and approaches
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Creativity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We strive for the highest standards in everything we do
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Heart className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Accessibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Making technology available to everyone, regardless of their circumstances
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
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
      <section className="py-16 md:py-24 text-primary-foreground relative z-10" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Our Impact</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-in">
              Making a difference across Africa, one smartphone at a time
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2 animate-in">
              <div className="text-4xl md:text-5xl font-bold">5M+</div>
              <div className="text-primary-foreground/80">Devices Sold</div>
            </div>
            <div className="text-center space-y-2 animate-in">
              <div className="text-4xl md:text-5xl font-bold">12</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div className="text-center space-y-2 animate-in">
              <div className="text-4xl md:text-5xl font-bold">5+</div>
              <div className="text-primary-foreground/80">MNO Partners</div>
            </div>
            <div className="text-center space-y-2 animate-in">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with AstroMobile */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Why Partner with AstroMobile? A Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-in">
              We don't just build technology; we build trust and create impact. Our success is built on a track record recognized across the continent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partner.map((item, index) => (
              <div key={index} className="space-y-4 animate-in">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={item.img} alt={item.headline} className="w-full object-cover" />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <h3 className="font-semibold text-lg">{item.headline}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



















// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Target, Users, Globe, Heart, Award, TrendingUp } from "lucide-react"
// import { useEffect, useRef } from "react"
// import ThreeBackground from "@/components/ThreeBackground"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function AboutPage() {
//   const scrollRef = useRef(null)

//   useEffect(() => {
//     // Animate sections on scroll
//     const sections = scrollRef.current?.querySelectorAll('section')
//     sections?.forEach((section) => {
//       gsap.fromTo(
//         section.querySelectorAll('.animate-in'),
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     })

//     const partner = [
//       {img:"dr.jpg", headline:"Visionary Leadership:", des:"Our founder, Munyaradzi Gwatidzo, has been consistently recognized as one of Africa's top leaders, having been listed on Choiseul Africa more than 4 times, recognized by CNN as a young innovator to watch, and receiving over 20 innovation and business awards."},
//       {img:"awards_.jpg", headline:"Award-Winning Foundation:", des:"Astro Mobile has garnered major regional and Zimbabwean awards for its contributions to the technology sector."},
//       {img:"investing.jpg", headline:"Investing:", des:"You are investing in a proven, resilient team with a decade of market-entry and scaling expertise, now deploying a highly scalable, asset-light FinTech model to capture Africa's \$10+ billion BNPL opportunity."},
//       {img:"partnership.jpg", headline:"Partners & Employees:", des:"You are joining a purpose-driven company that transforms challenging origins into continental-scale solutions. You will be part of a high-impact culture that is truly empowering financial inclusion for everyone in Africa."},
//     ]

  

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   const partner = [
//     {img:"awards_.jpg", headline:"Award-Winning Foundation:", des:"Astro Mobile has garnered major regional and Zimbabwean awards for its contributions to the technology sector."},
//     {img:"dr.jpg", headline:"Visionary Leadership:", des:"Our founder, Munyaradzi Gwatidzo, has been consistently recognized as one of Africa's top leaders, having been listed on Choiseul Africa more than 4 times, recognized by CNN as a young innovator to watch, and receiving over 20 innovation and business awards."},
//     {img:"investing.jpg", headline:"Investing:", des:"You are investing in a proven, resilient team with a decade of market-entry and scaling expertise, now deploying a highly scalable, asset-light FinTech model to capture Africa's \$10+ billion BNPL opportunity."},
//     {img:"partnership.jpg", headline:"Partners & Employees:", des:"You are joining a purpose-driven company that transforms challenging origins into continental-scale solutions. You will be part of a high-impact culture that is truly empowering financial inclusion for everyone in Africa."},
//   ]

//   return (
//     <div className="min-h-screen relative" ref={scrollRef}>
//       <ThreeBackground />
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden z-10">
//         <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05), transparent)' }} />
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <Badge className="w-fit mx-auto animate-in" style={{ backgroundColor: '#8FC240' }}>About AstroMobile</Badge>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance animate-in">
//               Connecting Africa Through{" "}
//               <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #8FC240, #7AB030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Innovation</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty animate-in">
//               We're on a mission to make smartphones accessible to everyone across Africa through affordable devices and
//               flexible payment solutions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 md:py-24 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//             <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="p-8 space-y-4">
//                 <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8FC240' + '1A' }}>
//                   <Target className="w-7 h-7" style={{ color: '#8FC240' }} />
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To bridge the digital divide in Africa by providing affordable, high-quality smartphones with flexible
//                   payment options that empower individuals and communities to connect, learn, and grow.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="p-8 space-y-4">
//                 <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
//                   <Globe className="w-7 h-7 text-accent" />
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To become Africa's most trusted smartphone brand, recognized for innovation, accessibility, and our
//                   commitment to empowering every African with the tools they need to thrive in the digital age.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-16 md:py-24 bg-muted/30 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 animate-in">
//               <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
//               <div className="space-y-4 text-muted-foreground leading-relaxed">
//                 <p>
//                   AstroMobile was founded with a simple yet powerful vision: to make smartphones accessible to every
//                   African, regardless of their economic circumstances.
//                 </p>
//                 <p>
//                   We recognized that traditional smartphone ownership models created barriers for millions of people
//                   across the continent. High upfront costs, limited financing options, and expensive devices kept many
//                   from accessing the digital world.
//                 </p>
//                 <p>
//                   By partnering with leading mobile network operators and developing our innovative Pay-As-You-Use
//                   model, we've helped over 500,000 people across 12 African countries own their first smartphone.
//                 </p>
//                 <p>
//                   Today, we continue to innovate, bringing new devices, better payment options, and expanded
//                   partnerships to serve more communities across Africa.
//                 </p>
//               </div>
//             </div>
//             <div className="relative animate-in">
//               <div className="absolute inset-0 rounded-3xl blur-3xl -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.2), rgba(122, 176, 48, 0.2))' }} />
//               <img src="/african-team-working-together-on-technology.jpg" alt="Our Team" className="w-full h-auto rounded-2xl shadow-2xl" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-16 md:py-24 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Our Values</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in">
//               The principles that guide everything we do
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
//                   <Heart className="w-6 h-6" style={{ color: '#8FC240' }} />
//                 </div>
//                 <h3 className="font-semibold text-lg">Accessibility</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Making technology available to everyone, regardless of their circumstances
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
//                   <Award className="w-6 h-6 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Quality</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Delivering reliable, durable devices that stand the test of time
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
//                   <TrendingUp className="w-6 h-6" style={{ color: '#8FC240' }} />
//                 </div>
//                 <h3 className="font-semibold text-lg">Innovation</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Continuously improving our products and payment solutions
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
//                   <Users className="w-6 h-6 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Community</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Building lasting relationships with our customers and partners
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-16 md:py-24 text-primary-foreground relative z-10" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Our Impact</h2>
//             <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-in">
//               Making a difference across Africa, one smartphone at a time
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center space-y-2 animate-in">
//               <div className="text-4xl md:text-5xl font-bold">5M+</div>
//               <div className="text-primary-foreground/80">Devices Sold</div>
//             </div>
//             <div className="text-center space-y-2 animate-in">
//               <div className="text-4xl md:text-5xl font-bold">12</div>
//               <div className="text-primary-foreground/80">Countries</div>
//             </div>
//             <div className="text-center space-y-2 animate-in">
//               <div className="text-4xl md:text-5xl font-bold">5+</div>
//               <div className="text-primary-foreground/80">MNO Partners</div>
//             </div>
//             <div className="text-center space-y-2 animate-in">
//               <div className="text-4xl md:text-5xl font-bold">98%</div>
//               <div className="text-primary-foreground/80">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Partner with Algebra */}
//       <section className="py-16 md:py-24 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Why Partner with Algebra? A Legacy of Excellence</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-in">
//               We don't just build technology; we build trust and create impact. Our success is built on a track record recognized across the continent.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {partner.map((item, index) => (
//               <div key={index} className="space-y-4 animate-in">
//                 <div className="relative overflow-hidden rounded-2xl">
//                   <img src={item.img} alt={item.headline} className="w-full  object-cover" />
//                 </div>
//                 <div className="space-y-2 w-full   flex flex-col items-center">
//                   <h3 className="font-semibold text-lg">{item.headline}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed text-center">
//                     {item.des}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }







