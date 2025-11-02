import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Activity3() {
  return (
    <div className="min-h-screen p-8 lg:p-16 bg-gradient-to-br from-background via-background to-teal-950/5">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Banner */}
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-green-500/20 border border-teal-500/30 p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center shadow-2xl">
              <span className="text-5xl">💧</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-black mb-4 text-foreground">
                Solar-Powered Irrigation System
              </h1>
              <p className="text-xl font-semibold text-primary">Agricultural Water Pumping Solution</p>
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
            
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-2xl p-8 border-2 border-teal-200/50 dark:border-teal-900/30">
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                {/* Sun */}
                <circle cx="120" cy="60" r="35" fill="#FDB022" />
                <line x1="120" y1="25" x2="120" y2="10" stroke="#FDB022" strokeWidth="3" />
                <line x1="155" y1="60" x2="170" y2="60" stroke="#FDB022" strokeWidth="3" />
                <line x1="85" y1="60" x2="70" y2="60" stroke="#FDB022" strokeWidth="3" />
                <line x1="143" y1="38" x2="157" y2="24" stroke="#FDB022" strokeWidth="3" />
                <line x1="97" y1="82" x2="83" y2="96" stroke="#FDB022" strokeWidth="3" />

                {/* Solar Panel Array */}
                <rect x="50" y="140" width="140" height="90" fill="#10B981" stroke="#059669" strokeWidth="3" rx="6" />
                <line x1="80" y1="140" x2="80" y2="230" stroke="#059669" strokeWidth="2" />
                <line x1="110" y1="140" x2="110" y2="230" stroke="#059669" strokeWidth="2" />
                <line x1="140" y1="140" x2="140" y2="230" stroke="#059669" strokeWidth="2" />
                <line x1="160" y1="140" x2="160" y2="230" stroke="#059669" strokeWidth="2" />
                <line x1="50" y1="165" x2="190" y2="165" stroke="#059669" strokeWidth="2" />
                <line x1="50" y1="190" x2="190" y2="190" stroke="#059669" strokeWidth="2" />
                <line x1="50" y1="215" x2="190" y2="215" stroke="#059669" strokeWidth="2" />
                <text x="120" y="260" textAnchor="middle" fill="#10B981" fontSize="16" fontWeight="bold">Solar Panel Array</text>

                {/* Arrow Sun to Panel */}
                <path d="M 120 95 L 120 140" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead5)" />

                {/* DC-DC Converter / Controller */}
                <rect x="290" y="155" width="140" height="70" fill="#10B981" stroke="#059669" strokeWidth="2" rx="8" />
                <text x="360" y="185" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="bold">DC-DC</text>
                <text x="360" y="205" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="bold">CONVERTER</text>

                {/* Arrow Panel to Converter */}
                <path d="M 190 185 L 290 190" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead5)" />

                {/* DC Pump Motor */}
                <rect x="520" y="155" width="140" height="70" fill="#14B8A6" stroke="#0D9488" strokeWidth="2" rx="8" />
                <circle cx="590" cy="190" r="25" fill="#0D9488" />
                <text x="590" y="195" textAnchor="middle" fill="#FFF" fontSize="14" fontWeight="bold">M</text>
                <text x="590" y="245" textAnchor="middle" fill="#14B8A6" fontSize="14" fontWeight="bold">DC Pump Motor</text>

                {/* Arrow Converter to Motor */}
                <path d="M 430 190 L 520 190" stroke="#FDB022" strokeWidth="3" markerEnd="url(#arrowhead5)" />

                {/* Water Source (Well/Bore) */}
                <ellipse cx="590" cy="350" rx="80" ry="40" fill="#3B82F6" opacity="0.6" stroke="#2563EB" strokeWidth="2" />
                <text x="590" y="355" textAnchor="middle" fill="#FFF" fontSize="14" fontWeight="bold">Water Source</text>
                <text x="590" y="410" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="bold">(Well/Borehole)</text>

                {/* Pump in Water */}
                <rect x="570" y="290" width="40" height="50" fill="#14B8A6" stroke="#0D9488" strokeWidth="2" rx="4" />
                
                {/* Arrow Motor to Pump */}
                <path d="M 590 225 L 590 290" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowhead6)" />

                {/* Pipe from Pump */}
                <rect x="585" y="260" width="10" height="30" fill="#059669" />

                {/* Water Flow to Fields */}
                <path d="M 590 260 Q 450 220 320 280" stroke="#3B82F6" strokeWidth="4" fill="none" markerEnd="url(#arrowhead7)" />

                {/* Agricultural Field */}
                <rect x="100" y="300" width="200" height="120" fill="#22C55E" opacity="0.3" stroke="#16A34A" strokeWidth="2" rx="8" />
                <text x="200" y="350" textAnchor="middle" fill="#16A34A" fontSize="16" fontWeight="bold">Agricultural Field</text>
                <text x="200" y="370" textAnchor="middle" fill="#16A34A" fontSize="12">(Irrigation)</text>
                
                {/* Crop symbols */}
                <text x="130" y="390" fontSize="24">🌾</text>
                <text x="170" y="390" fontSize="24">🌾</text>
                <text x="210" y="390" fontSize="24">🌾</text>
                <text x="250" y="390" fontSize="24">🌾</text>

                {/* Arrow definitions */}
                <defs>
                  <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#FDB022" />
                  </marker>
                  <marker id="arrowhead6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#0D9488" />
                  </marker>
                  <marker id="arrowhead7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
                  </marker>
                </defs>
              </svg>
            </div>
          </Card>

          {/* Specifications Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border-teal-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">Solar</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Powered Pump</div>
            </Card>
            <Card className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border-teal-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">Zero</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Emissions</div>
            </Card>
            <Card className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border-teal-500/30 p-6 text-center">
              <div className="text-5xl font-black text-primary mb-2">Rural</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Agriculture</div>
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
              The system utilizes solar energy captured by photovoltaic panel arrays. Solar panels are installed in open agricultural areas where they receive maximum sunlight exposure throughout the day, converting solar radiation directly into electrical energy.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">2</div>
              Conversion Process
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Solar panels generate DC electricity from sunlight through the photovoltaic effect. This DC power flows through a DC-DC converter (or charge controller with MPPT) that optimizes voltage and current levels to match the pump motor requirements. The regulated DC power directly drives a submersible or surface DC pump motor, which mechanically lifts water from wells, borewells, or other water sources to the surface for irrigation.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">3</div>
              Output/Utilization
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The pumped water is distributed across agricultural fields through irrigation channels or drip/sprinkler systems. The system operates during daylight hours when solar energy is available, providing sufficient water for crop irrigation. Water can also be stored in overhead tanks for use during non-sunlight hours, ensuring continuous irrigation capability.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold">4</div>
              Real-World Application
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This system is ideal for rural and remote agricultural areas lacking reliable grid electricity. It eliminates diesel pump costs and emissions, reduces operational expenses, and provides sustainable water access for farmers. The technology supports food security, increases agricultural productivity, and aligns with SDG 7 (Clean Energy) and SDG 2 (Zero Hunger) by enabling efficient, eco-friendly farming practices.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
