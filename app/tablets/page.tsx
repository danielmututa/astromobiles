"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Camera, Cpu, HardDrive, Tablet } from "lucide-react"
import Link from "next/link"

export default function TabletsPage() {
  const tablets = [
    {
      id: "astro-tab-pro",
      name: "Astro Tab Pro",
      tagline: "Professional Productivity",
      image: "/TABLETS_PAD_8.jpg",
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
      name: "Astro Tab Edu",
      tagline: "Perfect for Learning",
      image: "/TABLETS_PAD_11.jpg",
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
    {
      id: "astro-tab-lite",
      name: "Astro Tab Lite",
      tagline: "Entertainment Essential",
      image: "/TABLETS_PAD_R7.jpg",
      specs: {
        display: '8" IPS LCD',
        ram: "3GB RAM",
        storage: "32GB Storage",
        camera: "5MP Rear / 2MP Front",
        battery: "5000mAh",
        processor: "Quad-core 1.8GHz",
        features: ["Compact Design", "Expandable Storage", "Dual Speakers"],
      },
    },
  ]

  

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12  flex justify-center flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our tablet collection designed for productivity, education, and entertainment. Large screens and
              powerful performance for every need.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">


          {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
 <video
      playsInline
      autoPlay
      muted
      loop
      preload="auto"
      className="w-full h-auto rounded-2xl"
    >
      <source
        src="https://www.hotwav.com/cdn/shop/videos/c/vp/65d15bb7/65d15bb7.HD-1080p-3.3Mbps-19101654.mp4?v=0"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>



{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}


            {tablets.map((tablet) => (
              <Card key={tablet.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
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

                  <div className="flex justify-between ">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="px-3 bg-transparent">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{tablet.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img
                            src={tablet.image || "/placeholder.svg"}
                            alt={tablet.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Specifications</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <Tablet className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Display</div>
                                  <div className="text-sm text-muted-foreground">{tablet.specs.display}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <HardDrive className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Memory</div>
                                  <div className="text-sm text-muted-foreground">
                                    {tablet.specs.ram} / {tablet.specs.storage}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Camera className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Camera</div>
                                  <div className="text-sm text-muted-foreground">{tablet.specs.camera}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Battery className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Battery</div>
                                  <div className="text-sm text-muted-foreground">{tablet.specs.battery}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Cpu className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Processor</div>
                                  <div className="text-sm text-muted-foreground">{tablet.specs.processor}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {tablet.specs.features.map((feature, i) => (
                                <Badge key={i} variant="secondary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div>
                              
                            </div>
                            <Button size="lg">Buy Now</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Link href={`/blog/${tablet.id}`}>
                      <Button className="w-full">Learn More</Button>
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
