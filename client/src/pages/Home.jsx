import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { TextField, IconButton } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from "@mui/icons-material/Info";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Footer from "../components/Footer";
// import Banner from "../assets/banlmg.png"

const Home = () => {
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

  const { auth } = useAuth();
  return (
    <>
      <TopBar pageName="Home" login={!auth.organistion} logout={auth.organistion} register="ture"/>
      <div className="banner"></div>
      <div className="flex">
        <div className="flex-col justify-center w-full ">
          <div className="insetShadow flex p-2 bg-[#adc4ce]">
            <TextField
              sx={{ width: 740, mt: "12px" }}
              label="Search"
              variant="filled"
              size="small"
            />
            <div>
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <SearchIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Search</b></h1>
              </div>
            </div>
            <div>
              <Link to="/filter" className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <FilterAltIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Filter</b></h1>
              </Link>
            </div>
            <Link to="/shop">
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b> Buy Projects</b></h1>
              </div>
            </Link>
            <div>
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <InfoIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Info</b></h1>
              </div>
            </div>
          </div>
          <div className="projects grid grid-cols-3 gap-4 grid-flow-row ">
            {data.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
