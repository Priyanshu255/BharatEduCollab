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
import UpgradeIcon from '@mui/icons-material/Upgrade';
// import "../Student.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import OrganisationImg from "../assets/organisation.png";


const Organisation = () => {
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
    <div>
      <TopBar pageName="Organisation Dashboard" logout="true" />
      <div className="flex mt-4">
        <div className="w-[400px] commonShadow rounded-md m-2 p-3 bg-[#96b6c5]">
          <h1 className="font-bold text-lg">Profile</h1>
          <div className="w-[200px] ">
            <img src={OrganisationImg}  className="bg-[#adc4ce] p-2 mb-5 m-2 shadow-lg" alt="Profile Picture" />
          </div>
          {/* <div className="bg-[#adc4ce] p-2 mb-5 m-2 w-[120px]">
            <PersonIcon sx={{ fontSize: "100px" }} />
          </div> */}
          <h1>
            <b>Name:</b> Microsoft Co.
          </h1>
          {/* <h1>
            <b>OrganisationID: </b> AD1234
          </h1> */}
          <h1>
            <b>EmailID:</b> microsoft@gmail.com
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
            {/* <Link to="/help">
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <HelpIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1">
                  <b>FAQ</b>
                </h1>
              </div>
            </Link> */}
            <div>
              <div className="flex m-3 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
                <InfoIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1">
                  <b>Info</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="relative mb-7 mt-3">
            <h1 className="text-lg">
              <b>Projects</b>
            </h1>
          </div>
          <div className="projects grid grid-cols-2 grid-flow-row ">
            {data.map(
              (item, index) => (
                // console.log(data[index].university)
                // data[index].university == "MediCaps University" && (
                <ProjectCard key={index} data={item} organisation={true} />
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

export default Organisation;
