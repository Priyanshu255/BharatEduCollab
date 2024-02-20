import React, { useState } from "react";
import TechStackFilter from "../components/TechStackFilter";
import ProjectList from "../components/ProjectList";
import TopBar from "../components/TopBar"; // Import the TopBar component
import Footer from "../components/Footer"; // Import the Footer component
import "../Filter.css";

const techStackOptions = ["React", "Node.js", "Python", "Java"]; // Example tech stack options

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    techStack: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    techStack: ["Python"],
  },
  // Add more project data
];

const FilterPage = () => {
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);

  const handleTechStackChange = (techStack) => {
    // Toggle the selection state of the tech stack
    setSelectedTechStacks((prevSelected) => {
      if (prevSelected.includes(techStack)) {
        // If it's already selected, remove it
        return prevSelected.filter((stack) => stack !== techStack);
      } else {
        // If it's not selected, add it
        return [...prevSelected, techStack];
      }
    });
  };

  return (
    <>
    <TopBar pageName="Student Dashboard" logout="true" />
    <div className="filter-page">
      <h1 className="page-title">Filter Projects by Tech Stack</h1>
      <TechStackFilter
        techStackOptions={techStackOptions}
        selectedTechStacks={selectedTechStacks}
        onTechStackChange={handleTechStackChange}
      />
      <ProjectList
        projects={projects}
        selectedTechStacks={selectedTechStacks}
      />
    </div>
    <Footer />
    </>
  );
};

export default FilterPage;
