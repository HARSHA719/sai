import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Activity1() {
  return (
    <div className="min-h-screen p-8 lg:p-16 bg-gradient-to-br from-background via-background to-amber-950/5">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Banner */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 border border-amber-500/30 p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-2xl">
              <span className="text-5xl">☀️</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-foreground">
                Rooftop Solar PV System
              </h1>
              <p className="text-xl font-semibold text-primary">5 kW Residential Setup</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Block Diagram - Takes 2 columns */}
          <Card className="lg:col-span-2 bg-card border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">System Architecture</h2>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-2xl p-8 border-2 border-amber-200/50 dark:border-amber-900/30">
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                {/* Sun */}
                <circle cx="650" cy="80" r="35" fill="#FDB022" />
                <line x1="650" y1="45" x2="650" y2="25" stroke="#FDB022" strokeWidth="3" />
                <line x1="685" y1="80" x2="705" y2="80" stroke="#FDB022" strokeWidth="3" />
                <line x1="615" y1="80" x2="595" y2="80" stroke="#FDB022" strokeWidth="3" />
                <line x1="673" y1="58" x2="687" y2="44" stroke="#FDB022" strokeWidth="3" />
                <line x1="627" y1="102" x2="613" y2="116" stroke="#FDB022" strokeWidth="3" />

                {/* Solar Panel on House */}
                <rect x="100" y="150" width="140" height="100" fill="#2E4057" stroke="#1E293B" strokeWidth="2" />
                <rect x="100" y="250" width="40" height="80" fill="#2E4057" stroke="#1E293B" strokeWidth="2" />
                <rect x="160" y="270" width="30" height="60" fill="#2E4057" stroke="#1E293B" strokeWidth="2" />
                <path d="M 100 150 L 170 100 L 240 150 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                
                {/* Solar Panel Grid */}
                <rect x="120" y="95" width="100" height="60" fill="#10B981" stroke="#059669" strokeWidth="2" rx="4" />
                <line x1="145" y1="95" x2="145" y2="155" stroke="#059669" strokeWidth="1" />
                <line x1="170" y1="95" x2="170" y2="155" stroke="#059669" strokeWidth="1" />
                <line x1="195" y1="95" x2="195" y2="155" stroke="#059669" strokeWidth="1" />
                <line x1="120" y1="115" x2="220" y2="115" stroke="#059669" strokeWidth="1" />
                <line x1="120" y1="135" x2="220" y2="135" stroke="#059669" strokeWidth="1" />
                <text x="170" y="180" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">5 kW</text>

                {/* Arrow from Sun to Panel */}
                <path d="M 620 90 Q 400 50 240 110" stroke="#FDB022" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />

                {/* Charge Controller */}
                <rect x="350" y="110" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <text x="410" y="145" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold">CHARGE</text>
                <text x="410" y="165" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold">CONTROLLER</text>

                {/* Arrow Panel to Controller */}
                <path d="M 240 125 L 350 140" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Battery */}
                <rect x="350" y="250" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <rect x="370" y="270" width="30" height="40" fill="#1E293B" rx="2" />
                <rect x="420" y="270" width="30" height="40" fill="#1E293B" rx="2" />
                <rect x="385" y="265" width="10" height="8" fill="#1E293B" />
                <rect x="425" y="265" width="10" height="8" fill="#1E293B" />
                <text x="410" y="350" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">48 V</text>

                {/* Arrow Controller to Battery */}
                <path d="M 410 190 L 410 250" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Inverter */}
                <rect x="550" y="250" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <text x="610" y="285" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold">INVERTER</text>
                <text x="610" y="310" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="bold">DC → AC</text>

                {/* Arrow Battery to Inverter */}
                <path d="M 470 290 L 550 290" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Loads */}
                <rect x="550" y="380" width="120" height="80" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <text x="610" y="415" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold">LOADS</text>
                <text x="610" y="435" textAnchor="middle" fill="#1E293B" fontSize="12">Home</text>
                <text x="610" y="450" textAnchor="middle" fill="#1E293B" fontSize="12">Appliances</text>

                {/* Arrow Inverter to Loads */}
                <path d="M 610 330 L 610 380" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead)" />

                {/* Arrow from Inverter to House */}
                <path d="M 550 290 Q 350 320 190 280" stroke="#FDB022" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />

                {/* Arrow definitions */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#FDB022" />
                  </marker>
                </defs>
              </svg>
            </div>
          </Card>

          {/* Specifications Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">5 kW</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">System Capacity</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">DC → AC</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Conversion</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">SDG 7</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Clean Energy</div>
            </Card>
          </div>
        </div>

        {/* Explanation Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">1</div>
              Source of Energy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The system harnesses solar energy directly from sunlight using photovoltaic (PV) panels installed on the rooftop. These panels capture photons and convert them into electrical energy through the photoelectric effect.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">2</div>
              Conversion Process
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Solar panels convert sunlight into DC electricity through the photovoltaic effect. The generated DC power passes through a charge controller, which optimizes energy flow using Maximum Power Point Tracking (MPPT) and protects the battery from overcharging. The stored DC power in the battery bank is then converted into AC power using an inverter to operate household appliances.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">3</div>
              Output/Utilization
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This 5 kW system supplies energy for home lighting, fans, and electronic appliances while also enabling grid connection under net metering. The battery provides backup during power outages, ensuring a stable supply. Excess energy can be fed back to the grid, reducing electricity bills.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">4</div>
              Real-World Application
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This system is ideal for urban and suburban homes, reducing electricity bills and grid dependency. It supports sustainable living, minimizes carbon emissions, and aligns with SDG 7: Affordable and Clean Energy. The configuration ensures energy independence while contributing to environmental conservation.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
