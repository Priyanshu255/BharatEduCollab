import React from "react";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AcceptProjects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "GET",
        url: "http://localhost:3001/api/projects/",
      };
      const response = await axios(config);
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, [])
  return (
    <>
      <TopBar pageName="AcceptProjects" />
      <h1 className="p-4 font-medium bg-[#96b6c5]">
        Projects to be reviwed uploaded by the students.
      </h1>
      <div className="projects grid grid-cols-2 gap-4 grid-flow-row ">
        {data.map((item, index) => (
          // <ProjectCard key={index} data={item} university={true}/>
          data[index].university == "MediCaps University" && <ProjectCard key={index} data={item} university={true}/>
        ))}
      </div>
    </>
  );
};

export default AcceptProjects;
