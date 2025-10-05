import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Data Scientist",
    company: "WireOne Labs",
    period: "Aug 2025 – Present",
    location: "Bangalore, India (Remote)",
    description: [
      "Designed and implemented an intelligent Retrieval-Augmented Generation (RAG) system to extract and normalize structured and unstructured data using pharmaceutical regulatory PDFs, enabling precise natural language queries.", 
      "Built a hybrid retrieval pipeline combining keyword and semantic search with cross-encoder reranking, improving accuracy and context relevance for complex queries.", 
      "Developed Python-based document processing, smart chunking, and vector embedding pipelines using LangChain, FAISS, and HuggingFace embeddings.", 
      "Created an interactive BMR Analyzer interface for real-time query processing, batch analysis, and report generation that enhanced accessibility for researchers, pharmacists, and healthcare professionals."

    ],
  },
  {
    role: "Physics-focused LLM Training Specialist",
    company: "Turing Enterprises",
    period: "Jun 2025 – Aug 2025",
    location: "California, USA (Remote)",
    description: [
      "Trained and reviewed Amazon's upcoming AI model 'Nova' on core and applied physics.",
      "Validated complex physics problems ensuring conceptual accuracy, and clarity across hundreds of problems.",
      "Developed Python-based computational pipelines to design, generate, and validate complex physics tasks.",
      "Integrated domain expertise with large-scale AI workflows to accelerate project delivery and improve model performance."
    ]
  },
  {
    role: "Postgraduate Research Associate",
    company: "Monash University, Melbourne",
    period: "Jan 2025 – Present",
    location: "Melbourne, Australia (Remote)",
    description: [
      "Co-authoring a comprehensive review paper on Next-Generation Supercapacitors, focusing on emerging materials and advanced energy storage mechanisms.",
    ],
  },
  {
    role: "Postgraduate Research Assistant",
    company: "Shivaji University, Kolhapur",
    period: "Aug 2023 – Present",
    location: "Kolhapur (On-Site, Remote)",
    description: [
      "Amongst the firsts in the department to apply Machine Learning to Materials Science, building predictive models for solar cell efficiency using compositional ratios and other fabrication parameters.",
      "Conducted research on Layered Double Hydroxide and Hydroxide materials with focus on fabrication and characterization for supercapacitor application.",
      "Mentored postgraduate students in material synthesis, offered guidance on experimental methods and data analysis.",
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);
      setLineHeight(progress * rect.height);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Experience</span>
        </h2>

        {/* Desktop Timeline View */}
        <div ref={containerRef} className="hidden xl:block relative max-w-4xl mx-auto">
          <div className="absolute left-5 top-0 w-1 bg-accent/20 h-full z-0"></div>
          <div
            className="absolute left-5 top-0 w-1 bg-accent origin-top transition-all duration-150 z-10"
            style={{ height: `${lineHeight}px` }}
          ></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-16 mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute left-0 top-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg z-10">
                <Calendar size={20} className="text-white" />
              </div>

              <span className="absolute -left-32 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-accent whitespace-nowrap w-28 text-right">
                {exp.period}
              </span>

              <div className="group bg-card p-6 rounded-lg border border-border shadow-md transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent))] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={16} className="text-accent flex-shrink-0" />
                  <div>
                    <h3
                      className="text-xl font-bold text-foreground
                                 group-hover:text-accent transition-colors duration-300"
                    >
                      {exp.role}
                    </h3>
                    
                    <div
                      className="h-0.5 w-8 bg-accent/30 rounded-full
                                 transition-all duration-500
                                 group-hover:w-16 group-hover:bg-accent"
                    />
                  </div>
                </div>

                <p className="text-accent font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  <span>{exp.location}</span>
                </p>

                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:opacity-100">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="xl:hidden space-y-6 max-w-2xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-card rounded-xl border border-border shadow-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent))] hover:-translate-y-1">
                {/* Header with period badge */}
                <div className="bg-accent/5 px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Calendar size={16} className="text-white" />
                    </div>
                    <Briefcase size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <h3
                        className="text-lg font-bold text-foreground
                                   group-hover:text-accent transition-colors duration-300"
                      >
                        {exp.role}
                      </h3>
                      
                      <div
                        className="h-0.5 w-8 bg-accent/30 rounded-full
                                   transition-all duration-500
                                   group-hover:w-16 group-hover:bg-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-accent font-semibold mb-2 text-base">{exp.company}</p>

                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={14} className="text-accent flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin size={14} className="text-accent flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:opacity-100">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
