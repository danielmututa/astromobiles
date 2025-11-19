// ============================================
// FILE 1: /app/tablets/page.js (LIST PAGE)
// ============================================

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tablet } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TabletsPage() {
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const productsRef = useRef(null)

  const tablets = [
    {
      id: "astro-tab-pro",
      name: "Astro iPad 11",
      tagline: "Professional Productivity",
      image: "/TABLETS_PAD_8.jpg",
      img: "/logo3.png",
      price: "399",
      title: "From $20us + usage top ups",
    },
    {
      id: "astro-tab-lite",
      name: "Astro Tab 8",
      tagline: "Perfect for Learning",
      image: "/TABLETS_PAD_11.jpg",
      img: "/logo3.png",
      price: "199",
      title: "From $20us + usage top ups",
    },
    {
      id: "astro-tab-kids",
      name: "Astro Tab Kids",
      tagline: "Safe and fun tablet for children",
      image: "/tablets/tab-kids.jpg",
      img: "/logo3.png",
      price: "149",
      title: "From $20us + usage top ups",
    }
  ]

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelectorAll('.header-content > *'),
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="mb-12 flex justify-center items-center flex-col header-content">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="w-8 h-8" style={{ color: '#8FC240' }} />
              <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl text-center">
              Explore our tablet collection designed for productivity, education, and entertainment. Large screens and powerful performance for every need.
            </p>
          </div>

          {/* Products Grid */}
          <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tablets.map((tablet) => (
              <Card key={tablet.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square from-muted to-muted/50 overflow-hidden">
                  <img
                    src={tablet.image || "/placeholder.svg"}
                    alt={tablet.name}
                    className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="px-6 py-2 space-y-2">
                  <div className="pb-2">
                    <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
                    <p className="text-sm text-muted-foreground">{tablet.tagline}</p>
                  </div>

                  <div className="flex justify-between">
                    {/* THIS IS THE KEY LINK - MATCHES SMARTPHONES PATTERN */}
                    <Link href={`/blog/${tablet.id}`}>
                      <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}





// ============================================
// FILE 2: /app/blog/[id]/page.js (DETAIL PAGE - UPDATE THIS ONE!)
// ============================================
// This is your EXISTING smartphone detail page
// ADD tablet support to it by modifying the getProductById call

/*
"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Battery, Camera, Cpu, HardDrive, Smartphone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getProductById } from "@/Database/products"

gsap.registerPlugin(ScrollTrigger)

export default function ProductDetailPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0)
  const scrollRef = useRef(null)
  const heroRef = useRef(null)
  const specsRef = useRef(null)
  const featuresRef = useRef(null)

  // TRY TO GET FROM SMARTPHONES FIRST, THEN TABLETS
  let product = getProductById('smartphones', params.id)
  let productType = 'smartphone'
  
  if (!product) {
    product = getProductById('tablets', params.id)
    productType = 'tablet'
  }

  // REST OF YOUR EXISTING CODE STAYS THE SAME...
  // Just replace all instances of "phone" variable with "product"
  // And update the back link to be dynamic

  useEffect(() => {
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

    if (specsRef.current) {
      gsap.fromTo(
        specsRef.current.querySelectorAll('.spec-item'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: specsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-card'),
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: featuresRef.current,
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

  useEffect(() => {
    if (product?.carouselImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.carouselImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [product])

  useEffect(() => {
    if (product?.carouselImagestwo) {
      const interval = setInterval(() => {
        setCurrentImageIndex2((prev) => (prev + 1) % product.carouselImagestwo.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen relative" ref={scrollRef}>
        <ThreeBackground />
        <Navigation />
        <main className="pt-24 pb-16 relative z-10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Link href="/smartphones">
              <Button style={{ backgroundColor: '#8FC240' }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const backLink = productType === 'smartphone' ? '/smartphones' : '/tablets'
  const backText = productType === 'smartphone' ? 'Smartphones' : 'Tablets'

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href={backLink} className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {backText}
          </Link>

          <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 mb-16 hero-content">
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
                <img
                  src={product.carouselImages?.[currentImageIndex] || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {product.carouselImages && product.carouselImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {product.carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-[#8FC240] w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-muted-foreground">{product.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: '#8FC240' }}>${product.price}</span>
                {product.payuPrice && (
                  <span className="text-lg text-muted-foreground">or {product.payuPrice} with PAYU</span>
                )}
              </div>

              <p className="text-lg">{product.title}</p>

              {product.phoneType && (
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">{product.phoneType.heading}</h3>
                  <p className="text-muted-foreground">{product.phoneType.description}</p>
                </div>
              )}

              <div className="flex gap-4">
                <Button size="lg" className="flex-1" style={{ backgroundColor: '#8FC240' }}>
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>

          {product.bannerImage && (
            <div className="mb-16 rounded-lg overflow-hidden">
              <img src={product.bannerImage} alt={`${product.name} banner`} className="w-full h-auto" />
            </div>
          )}

          <div ref={specsRef} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="spec-item">
                <CardContent className="p-6 flex items-start gap-4">
                  <Smartphone className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Display</h3>
                    <p className="text-muted-foreground">{product.specs.display}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="spec-item">
                <CardContent className="p-6 flex items-start gap-4">
                  <Cpu className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Processor</h3>
                    <p className="text-muted-foreground">{product.specs.processor}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="spec-item">
                <CardContent className="p-6 flex items-start gap-4">
                  <HardDrive className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Memory</h3>
                    <p className="text-muted-foreground">{product.specs.ram} / {product.specs.storage}</p>
                  </div>
                </CardContent>
              </Card>

              {product.specs.camera && typeof product.specs.camera === 'string' && (
                <Card className="spec-item">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Camera className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                    <div>
                      <h3 className="font-semibold mb-1">Camera</h3>
                      <p className="text-muted-foreground">{product.specs.camera}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="spec-item">
                <CardContent className="p-6 flex items-start gap-4">
                  <Battery className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Battery</h3>
                    <p className="text-muted-foreground">{product.specs.battery}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="spec-item">
                <CardContent className="p-6 flex items-start gap-4">
                  <Star className="w-8 h-8 flex-shrink-0" style={{ color: '#8FC240' }} />
                  <div>
                    <h3 className="font-semibold mb-1">Features</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.specs.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {product.specs.camera && Array.isArray(product.specs.camera) && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Camera System</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {product.specs.camera.map((cam, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Camera className="w-6 h-6" style={{ color: '#8FC240' }} />
                        <h3 className="font-semibold text-lg">{cam.title}</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {cam.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {product.carouselImagestwo && product.carouselImagestwo.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden">
                <img
                  src={product.carouselImagestwo[currentImageIndex2]}
                  alt={`${product.name} gallery`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {product.carouselImagestwo.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex2(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex2 ? 'bg-[#8FC240] w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {product.imageExplanations && product.imageExplanations.length > 0 && (
            <div ref={featuresRef} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose {product.name}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {product.imageExplanations.map((item, index) => (
                  <Card key={index} className="feature-card overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.explanation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-[#8FC240]/20 to-[#8FC240]/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get your {product.name}?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our flexible payment options and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{ backgroundColor: '#8FC240' }}>Order Now</Button>
              <Button size="lg" variant="outline">Schedule a Demo</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
*/









// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tablet } from "lucide-react"
// import Link from "next/link"
// import { useEffect, useRef } from "react"
// import ThreeBackground from "@/components/ThreeBackground"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function TabletsPage() {
//   const scrollRef = useRef(null)
//   const headerRef = useRef(null)
//   const productsRef = useRef(null)

//   const tablets = [
//     {
//       id: "astro-tab-pro",
//       name: "Astro iPad 11",
//       tagline: "Professional Productivity",
//       image: "/TABLETS_PAD_8.jpg",
//       img: "/logo3.png",
//       price: "80",
//       title: "From $20us + usage top ups",
//       specs: {
//         display: '11" AMOLED 2K',
//         ram: "8GB RAM",
//         storage: "256GB Storage",
//         camera: "13MP Rear / 8MP Front",
//         battery: "8000mAh",
//         processor: "Octa-core 2.6GHz",
//         features: ["Stylus Support", "Keyboard Compatible", "Fast Charging", "Quad Speakers", "Face Unlock"],
//       },
//     },
//     {
//       id: "astro-tab-lite",
//       name: "Astro Tab 8",
//       tagline: "Perfect for Learning",
//       image: "/TABLETS_PAD_11.jpg",
//       img: "/logo3.png",
//       price: "80",
//       title: "From $20us + usage top ups",
//       specs: {
//         display: '10.1" IPS LCD',
//         ram: "4GB RAM",
//         storage: "64GB Storage",
//         camera: "8MP Rear / 5MP Front",
//         battery: "6000mAh",
//         processor: "Octa-core 2.0GHz",
//         features: ["Parental Controls", "Educational Apps", "Durable Design", "Long Battery Life"],
//       },
//     },
//     {
//       id: "astro-tab-kids",
//       name: "Astro Tab Kids",
//       tagline: "Safe and fun tablet for children",
//       image: "/tablets/tab-kids.jpg",
//       img: "/logo3.png",
//       price: "149",
//       title: "From $20us + usage top ups",
//       specs: {
//         display: '8" LCD',
//         ram: "3GB RAM",
//         storage: "32GB Storage",
//         camera: "5MP Rear / 2MP Front",
//         battery: "5000mAh",
//         processor: "Quad-core 1.8GHz",
//         features: ["Parental Controls", "Durable Case", "Kid-Friendly Apps", "Blue Light Filter"],
//       },
//     }
//   ]

//   useEffect(() => {
//     // Header animations
//     if (headerRef.current) {
//       gsap.fromTo(
//         headerRef.current.querySelectorAll('.header-content > *'),
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           delay: 0.3
//         }
//       )
//     }

//     // Products section animations
//     if (productsRef.current) {
//       gsap.fromTo(
//         productsRef.current.querySelectorAll('.product-card'),
//         { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotateY: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: productsRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <div className="min-h-screen relative" ref={scrollRef}>
//       <ThreeBackground />
//       <Navigation />

//       <main className="pt-24 pb-16 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Header */}
//           <div ref={headerRef} className="mb-12 flex justify-center items-center flex-col header-content">
//             <div className="flex items-center gap-3 mb-4">
//               <Tablet className="w-8 h-8" style={{ color: '#8FC240' }} />
//               <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
//             </div>
//             <p className="text-lg text-muted-foreground max-w-2xl text-center">
//               Explore our tablet collection designed for productivity, education, and entertainment. Large screens and powerful performance for every need.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {tablets.map((tablet) => (
//               <Card key={tablet.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
//                 <div className="relative aspect-square from-muted to-muted/50 overflow-hidden">
//                   <img
//                     src={tablet.image || "/placeholder.svg"}
//                     alt={tablet.name}
//                     className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <CardContent className="px-6 py-2 space-y-2">
//                   <div className="pb-2">
//                     <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
//                     <p className="text-sm text-muted-foreground">{tablet.tagline}</p>
//                   </div>

//                   <div className="flex justify-between">
//                     <Link href={`/tablets/${tablet.id}`}>
//                       <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
//                         Learn More
//                       </Button>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }