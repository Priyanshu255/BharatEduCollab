import React from "react";
import "../Filter.css";

const TechStackFilter = ({
  techStackOptions,
  selectedTechStacks,
  onTechStackChange,
}) => {
  return (
    <div className="tech-stack-filter">
      {techStackOptions.map((techStack) => (
        <label key={techStack} className="tech-stack-label">
          <input
            type="checkbox"
            value={techStack}
            checked={selectedTechStacks.includes(techStack)}
            onChange={() => onTechStackChange(techStack)}
          />
          {techStack}
        </label>
      ))}
    </div>
  );
};

export default TechStackFilter;
