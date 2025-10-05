import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Sc. Physics",
    cgpa: "8.63 / 10",
    institution: "Shivaji University, Kolhapur (SUK)",
    period: "Sep 2022 – Mar 2024",
    description: [
      "Thesis: Machine Learning Assisted Modelling of CIGS TFSCs",
      "Advisor: Dr. N. L. Tarwal",
      "Lab: Smart Materials Laboratory, Dept. of Physics, SUK",
    ],
  },
  {
    degree: "B.Sc. Physics",
    cgpa: "9.79 / 10",
    institution: "PAHS University, Solapur",
    period: "Jun 2019 – Mar 2022",
    description: [
      "Projects: Automatic Street Light Control System and Clap Switch",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative bg-card rounded-2xl border-2 border-border 
                         overflow-hidden transition-all duration-500 ease-out
                         hover:border-accent/50 hover:shadow-[0_0_20px_hsl(var(--accent))] hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              
              <div className="relative p-6">
                
                <div className="flex items-start gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-1.5 bg-accent/10 rounded-lg 
                                    transition-all duration-500
                                    group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6">
                      <GraduationCap className="text-accent" size={20} strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground
                                   group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <div className="h-0.5 w-8 bg-accent/30 rounded-full 
                                    transition-all duration-500
                                    group-hover:w-16 group-hover:bg-accent" />
                  </div>
                </div>

                
                <div className="space-y-2 mb-3">
                  <p className="text-sm font-semibold text-foreground">CGPA: {edu.cgpa}</p>
                  <p className="text-sm text-accent font-semibold">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>

                
                <ul className="opacity-0 max-h-0 overflow-hidden 
                               group-hover:opacity-100 group-hover:max-h-[9999px]
                               transition-all duration-500 ease-in-out list-disc pl-5 space-y-1">
                  {edu.description.map((desc, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{desc}</li>
                  ))}
                </ul>
              </div>

              
              <div className="h-1 w-0 bg-gradient-to-r from-accent to-accent/50 
                              transition-all duration-700 ease-out
                              group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};