import { Github, Linkedin, GraduationCap, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/RotatingText"; 
import Prism from './Prism';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-5 min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Prism background */}
      <div className="absolute inset-0 -z-10">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>

      {/* Hero content */}
      <div className="container-custom text-center relative z-10">
        <div className="mb-12">
          {/* Profile Image */}
          <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
            <img
              src="https://i.postimg.cc/mkgvQFG3/profile.png"
              alt="Kau"
              className="w-56 h-56 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-foreground">
            Kaustubh R. Kumbhar
          </h1>

          {/* Rotating Text */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex justify-center">
            <span className="gradient-text mr-2">Researcher in</span>
            <RotatingText
              texts={["Physics", "Material Science", "Machine Learning"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-accent/30 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "tween", duration: 0.6 }}
              rotationInterval={2000}
            />
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a
                href="#contact"
                className="flex items-center justify-center bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 active:bg-blue-900 transition-colors duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="https://qrr.to/9af12c32"
                download
                className="flex items-center border-foreground text-foreground font-semibold hover:text-white hover:border-white active:text-white active:border-white transition-colors duration-300 px-6 py-3 rounded-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-10">
            <a href="https://github.com/KaustubhRKPhy" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-black hover:text-accent transition-colors duration-200">
              <Github size={28} />
              <span className="mt-1 text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kaustubh-kumbhar-4b841b293/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-black hover:text-accent transition-colors duration-200">
              <Linkedin size={28} />
              <span className="mt-1 text-sm">LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=x6pyy7UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-black hover:text-accent transition-colors duration-200">
              <GraduationCap size={28} />
              <span className="mt-1 text-sm">Scholar</span>
            </a>
            <a href="mailto:kaustubhrk.phy@gmail.com" className="flex flex-col items-center text-black hover:text-accent transition-colors duration-200">
              <Mail size={28} />
              <span className="mt-1 text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
