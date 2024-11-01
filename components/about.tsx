"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-3xl mx-auto text-center leading-relaxed sm:mb-24 scroll-mt-28" // Reduced margins
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4 text-gray-700 dark:text-gray-300"> {/* Reduced bottom margin */}
        Graduated from Cal State Fullerton with a Master's in <span className="font-semibold">Computer Science</span>. As a full-stack developer, I design scalable applications focused on user-centered solutions.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300"> {/* Reduced bottom margin */}
        I love the problem-solving aspect of programming, with expertise in <span className="font-semibold">React, Next.js, Node.js, MongoDB, and AWS</span>. Currently seeking a <span className="font-semibold">full-time position</span> as a software developer.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        <span className="italic">When I'm not coding</span>, I enjoy singing and creating art.
      </p>
    </motion.section>
  );
}
