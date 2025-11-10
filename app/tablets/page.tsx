"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Camera, Cpu, HardDrive, Tablet } from "lucide-react"
import Link from "next/link"
import { HiShoppingCart } from "react-icons/hi";
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
      name: "Astro ipad 11",
      tagline: "Professional Productivity",
      image: "/TABLETS_PAD_8.jpg",
    img:"/logo3.png",
      price:"80",
      specs: {
        display: '11" AMOLED 2K',
        ram: "8GB RAM",
        storage: "256GB Storage",
        camera: "13MP Rear / 8MP Front",
        battery: "8000mAh",
        processor: "Octa-core 2.6GHz",
        features: ["Stylus Support", "Keyboard Compatible", "Fast Charging", "Quad Speakers", "Face Unlock"],
      },
    },
    {
      id: "astro-tab-edu",
      name: "Astro Tab 8",
      tagline: "Perfect for Learning",
      image: "/TABLETS_PAD_11.jpg",
     img:"/logo3.png",
      price:"80",
      specs: {
        display: '10.1" IPS LCD',
        ram: "4GB RAM",
        storage: "64GB Storage",
        camera: "8MP Rear / 5MP Front",
        battery: "6000mAh",
        processor: "Octa-core 2.0GHz",
        features: ["Parental Controls", "Educational Apps", "Durable Design", "Long Battery Life"],
      },
    },
  
  ]

  useEffect(() => {
    // Header animations
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
          <div ref={headerRef} className="mb-12  flex justify-center flex-col items-center text-center header-content">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="w-8 h-8" style={{ color: '#8FC240' }} />
              <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our tablet collection designed for productivity, education, and entertainment. Large screens and
              powerful performance for every need.
            </p>
          </div>

          {/* Products Grid */}
          <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">




            {tablets.map((tablet) => (
              <Card key={tablet.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={tablet.image || "/placeholder.svg"}
                    alt={tablet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>


                <CardContent className="px-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{tablet.tagline}</p>
                  </div>



   <div className="flex justify-between">
               <div className="flex  cursor-pointer gap-2 items-center">
               
               <div className="flex   items-center">
               
               
                                <HiShoppingCart  className="text-[#8FC240]" size={20}/>
               
               <img
                                           src={tablet.img || "/placeholder.svg"}
                                       
                                           className=" h-[20px] object-cover"
                                         />
               
               </div>
               <p className="text-lg text-[#8FC240] ">${tablet.price}</p>
               
               </div>

 
        

                    <Link href={`/blog/${tablet.id}`}>
                      <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>Learn More</Button>
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










// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Star, Battery, Camera, Cpu, HardDrive, Tablet } from "lucide-react"
// import Link from "next/link"
// import { HiShoppingCart } from "react-icons/hi";

// export default function TabletsPage() {
//   const tablets = [
//     {
//       id: "astro-tab-pro",
//       name: "Astro ipad 11",
//       tagline: "Professional Productivity",
//       image: "/TABLETS_PAD_8.jpg",
//     img:"/logo3.png",
//       price:"80",
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
//       id: "astro-tab-edu",
//       name: "Astro Tab 8",
//       tagline: "Perfect for Learning",
//       image: "/TABLETS_PAD_11.jpg",
//      img:"/logo3.png",
//       price:"80",
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
  
//   ]

  

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       <main className="pt-24 pb-16">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Header */}
//           <div className="mb-12  flex justify-center flex-col items-center text-center">
//             <div className="flex items-center gap-3 mb-4">
//               <Tablet className="w-8 h-8 text-primary" />
//               <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
//             </div>
//             <p className="text-lg text-muted-foreground max-w-2xl">
//               Explore our tablet collection designed for productivity, education, and entertainment. Large screens and
//               powerful performance for every need.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">




//             {tablets.map((tablet) => (
//               <Card key={tablet.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
//                 <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
//                   <img
//                     src={tablet.image || "/placeholder.svg"}
//                     alt={tablet.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>


//                 <CardContent className="px-6 space-y-4">
//                   <div>
//                     <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
//                     <p className="text-sm text-muted-foreground mb-2">{tablet.tagline}</p>
//                   </div>



//    <div className="flex justify-between">
//                <div className="flex  cursor-pointer gap-2 items-center">
               
//                <div className="flex   items-center">
               
               
//                                 <HiShoppingCart  className="text-[#8FC240]" size={20}/>
               
//                <img
//                                            src={tablet.img || "/placeholder.svg"}
                                       
//                                            className=" h-[20px] object-cover"
//                                          />
               
//                </div>
//                <p className="text-lg text-[#8FC240] ">${tablet.price}</p>
               
//                </div>

 
        

//                     <Link href={`/blog/${tablet.id}`}>
//                       <Button className="w-full">Learn More</Button>
//                     </Link>

//                     </div>
                  
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
