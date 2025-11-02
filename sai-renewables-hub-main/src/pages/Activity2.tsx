import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Activity2() {
  return (
    <div className="min-h-screen p-8 lg:p-16 bg-gradient-to-br from-background via-background to-purple-950/5">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Banner */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 border border-purple-500/30 p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
              <span className="text-5xl">🌪️</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-foreground">
                Hybrid Renewable Energy System
              </h1>
              <p className="text-xl font-semibold text-primary">Solar + Wind Power Integration</p>
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
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border-2 border-purple-200/50 dark:border-purple-900/30">
              <svg viewBox="0 0 800 550" className="w-full h-auto">
                {/* Sun */}
                <circle cx="150" cy="80" r="30" fill="#FDB022" />
                <line x1="150" y1="50" x2="150" y2="35" stroke="#FDB022" strokeWidth="2" />
                <line x1="180" y1="80" x2="195" y2="80" stroke="#FDB022" strokeWidth="2" />
                <line x1="120" y1="80" x2="105" y2="80" stroke="#FDB022" strokeWidth="2" />

                {/* Wind */}
                <text x="650" y="90" fontSize="40" fill="#3B82F6">🌬️</text>
                
                {/* Solar Panel */}
                <rect x="100" y="160" width="100" height="70" fill="#10B981" stroke="#059669" strokeWidth="2" rx="4" />
                <line x1="120" y1="160" x2="120" y2="230" stroke="#059669" strokeWidth="1" />
                <line x1="140" y1="160" x2="140" y2="230" stroke="#059669" strokeWidth="1" />
                <line x1="160" y1="160" x2="160" y2="230" stroke="#059669" strokeWidth="1" />
                <line x1="180" y1="160" x2="180" y2="230" stroke="#059669" strokeWidth="1" />
                <line x1="100" y1="180" x2="200" y2="180" stroke="#059669" strokeWidth="1" />
                <line x1="100" y1="200" x2="200" y2="200" stroke="#059669" strokeWidth="1" />
                <line x1="100" y1="220" x2="200" y2="220" stroke="#059669" strokeWidth="1" />
                <text x="150" y="255" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">Solar Panel</text>

                {/* Wind Turbine */}
                <circle cx="650" cy="180" r="40" fill="none" stroke="#3B82F6" strokeWidth="3" />
                <line x1="650" y1="180" x2="690" y2="180" stroke="#3B82F6" strokeWidth="4" />
                <line x1="650" y1="180" x2="630" y2="145" stroke="#3B82F6" strokeWidth="4" />
                <line x1="650" y1="180" x2="625" y2="210" stroke="#3B82F6" strokeWidth="4" />
                <rect x="645" y="220" width="10" height="60" fill="#3B82F6" />
                <text x="650" y="300" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">Wind Turbine</text>

                {/* Arrow Sun to Solar */}
                <path d="M 150 110 L 150 160" stroke="#FDB022" strokeWidth="2" markerEnd="url(#arrowhead2)" />

                {/* Arrow Wind to Turbine */}
                <path d="M 680 80 L 680 140" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead3)" />

                {/* Charge Controllers */}
                <rect x="100" y="320" width="100" height="60" fill="#10B981" stroke="#059669" strokeWidth="2" rx="6" />
                <text x="150" y="345" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">Solar</text>
                <text x="150" y="360" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="bold">Controller</text>

                <rect x="600" y="320" width="100" height="60" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" rx="6" />
                <text x="650" y="345" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold">Wind</text>
                <text x="650" y="360" textAnchor="middle" fill="#FFF" fontSize="12" fontWeight="bold">Controller</text>

                {/* Arrows to Controllers */}
                <path d="M 150 230 L 150 320" stroke="#FDB022" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <path d="M 650 220 L 650 320" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead3)" />

                {/* Battery Bank */}
                <rect x="325" y="420" width="150" height="90" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <rect x="350" y="445" width="35" height="45" fill="#1E293B" rx="3" />
                <rect x="410" y="445" width="35" height="45" fill="#1E293B" rx="3" />
                <rect x="365" y="438" width="12" height="10" fill="#1E293B" />
                <rect x="415" y="438" width="12" height="10" fill="#1E293B" />
                <text x="400" y="435" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="bold">Battery Bank</text>

                {/* Arrows to Battery */}
                <path d="M 200 350 L 340 450" stroke="#FDB022" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <path d="M 600 350 L 460 450" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead3)" />

                {/* Inverter */}
                <rect x="325" y="300" width="150" height="70" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="8" />
                <text x="400" y="330" textAnchor="middle" fill="#FFF" fontSize="16" fontWeight="bold">INVERTER</text>
                <text x="400" y="350" textAnchor="middle" fill="#FFF" fontSize="12">DC → AC</text>

                {/* Arrow Battery to Inverter */}
                <path d="M 400 420 L 400 370" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrowhead2)" />

                {/* Grid Connection */}
                <rect x="325" y="150" width="150" height="80" fill="#F59E0B" stroke="#D97706" strokeWidth="2" rx="8" />
                <text x="400" y="185" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="bold">GRID</text>
                <text x="400" y="205" textAnchor="middle" fill="#1E293B" fontSize="12">Connection</text>

                {/* Loads */}
                <rect x="550" y="420" width="130" height="90" fill="#EC4899" stroke="#DB2777" strokeWidth="2" rx="8" />
                <text x="615" y="455" textAnchor="middle" fill="#FFF" fontSize="16" fontWeight="bold">LOADS</text>
                <text x="615" y="475" textAnchor="middle" fill="#FFF" fontSize="12">Residential/</text>
                <text x="615" y="490" textAnchor="middle" fill="#FFF" fontSize="12">Commercial</text>

                {/* Arrow Inverter to Grid */}
                <path d="M 400 300 L 400 230" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrowhead4)" strokeDasharray="5,5" />

                {/* Arrow Inverter to Loads */}
                <path d="M 475 335 L 550 465" stroke="#8B5CF6" strokeWidth="3" markerEnd="url(#arrowhead4)" />

                {/* Arrow definitions */}
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
                  </marker>
                  <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
                  </marker>
                  <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#8B5CF6" />
                  </marker>
                </defs>
              </svg>
            </div>
          </Card>

          {/* Specifications Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">Hybrid</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Dual Source</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">24/7</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Reliable Power</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">Grid</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connected</div>
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
              The system combines two renewable energy sources: solar energy from photovoltaic panels and wind energy from a wind turbine. This dual-source approach ensures more consistent power generation throughout day and night, and across varying weather conditions.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">2</div>
              Conversion Process
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Solar panels convert sunlight into DC electricity through the photovoltaic effect, while the wind turbine generates AC electricity through electromagnetic induction. Both sources have dedicated charge controllers that optimize power output and protect the battery bank. The combined DC power is stored in batteries and converted to AC power via an inverter for immediate use or grid connection.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">3</div>
              Output/Utilization
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The hybrid system provides reliable power for residential or commercial applications. During peak sunlight hours, solar dominates; during windy periods or nighttime, wind energy compensates. Excess energy can be fed to the grid under net metering, while the battery bank ensures uninterrupted supply during low generation periods.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">4</div>
              Real-World Application
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hybrid systems are ideal for areas with complementary solar and wind resources. They provide higher reliability than single-source systems, making them suitable for remote locations, telecommunications towers, agricultural operations, and eco-resorts. This approach maximizes renewable energy utilization while minimizing dependency on fossil fuels, directly supporting SDG 7 goals for affordable and clean energy access.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
