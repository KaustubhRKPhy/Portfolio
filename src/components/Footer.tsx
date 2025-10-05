import { Github, Linkedin, GraduationCap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons with Glow */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KaustubhRKPhy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-accent hover:shadow-[0_0_15px_hsl(var(--accent))] hover:scale-110 p-1 rounded-full"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaustubh-kumbhar-4b841b293/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-accent hover:shadow-[0_0_15px_hsl(var(--accent))] hover:scale-110 p-1 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=x6pyy7UAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-accent hover:shadow-[0_0_15px_hsl(var(--accent))] hover:scale-110 p-1 rounded-full"
              aria-label="Google Scholar"
            >
              <GraduationCap size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Publications</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} KaustubhRK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
