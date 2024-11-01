"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Calendar,
  Sparkles
} from "lucide-react";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});


  const toggleExpand = (index:number) => {
   
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles className="text-yellow-500" size={24} />
        <SectionHeading>My Experience</SectionHeading>
        <Sparkles className="text-yellow-500" size={24} />
      </div>

      <VerticalTimeline lineColor={theme === "light" ? "#e5e7eb" : "#374151"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" 
                    ? "rgba(243, 244, 246, 0.95)" 
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: theme === "light" 
                  ? "0 4px 6px rgba(0, 0, 0, 0.1)" 
                  : "0 4px 6px rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<Briefcase />}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              className="hover:-translate-y-1 transition-transform"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold capitalize text-lg">{item.title}</h3>
                <button
                  onClick={() => toggleExpand(index)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {expandedItems[index] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              
              {/* Organization and Location */}
              <div className="space-y-1 mt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-gray-800 dark:text-gray-300">
                    {item.organization}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="italic text-gray-600 dark:text-gray-400">
                    {item.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Description with bullet points */}
              <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                expandedItems[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="list-disc pl-4 space-y-2 text-gray-700 dark:text-white/75 text-sm">
                  {item.description.split('●').filter(Boolean).map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="leading-normal hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {point.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}