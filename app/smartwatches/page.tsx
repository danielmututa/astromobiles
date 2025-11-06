"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Heart, Watch, Activity } from "lucide-react"
import Link from "next/link"

export default function SmartwatchesPage() {
  const smartwatches = [
    {
      id: "astro-watch-pro",
      name: "Astro Watch Pro",
      tagline: "Premium Health Tracking",
      image: "/PULSE_SINGLE_1.jpg",
      specs: {
        display: '1.4" AMOLED Always-On',
        battery: "7 Days Battery Life",
        waterproof: "5ATM Water Resistant",
        sensors: "Heart Rate, SpO2, Sleep, Stress",
        connectivity: "Bluetooth 5.0, GPS",
        features: [
          "100+ Sport Modes",
          "Music Control",
          "Call Notifications",
          "Weather Updates",
          "Find My Phone",
          "Customizable Watch Faces",
        ],
      },
    },
    {
      id: "astro-watch-fit",
      name: "Astro Watch Fit",
      tagline: "Fitness Focused",
      image: "/PULSE_SINGLE_2.jpg",
      specs: {
        display: '1.3" TFT LCD',
        battery: "10 Days Battery Life",
        waterproof: "IP68 Water Resistant",
        sensors: "Heart Rate, Steps, Calories",
        connectivity: "Bluetooth 5.0",
        features: ["50+ Sport Modes", "Sleep Tracking", "Call Notifications", "Long Battery Life"],
      },
    },
    {
      id: "astro-watch-lite",
      name: "Astro Watch Lite",
      tagline: "Essential Smartwatch",
      image: "/PULSE_SINGLE_4.jpg",
      specs: {
        display: '1.2" TFT LCD',
        battery: "14 Days Battery Life",
        waterproof: "IP67 Water Resistant",
        sensors: "Heart Rate, Steps",
        connectivity: "Bluetooth 4.2",
        features: ["Basic Fitness Tracking", "Notifications", "Ultra Long Battery", "Affordable"],
      },
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Watch className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Smartwatches</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay connected and track your health with our smartwatch collection. From premium health tracking to
              essential fitness features.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {smartwatches.map((watch) => (
              <Card key={watch.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={watch.image || "/placeholder.svg"}
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="px-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{watch.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{watch.tagline}</p>
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
                          <DialogTitle className="text-2xl">{watch.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img
                            src={watch.image || "/placeholder.svg"}
                            alt={watch.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Specifications</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <Watch className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Display</div>
                                  <div className="text-sm text-muted-foreground">{watch.specs.display}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Battery className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Battery</div>
                                  <div className="text-sm text-muted-foreground">{watch.specs.battery}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Activity className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Water Resistance</div>
                                  <div className="text-sm text-muted-foreground">{watch.specs.waterproof}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Heart className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Health Sensors</div>
                                  <div className="text-sm text-muted-foreground">{watch.specs.sensors}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {watch.specs.features.map((feature, i) => (
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

                    <Link href={`/blog/${watch.id}`}>
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
