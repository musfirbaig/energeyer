'use client'

import { Activity, Cpu, LineChart, BarChart3, Smartphone, AlertTriangle, Zap, Settings2, FileBarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from 'next/link'

export default function SolutionsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const solutions = [
    {
      id: 1,
      title: "Layer-I",
      subtitle: "Digitalization & Data Analytics",
      icon: <Activity className="h-8 w-8" />,
      sections: [
        {
          title: "Digitalization",
          features: [
            {
              icon: <BarChart3 className="h-5 w-5" />,
              text: "Dashboard for real-time monitoring"
            },
            {
              icon: <Smartphone className="h-5 w-5" />,
              text: "Mobile App for remote monitoring"
            }
          ]
        },
        {
          title: "Data Analytics",
          features: [
            {
              icon: <AlertTriangle className="h-5 w-5" />,
              text: "Anomalies detection"
            },
            {
              icon: <Settings2 className="h-5 w-5" />,
              text: "Just-in-time assisted process optimization"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Layer-II",
      subtitle: "Gray-Box Digital Twin",
      icon: <Cpu className="h-8 w-8" />,
      features: [
        {
          icon: <Zap className="h-5 w-5" />,
          text: "Identification of location of energy losses"
        },
        {
          icon: <Settings2 className="h-5 w-5" />,
          text: "Model-assisted process optimization"
        }
      ]
    },
    {
      id: 3,
      title: "Layer-III",
      subtitle: "Predictive Maintenance",
      icon: <LineChart className="h-8 w-8" />,
      features: [
        {
          icon: <FileBarChart className="h-5 w-5" />,
          text: "Data-based analysis of equipment"
        },
        {
          icon: <AlertTriangle className="h-5 w-5" />,
          text: "Instabilities report and recommendations"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Layers of Solutions within the{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            EnergEyer
          </span>
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={cn(
                "relative overflow-hidden border-0 bg-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/15",
                hoveredCard === solution.id ? "ring-2 ring-blue-400" : ""
              )}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-50" />
              
              <CardHeader className="relative space-y-2 bg-blue-500/90 p-6">
                <div className="flex items-center gap-3">
                  {solution.icon}
                  <div>
                    <h2 className="text-2xl font-bold text-white">{solution.title}</h2>
                    <p className="text-sm text-blue-100">{solution.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6 p-6">
                {'sections' in solution ? (
                  solution.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center gap-3 text-gray-300">
                            {feature.icon}
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Features</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          {feature.icon}
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>

              <CardFooter className="relative flex gap-4 p-6">
                <Button
                  variant="default"
                  className="flex-1 bg-blue-500 hover:bg-blue-600"
                >
                  <Link href={'#contact'}>Request Demo</Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Request Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

