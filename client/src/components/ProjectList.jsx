import React from "react";
import "../Filter.css";

const ProjectList = ({ projects, selectedTechStacks }) => {
  const filteredProjects = projects.filter((project) =>
    selectedTechStacks.every((techStack) =>
      project.techStack.includes(techStack)
    )
  );

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let config = {
  //       method: "GET",
  //       url: "http://localhost:3001/api/projects/",
  //     };
  //     const response = await axios(config);
  //     console.log(response.data);
  //     setData(response.data);
  //   }
  //   fetchData();
  // }, [])

  return (
    <div className="project-list">
      {filteredProjects.map((project) => (
        <div key={project.id} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {/* {data.map((item, index) => (
              <div key={index}>
                <ProjectCard data={item} />
              </div>
            ))} */}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
