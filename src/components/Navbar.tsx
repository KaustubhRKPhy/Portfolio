import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Publications", href: "#projects" },
  { name: "Conference", href: "#conferences" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode state with persistent default
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved ? JSON.parse(saved) : false; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("dark-mode", JSON.stringify(dark)); 
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background)/98%)] backdrop-blur-md border-b border-border shadow-sm">
      <div className="relative container-custom flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap"
        >
          <span className="text-[hsl(var(--foreground))]">Kaustubh</span>
          <span className="text-accent">RK</span>
        </a>

        {/* Centered Nav Items (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 hover:text-foreground hover:bg-muted/50 hover:ring-2 hover:ring-accent hover:ring-offset-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 hover:shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-300"
            aria-label="Toggle Dark/Light Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 hover:shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-300"
            aria-label="Toggle Dark/Light Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[hsl(var(--foreground))] hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <div
          className={`absolute right-1 bg-[hsl(var(--background)/98%)] backdrop-blur-md border border-border rounded-md overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100 max-h-[500px] py-2" : "opacity-0 max-h-0 py-0"
          }`}
          style={{ width: "max-content" }}
        >
          <div className="flex flex-col px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:shadow-[0_0_8px_hsl(var(--accent))] rounded-md transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
