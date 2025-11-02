import { Link } from "react-router-dom";
import { Sun, Wind, Droplets, ArrowRight, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Solar PV System",
    subtitle: "5 kW Rooftop Installation",
    description: "Residential rooftop solar photovoltaic system with battery storage and grid connection for sustainable home energy.",
    icon: Sun,
    link: "/activity-1",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
  },
  {
    id: 2,
    title: "Hybrid System",
    subtitle: "Solar + Wind Power",
    description: "Combined renewable energy system integrating solar panels and wind turbines for reliable power generation.",
    icon: Wind,
    link: "/activity-2",
    gradient: "from-blue-500 via-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Solar Irrigation",
    subtitle: "Agricultural Solution",
    description: "Solar-powered water pumping system designed for sustainable agricultural irrigation in rural areas.",
    icon: Droplets,
    link: "/activity-3",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
  },
];

const stats = [
  { value: "3", label: "Projects", icon: Zap },
  { value: "100%", label: "Renewable", icon: Leaf },
  { value: "Clean", label: "Energy", icon: Sun },
  { value: "SDG 7", label: "Goal Aligned", icon: Wind },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 lg:p-16 bg-gradient-to-br from-background via-background to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-secondary/50 backdrop-blur-sm rounded-full border border-border/50">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Clean & Green Energy</span>
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Renewable Energy
                </span>
                <br />
                <span className="text-foreground">Portfolio</span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-6">
                <p className="text-xl text-primary font-semibold mb-3">
                  Sai Susanth Reddy • RA2311026010795
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Three innovative renewable energy design projects showcasing sustainable power generation solutions for solar PV systems, hybrid configurations, and agricultural applications.
                </p>
              </div>
            </div>
          </div>

          {/* Project Cards - Horizontal Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Link key={project.id} to={project.link}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-border hover:border-primary/50 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary/80">{project.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                      Explore Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </Link>
            ))}
          </div>

          {/* Stats Section - Modern Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/50 border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative p-8 text-center">
                  <stat.icon className="w-8 h-8 text-primary/40 mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
