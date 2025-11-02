import { NavLink } from "react-router-dom";
import { Home, Sun, Wind, Droplets, Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Activity 1", subtitle: "Solar PV System", url: "/activity-1", icon: Sun },
  { title: "Activity 2", subtitle: "Hybrid System", url: "/activity-2", icon: Wind },
  { title: "Activity 3", subtitle: "Solar Irrigation", url: "/activity-3", icon: Droplets },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="px-6 py-10 border-b border-border/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
            <Zap className="w-6 h-6 text-background" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Clean Energy</h1>
            <p className="text-xs text-muted-foreground">Portfolio</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        {navigationItems.map((item, index) => (
          <NavLink
            key={item.url}
            to={item.url}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `group flex items-center gap-4 px-5 py-4 mb-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary shadow-lg"
                  : "text-foreground/60 hover:bg-secondary/50 hover:text-foreground"
              }`
            }
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              navigationItems.findIndex(i => i.url === item.url) === 0 ? "bg-blue-500/20" :
              navigationItems.findIndex(i => i.url === item.url) === 1 ? "bg-amber-500/20" :
              navigationItems.findIndex(i => i.url === item.url) === 2 ? "bg-purple-500/20" :
              "bg-teal-500/20"
            }`}>
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{item.title}</div>
              {item.subtitle && (
                <div className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</div>
              )}
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-6 border-t border-border/50">
        <div className="bg-secondary/50 rounded-lg p-4">
          <p className="font-semibold text-foreground mb-1 text-sm">Sai Susanth Reddy</p>
          <p className="text-xs text-muted-foreground">RA2311026010795</p>
          <p className="text-xs text-muted-foreground mt-2">CINTEL • 2025</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border text-primary"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile sidebar */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="fixed left-0 top-0 bottom-0 w-72 bg-sidebar-background border-r border-sidebar-border flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-sidebar-background border-r border-sidebar-border flex-col">
        <NavContent />
      </aside>
    </>
  );
}
