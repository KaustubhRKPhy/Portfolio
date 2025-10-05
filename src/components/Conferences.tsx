import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Award, Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const conferences = [
  {
    name: 'International Webinar on Quantum Computing for the Next Generation: Exploring Opportunities',
    date: "February 16, 2025",
    year: "2025",
    role: "Participant",
    location: "Virtual",
    organiser: "Department of Physics, Willingdon College, Sangli (MH), India",
  },
  {
    name: "International Webinar on Nanotechnology: A Path Forward To Address Global Challenges",
    date: "October 24, 2024",
    year: "2024",
    role: "Participant",
    location: "Virtual",
    organiser: "Department of Physics & IQAC, Balwant College, Vita (MH), India",
  },
  {
    name: "One Day Seminar on Material Science & Applications (MCA-2023)",
    date: "December 23, 2023",
    year: "2023",
    role: "Attendee",
    location: "Virtual",
    organiser: "Sanjay Ghodawat Institute, Kolhapur (MH), India",
  },
  {
    name: "National Conference on Physics of Materials & Materials-based Device Fabrication (NCPM-MDF-2023)",
    date: "November 25–26, 2023",
    year: "2023",
    role: "Participant",
    location: "Kolhapur, India (On-site)",
    organiser: "Department of Physics, Shivaji University, Kolhapur (MH), India",
  },
  {
    name: "One Day National Webinar on Nano Materials for Healthcare, Energy, and Environment",
    date: "",
    year: "2023",
    role: "Participant",
    location: "Virtual",
    organiser:
      "Department of Physics, Athalye-Sapre-Pitre College (Autonomous), Devrukh, Ratnagiri (MH), India",
  },
  {
    name: "IP Awareness/Training Program under  National Intellectual Property Awareness Mission (NIPAM)",
    date: "February 06, 2022",
    year: "2022",
    role: "Participant",
    location: "India (On-site)",
    organiser: "Intellectual Property Office, India",
  },
  {
    name: "2nd Asian e-Conference on Engineered Science",
    date: "December 05–06, 2021",
    year: "2021",
    role: "Participant",
    location: "Virtual",
    organiser:
      "Prof. C. D. Lokhande Endowment Charitable Trust & Engineered Science Publisher",
  },
];

// Sort newest → oldest
const sortedConferences = [...conferences].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

const VISIBLE_COUNT = 2;

export const Conferences = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} id="conferences" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Conference, Workshops & Webinars Attended</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Always visible conferences */}
          {sortedConferences.slice(0, VISIBLE_COUNT).map((conf, index) => (
            <ConferenceCard key={index} conf={conf} />
          ))}

          {/* Hidden conferences */}
          <AnimatePresence
            onExitComplete={() => {
              if (!showAll) scrollToTop();
            }}
          >
            {showAll && (
              <motion.div
                ref={hiddenRef}
                className="contents md:grid md:grid-cols-2 md:col-span-2 gap-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  if (hiddenRef.current) {
                    hiddenRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {sortedConferences.slice(VISIBLE_COUNT).map((conf, index) => (
                  <ConferenceCard key={index} conf={conf} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {sortedConferences.length > VISIBLE_COUNT && (
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

// Individual conference card
const ConferenceCard = ({ conf }: { conf: (typeof conferences)[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="relative group bg-card p-6 rounded-lg border border-border 
               shadow transition-all duration-300
               hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent))] 
               hover:-translate-y-1"
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="p-2 bg-accent/10 rounded-lg transition-colors group-hover:bg-accent/20 group-hover:scale-105">
        <Calendar className="text-accent transition-transform duration-300" size={20} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">
          {conf.name}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="font-medium">{conf.date}</span>
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-accent" />
            {conf.location}
          </span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-2 mt-2">
      <Award className="text-accent" size={16} />
      <span className="text-sm text-accent font-medium">{conf.role}</span>
    </div>

    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
      <Building2 className="text-accent" size={16} />
      <span>{conf.organiser}</span>
    </div>
  </motion.div>
);
