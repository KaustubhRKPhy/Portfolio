import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title:
      "Predictive Modelling and Optimization of CIGS Thin Film Solar Cells: A Machine Learning Approach",
    authors: "K. R. Kumbhar, R. S. Redekar, N. L. Tarwal*, et al.",
    journal: "Solar Energy - 6.0",
    year: "July 2025",
    link: "https://doi.org/10.1016/j.solener.2025.113509",
    description: [
      "Used machine learning to optimize Copper Indium Gallium Selenide (CIGS) thin-film solar cell fabrication.",
      "Analyzed 5000+ experimental data points.",
      "Random Forest outperformed ANN (R² > 0.87 vs R² < 0.68).",
      "Feature importance identified Ga/(In + Ga), Cu/(In + Ga), RTA temperature, and i-ZnO thickness as critical factors.",
      "Decision tree suggested optimal conditions for high PCE using all input parameters.",
    ],
  },
  {
    title:
      "Investigating the effect of the electrolyte variation on the supercapacitor performance of hydrothermally synthesized MnCo LDH films",
    authors: "K. R. Kumbhar, R. S. Redekar, N. L. Tarwal*",
    journal: "Submitted",
    year: "2025",
    link: "",
    description: [
      "",
      "",
    ],
  },
  {
    title: "Emerging Trends in Ozone Gas Monitoring: A Brief Overview",
    authors: "R. S. Redekar, K. R. Kumbhar, N. L. Tarwal*",
    journal: "Submitted",
    year: "2025",
    link: "",
    description: [
      "",
      "",
    ],
  },
  {
    title:
      "Emerging Functionalities and Machine Learning Integration in Next Gen Supercapacitors",
    authors: "K. R. Kumbhar, et al.",
    journal: "Under Preparation",
    year: "2025",
    link: "",
    description: [
      "",
      "",
    ],
  },
];

const VISIBLE_COUNT = 2;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  const toggleShowAll = () => setShowAll((prev) => !prev);
  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Publications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Always visible projects */}
          {projects.slice(0, VISIBLE_COUNT).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {/* Hidden projects */}
          <AnimatePresence onExitComplete={() => !showAll && scrollToTop()}>
            {showAll && (
              <motion.div
                ref={hiddenRef}
                className="contents md:grid md:grid-cols-2 md:col-span-2 gap-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() =>
                  hiddenRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                {projects.slice(VISIBLE_COUNT).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        {projects.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleShowAll}
              className="px-6 py-2 text-sm font-medium rounded-full border border-accent 
                         text-accent bg-transparent hover:bg-accent hover:text-white 
                         transition-colors flex items-center gap-2"
            >
              {showAll ? "Show Less" : "Show More"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="group bg-card p-6 rounded-lg border border-border 
               shadow-md transition-all duration-300
               hover:border-accent hover:shadow-[0_0_25px_hsl(var(--accent))] 
               hover:-translate-y-1 hover:scale-[1.02]"
  >
    {/* Title + Year */}
    <div className="flex items-start justify-between gap-4 mb-3">
      <div className="flex items-start gap-2">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FileText className="text-accent w-5 h-5 mt-[2px]" />
        </motion.div>
        <h3 className="text-lg font-bold text-foreground leading-tight">
          {project.title}
        </h3>
      </div>
      <span className="text-sm text-accent font-semibold whitespace-nowrap">
        {project.year}
      </span>
    </div>

    
    <div className="pl-7">
      <p className="text-sm text-muted-foreground mb-2">{project.authors}</p>
      <p className="text-sm text-accent font-medium mb-3">{project.journal}</p>

      {/* Description (visible on hover) */}
      <ul
        className="opacity-0 max-h-0 overflow-hidden 
                   group-hover:opacity-100 group-hover:max-h-[9999px]
                   transition-all duration-500 ease-in-out mb-4 list-disc pl-5 space-y-1"
      >
        {project.description.map((line, i) => (
          <li key={i} className="text-sm text-muted-foreground">
            {line}
          </li>
        ))}
      </ul>

      {/* View Publication Button */}
      {project.link && (
        <Button
          variant="outline"
          size="sm"
          className="border-accent text-accent hover:bg-accent hover:text-white 
                     hover:shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-300"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FileText className="mr-2 h-4 w-4" />
            View Publication
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      )}
    </div>
  </motion.div>
);
