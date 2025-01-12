'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact Us
          </h2>
          <p className="text-lg text-gray-400">
            Have a question or ready to get started? Fill out the form below and our team will be in touch.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-0 bg-white/10" id='contact'>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Your Name"
                    className="border-blue-500/30 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-blue-500/30 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px] border-blue-500/30 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="overflow-hidden border-0 bg-white/10">
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-bold text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <p>+92 323 9545414</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <p>info@energeyer.tech</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <p>Regional plan 9, PITB, NASTP Rawalpindi, old airport.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-white/10">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.422270221904!2d72.9938665744116!3d33.64621883906271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9573aecd2f93%3A0x1c7fdc5084512ca2!2sNational%20Science%20and%20Technology%20Park%20NSTP!5e0!3m2!1sen!2s!4v1726642671177!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale filter"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

