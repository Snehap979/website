"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      {/* <SectionHeading>My Projects</SectionHeading>
       */}
      {/* Mobile: Vertical Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-8">
          <Project />
          {/* When mapping through projects:
          {projectsData.map((project, index) => (
            <div key={index} className="w-full">
              <Project {...project} />
            </div>
          ))} */}
        </div>
      </div>

      {/* Laptop: Horizontal Scroll Layout */}
      <div className="hidden md:block">
        <div className="relative max-w-[95vw] mx-auto">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-6 pb-8">
              <Project />
              {/* When mapping through projects:
              {projectsData.map((project, index) => (
                <div 
                  key={index} 
                  className="min-w-[350px] max-w-[350px] first:ml-0 last:mr-0"
                >
                  <Project {...project} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Scroll Indicators for Laptop View */}
      <div className="hidden md:flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
}

// Add this to your global CSS file
const globalStyles = `
  @layer utilities {
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }
`;