import React, { useState, useEffect } from "react";
import "./ValuesTicker.css";

const definitions = [
  "Youth Empowerment: Equipping young people with tools, mentorship, and confidence.",
  "Innovation: Encouraging creative solutions in climate, health, and education.",
  "Inclusivity: Ensuring equal access to opportunities for all youth.",
  "Collaboration: Partnering with schools, NGOs, and local leaders.",
  "Integrity: Building trust through transparency in programs and fund management.",
  "Sustainability: Designing initiatives that last and empower communities long-term.",
  "Leadership: Nurturing young leaders to drive change.",
  "Knowledge Sharing: Documenting evidence and strengthening youth networks."
];

export default function ValuesTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((prev) => (prev + 1) % definitions.length);
      }
    }, 20000); // 20s per definition
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="ticker">
      <div
        key={index}
        className="ticker-content fade"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {definitions[index]}
      </div>
    </div>
  );
}
