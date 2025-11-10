"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Camera, Cpu, Smartphone, HardDrive, Eye } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ProductsPage() {
  const scrollRef = useRef(null)
  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const ctaRef = useRef(null)

  const products = [
    {
      id: "astro-blaze-x",
      name: "Astro Blaze X",
      tagline: "Flagship Performance",
      price: "$299",
      payuPrice: "$25/month",
      image: "/premium-flagship-smartphone.jpg",
      rating: 4.8,
      specs: {
        display: '6.7" AMOLED',
        processor: "Octa-core 2.4GHz",
        ram: "8GB RAM",
        storage: "128GB Storage",
        camera: "48MP Triple Camera",
        battery: "5000mAh",
      },
      features: ["5G Ready", "Fast Charging", "Dual SIM", "Fingerprint Sensor", "Water Resistant", "Wireless Charging"],
      tag: "Flagship",
      description:
        "Experience flagship performance with the Astro Blaze X. Featuring cutting-edge technology, stunning AMOLED display, and powerful camera system for professional-grade photography.",
    },
    {
      id: "astro-energy",
      name: "Astro Energy",
      tagline: "Power That Lasts",
      price: "$199",
      payuPrice: "$18/month",
      image: "/modern-smartphone-with-long-battery.jpg",
      rating: 4.5,
      specs: {
        display: '6.5" IPS LCD',
        processor: "Octa-core 2.0GHz",
        ram: "6GB RAM",
        storage: "64GB Storage",
        camera: "32MP Dual Camera",
        battery: "6000mAh",
      },
      features: ["Long Battery Life", "Fast Charging", "Dual SIM", "Face Unlock", "Expandable Storage"],
      tag: "Best Seller",
      description:
        "Never worry about battery life again. The Astro Energy features a massive 6000mAh battery that keeps you connected all day long, perfect for heavy users and travelers.",
    },
    {
      id: "astro-smartone",
      name: "Astro SmartOne",
      tagline: "Smart & Affordable",
      price: "$129",
      payuPrice: "$12/month",
      image: "/affordable-budget-smartphone.jpg",
      rating: 4.2,
      specs: {
        display: '6.2" IPS LCD',
        processor: "Quad-core 1.8GHz",
        ram: "4GB RAM",
        storage: "32GB Storage",
        camera: "16MP Dual Camera",
        battery: "4000mAh",
      },
      features: ["Expandable Storage", "Dual SIM", "Face Unlock", "FM Radio", "Long Battery"],
      tag: "Budget",
      description:
        "Affordable doesn't mean compromise. The Astro SmartOne delivers essential smartphone features at an unbeatable price, perfect for first-time smartphone users.",
    },
    {
      id: "astro-pro-max",
      name: "Astro Pro Max",
      tagline: "Professional Grade",
      price: "$399",
      payuPrice: "$35/month",
      image: "/professional-premium-smartphone.jpg",
      rating: 4.9,
      specs: {
        display: '6.8" AMOLED 120Hz',
        processor: "Octa-core 2.8GHz",
        ram: "12GB RAM",
        storage: "256GB Storage",
        camera: "64MP Quad Camera",
        battery: "5500mAh",
      },
      features: ["5G Ready", "Wireless Charging", "IP68 Water Resistant", "In-Display Fingerprint", "120Hz Display"],
      tag: "Premium",
      description:
        "The ultimate professional smartphone. With 12GB RAM, 120Hz display, and quad camera system, the Astro Pro Max is built for power users who demand the best.",
    },
    {
      id: "astro-lite",
      name: "Astro Lite",
      tagline: "Essential Features",
      price: "$99",
      payuPrice: "$10/month",
      image: "/basic-entry-level-smartphone.jpg",
      rating: 4.0,
      specs: {
        display: '6.0" IPS LCD',
        processor: "Quad-core 1.6GHz",
        ram: "3GB RAM",
        storage: "32GB Storage",
        camera: "13MP Single Camera",
        battery: "3500mAh",
      },
      features: ["Compact Design", "Dual SIM", "Expandable Storage", "Long Battery Life", "FM Radio"],
      tag: "Entry",
      description:
        "Simple, reliable, and affordable. The Astro Lite is perfect for those who need a dependable smartphone for calls, messages, and basic apps.",
    },
    {
      id: "astro-vision",
      name: "Astro Vision",
      tagline: "Camera Excellence",
      price: "$249",
      payuPrice: "$22/month",
      image: "/smartphone-with-excellent-camera.jpg",
      rating: 4.6,
      specs: {
        display: '6.6" AMOLED',
        processor: "Octa-core 2.2GHz",
        ram: "8GB RAM",
        storage: "128GB Storage",
        camera: "50MP Triple Camera",
        battery: "4800mAh",
      },
      features: ["Night Mode", "4K Video", "AI Camera", "Optical Zoom", "Pro Mode"],
      tag: "Camera",
      description:
        "Capture life's moments in stunning detail. The Astro Vision features a 50MP camera with AI enhancements, night mode, and professional photography tools.",
    },
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

    // Products section animations
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current.querySelectorAll('.product-card'),
        { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // CTA section animations
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
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05), transparent)' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 hero-content">
            <Badge className="w-fit mx-auto" style={{ backgroundColor: '#8FC240' }}>Our Products</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Find Your Perfect{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #8FC240, #7AB030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smartphone</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              From budget-friendly to flagship devices, we have a smartphone for every need and budget
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <Card key={i} className="product-card group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10" style={{ backgroundColor: '#8FC240' }}>{product.tag}</Badge>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-2xl mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-4 h-4 ${
                            starIndex < Math.floor(product.rating)
                              ? "fill-muted text-muted"
                              : "fill-muted text-muted"
                          }`}
                          style={starIndex < Math.floor(product.rating) ? { fill: '#8FC240', color: '#8FC240' } : {}}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Product Image */}
                            <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Description */}
                            <div>
                              <h3 className="font-semibold text-lg mb-2">{product.tagline}</h3>
                              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                            </div>

                            {/* Detailed Specs */}
                            <div>
                              <h4 className="font-semibold mb-4">Technical Specifications</h4>
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <Smartphone className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">Display</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.display}</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <Cpu className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">Processor</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.processor}</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <Cpu className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">RAM</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.ram}</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <HardDrive className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">Storage</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.storage}</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <Camera className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">Camera</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.camera}</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                                  <Battery className="w-5 h-5 mt-0.5" style={{ color: '#8FC240' }} />
                                  <div>
                                    <div className="text-sm font-medium">Battery</div>
                                    <div className="text-sm text-muted-foreground">{product.specs.battery}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="font-semibold mb-3">Key Features</h4>
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, j) => (
                                  <Badge key={j} variant="secondary">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Pricing */}
                            <div className="flex items-center justify-between p-6 bg-muted rounded-lg">
                              <div>
                                <div className="text-3xl font-bold">{product.price}</div>
                                <div className="text-sm text-muted-foreground">or {product.payuPrice} with PAYU</div>
                              </div>
                              <Button size="lg" style={{ backgroundColor: '#8FC240' }}>Buy Now</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Link href={`/blog/${product.id}`} className="flex-1">
                        <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 bg-gradient-to-br from-card hover:shadow-2xl transition-shadow" style={{ borderColor: '#8FC240' + '33', background: 'linear-gradient(to bottom right, var(--card), #8FC240' + '0D)' }}>
            <CardContent className="p-8 md:p-12 text-center space-y-6 cta-content">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Can't Decide?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our team is here to help you find the perfect smartphone for your needs and budget
              </p>
              <Button size="lg" style={{ backgroundColor: '#8FC240' }}>Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}











// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Star, Battery, Camera, Cpu, Smartphone, HardDrive, Eye } from "lucide-react"
// import Link from "next/link"

// export default function ProductsPage() {
//   const products = [
//     {
//       id: "astro-blaze-x",
//       name: "Astro Blaze X",
//       tagline: "Flagship Performance",
//       price: "$299",
//       payuPrice: "$25/month",
//       image: "/premium-flagship-smartphone.jpg",
//       rating: 4.8,
//       specs: {
//         display: '6.7" AMOLED',
//         processor: "Octa-core 2.4GHz",
//         ram: "8GB RAM",
//         storage: "128GB Storage",
//         camera: "48MP Triple Camera",
//         battery: "5000mAh",
//       },
//       features: ["5G Ready", "Fast Charging", "Dual SIM", "Fingerprint Sensor", "Water Resistant", "Wireless Charging"],
//       tag: "Flagship",
//       description:
//         "Experience flagship performance with the Astro Blaze X. Featuring cutting-edge technology, stunning AMOLED display, and powerful camera system for professional-grade photography.",
//     },
//     {
//       id: "astro-energy",
//       name: "Astro Energy",
//       tagline: "Power That Lasts",
//       price: "$199",
//       payuPrice: "$18/month",
//       image: "/modern-smartphone-with-long-battery.jpg",
//       rating: 4.5,
//       specs: {
//         display: '6.5" IPS LCD',
//         processor: "Octa-core 2.0GHz",
//         ram: "6GB RAM",
//         storage: "64GB Storage",
//         camera: "32MP Dual Camera",
//         battery: "6000mAh",
//       },
//       features: ["Long Battery Life", "Fast Charging", "Dual SIM", "Face Unlock", "Expandable Storage"],
//       tag: "Best Seller",
//       description:
//         "Never worry about battery life again. The Astro Energy features a massive 6000mAh battery that keeps you connected all day long, perfect for heavy users and travelers.",
//     },
//     {
//       id: "astro-smartone",
//       name: "Astro SmartOne",
//       tagline: "Smart & Affordable",
//       price: "$129",
//       payuPrice: "$12/month",
//       image: "/affordable-budget-smartphone.jpg",
//       rating: 4.2,
//       specs: {
//         display: '6.2" IPS LCD',
//         processor: "Quad-core 1.8GHz",
//         ram: "4GB RAM",
//         storage: "32GB Storage",
//         camera: "16MP Dual Camera",
//         battery: "4000mAh",
//       },
//       features: ["Expandable Storage", "Dual SIM", "Face Unlock", "FM Radio", "Long Battery"],
//       tag: "Budget",
//       description:
//         "Affordable doesn't mean compromise. The Astro SmartOne delivers essential smartphone features at an unbeatable price, perfect for first-time smartphone users.",
//     },
//     {
//       id: "astro-pro-max",
//       name: "Astro Pro Max",
//       tagline: "Professional Grade",
//       price: "$399",
//       payuPrice: "$35/month",
//       image: "/professional-premium-smartphone.jpg",
//       rating: 4.9,
//       specs: {
//         display: '6.8" AMOLED 120Hz',
//         processor: "Octa-core 2.8GHz",
//         ram: "12GB RAM",
//         storage: "256GB Storage",
//         camera: "64MP Quad Camera",
//         battery: "5500mAh",
//       },
//       features: ["5G Ready", "Wireless Charging", "IP68 Water Resistant", "In-Display Fingerprint", "120Hz Display"],
//       tag: "Premium",
//       description:
//         "The ultimate professional smartphone. With 12GB RAM, 120Hz display, and quad camera system, the Astro Pro Max is built for power users who demand the best.",
//     },
//     {
//       id: "astro-lite",
//       name: "Astro Lite",
//       tagline: "Essential Features",
//       price: "$99",
//       payuPrice: "$10/month",
//       image: "/basic-entry-level-smartphone.jpg",
//       rating: 4.0,
//       specs: {
//         display: '6.0" IPS LCD',
//         processor: "Quad-core 1.6GHz",
//         ram: "3GB RAM",
//         storage: "32GB Storage",
//         camera: "13MP Single Camera",
//         battery: "3500mAh",
//       },
//       features: ["Compact Design", "Dual SIM", "Expandable Storage", "Long Battery Life", "FM Radio"],
//       tag: "Entry",
//       description:
//         "Simple, reliable, and affordable. The Astro Lite is perfect for those who need a dependable smartphone for calls, messages, and basic apps.",
//     },
//     {
//       id: "astro-vision",
//       name: "Astro Vision",
//       tagline: "Camera Excellence",
//       price: "$249",
//       payuPrice: "$22/month",
//       image: "/smartphone-with-excellent-camera.jpg",
//       rating: 4.6,
//       specs: {
//         display: '6.6" AMOLED',
//         processor: "Octa-core 2.2GHz",
//         ram: "8GB RAM",
//         storage: "128GB Storage",
//         camera: "50MP Triple Camera",
//         battery: "4800mAh",
//       },
//       features: ["Night Mode", "4K Video", "AI Camera", "Optical Zoom", "Pro Mode"],
//       tag: "Camera",
//       description:
//         "Capture life's moments in stunning detail. The Astro Vision features a 50MP camera with AI enhancements, night mode, and professional photography tools.",
//     },
//   ]

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <Badge className="w-fit mx-auto">Our Products</Badge>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
//               Find Your Perfect{" "}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Smartphone</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
//               From budget-friendly to flagship devices, we have a smartphone for every need and budget
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, i) => (
//               <Card key={i} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                 <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
//                   <Badge className="absolute top-4 left-4 z-10">{product.tag}</Badge>
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <CardContent className="p-6 space-y-4">
//                   <div>
//                     <h3 className="font-bold text-2xl mb-1">{product.name}</h3>
//                     <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
//                     <div className="flex items-center gap-1">
//                       {[...Array(5)].map((_, starIndex) => (
//                         <Star
//                           key={starIndex}
//                           className={`w-4 h-4 ${
//                             starIndex < Math.floor(product.rating)
//                               ? "fill-primary text-primary"
//                               : "fill-muted text-muted"
//                           }`}
//                         />
//                       ))}
//                       <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
//                     </div>
//                   </div>

//                   <div className="pt-4 border-t border-border space-y-3">
//                     <div className="flex gap-2">
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button variant="outline" className="flex-1 bg-transparent">
//                             <Eye className="w-4 h-4 mr-2" />
//                             View
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//                           <DialogHeader>
//                             <DialogTitle className="text-2xl">{product.name}</DialogTitle>
//                           </DialogHeader>
//                           <div className="space-y-6">
//                             {/* Product Image */}
//                             <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
//                               <img
//                                 src={product.image || "/placeholder.svg"}
//                                 alt={product.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>

//                             {/* Description */}
//                             <div>
//                               <h3 className="font-semibold text-lg mb-2">{product.tagline}</h3>
//                               <p className="text-muted-foreground leading-relaxed">{product.description}</p>
//                             </div>

//                             {/* Detailed Specs */}
//                             <div>
//                               <h4 className="font-semibold mb-4">Technical Specifications</h4>
//                               <div className="grid sm:grid-cols-2 gap-4">
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <Smartphone className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">Display</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.display}</div>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <Cpu className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">Processor</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.processor}</div>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <Cpu className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">RAM</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.ram}</div>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <HardDrive className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">Storage</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.storage}</div>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <Camera className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">Camera</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.camera}</div>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
//                                   <Battery className="w-5 h-5 text-primary mt-0.5" />
//                                   <div>
//                                     <div className="text-sm font-medium">Battery</div>
//                                     <div className="text-sm text-muted-foreground">{product.specs.battery}</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Features */}
//                             <div>
//                               <h4 className="font-semibold mb-3">Key Features</h4>
//                               <div className="flex flex-wrap gap-2">
//                                 {product.features.map((feature, j) => (
//                                   <Badge key={j} variant="secondary">
//                                     {feature}
//                                   </Badge>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Pricing */}
//                             <div className="flex items-center justify-between p-6 bg-muted rounded-lg">
//                               <div>
//                                 <div className="text-3xl font-bold">{product.price}</div>
//                                 <div className="text-sm text-muted-foreground">or {product.payuPrice} with PAYU</div>
//                               </div>
//                               <Button size="lg">Buy Now</Button>
//                             </div>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                       <Link href={`/blog/${product.id}`} className="flex-1">
//                         <Button className="w-full">Learn More</Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
//             <CardContent className="p-8 md:p-12 text-center space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-balance">Can't Decide?</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//                 Our team is here to help you find the perfect smartphone for your needs and budget
//               </p>
//               <Button size="lg">Contact Us</Button>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
