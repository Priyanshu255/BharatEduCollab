import React from "react";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";

const Shop = () => {
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
    };
    fetchData();
  }, []);
  return (
    <>
      <TopBar pageName="Shopping" />
      <div >
        <h1 className="p-4 font-medium bg-[#96b6c5]">
          Projects you can buy which are uploaded by the students.
        </h1>
        <ShoppingCartIcon sx={{ fontSize: "30px" }} className=" absolute right-4 top-3"/>
      </div>
      {/* <h1 className="p-4 font-medium bg-[#96b6c5]">
        Projects you can buy which are uploaded by the students.
      </h1> */}
      <div className="projects grid grid-cols-2 gap-4 grid-flow-row ">
        {data.map(
          (item, index) =>
            // <ProjectCard key={index} data={item} university={true}/>
            // data[index].university == "MediCaps University" && (
              <ProjectCard key={index} data={item} shop={true} />
            // )
        )}
      </div>
    </>
  );
};

export default Shop;
