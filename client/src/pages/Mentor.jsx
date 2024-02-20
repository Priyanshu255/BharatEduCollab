import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import UpgradeIcon from "@mui/icons-material/Upgrade";
// import "../Student.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import MentorImg from "../assets/mentor.webp";

const Mentor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "GET",
        url: "http://localhost:3001/api/mentorProjects/",
      };
      const response = await axios(config);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <TopBar pageName="Mentor Dashboard" logout="true" />
      <div className="flex mt-4">
        <div className="w-[400px] commonShadow rounded-md m-2 p-3 bg-[#96b6c5]">
          <h1 className="font-bold text-lg">Profile</h1>
          <div className="w-[200px] ">
            <img src={MentorImg}  className="bg-[#adc4ce] p-2 mb-5 m-2 shadow-lg" alt="Profile Picture" />
          </div>
          {/* <div className="bg-[#adc4ce] p-2 mb-5 m-2 w-[120px]">
            <PersonIcon sx={{ fontSize: "100px" }} />
          </div> */}
          <h1>
            <b>Name: </b> Dr. Vihaan Bansal
          </h1>
          {/* <h1>
            <b>MentorID: </b> AD1234
          </h1> */}
          <h1>
            <b>EmailID:</b> vihan765@gmail.com
          </h1>
          <h1>
            <b>Request Accepted:</b> 2
          </h1>
          <h1>
            <b>Request Pending:</b> 4
          </h1>
          <div className="flex mt-9 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
            <UpgradeIcon sx={{ fontSize: "30px" }} />
            <h1 className="m-1">
              <b>Update Profile</b>
            </h1>
          </div>
        </div>
        <div className="w-full m-2 p-3 commonShadow rounded-md bg-[#96b6c5]">
          <div className="flex mt-2">
            <TextField
              sx={{ width: 740, mt: "12px" }}
              label="Search"
              variant="filled"
              size="small"
            />
            <div>
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <SearchIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1">
                  <b>Search</b>
                </h1>
              </div>
            </div>
            <div>
              <Link
                to="/filter"
                className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]"
              >
                <FilterAltIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1">
                  <b>Filter</b>
                </h1>
              </Link>
            </div>
            <Link to="/help">
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                {/* <HelpIcon sx={{ fontSize: "30px" }} /> */}
                <h1 className="m-1">
                  <b>Accepted Projects</b>
                </h1>
              </div>
            </Link>
            {/* <div>
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <InfoIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1">
                  <b>Info</b>
                </h1>
              </div>
            </div> */}
          </div>
          <div className="relative mb-7 mt-3">
            <h1 className="text-lg">
              <b>Projects</b>
            </h1>
          </div>
          <div className="projects rounded-md grid grid-cols-2 grid-flow-row ">
            {data.map(
              (item, index) => (
                // console.log(data[index].university)
                // data[index].university == "MediCaps University" && (
                <ProjectCard key={index} data={item} mentor={true} />
              )
              // )
              // <ProjectCard key={index} data={item} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentor;
