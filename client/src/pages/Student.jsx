import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import PersonIcon from "@mui/icons-material/Person";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useEffect, useState } from "react";
import axios from "axios";
import "./Student.css";
import Footer from "../components/Footer";
import StudentImg from "../assets/student.webp";


const Student = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "GET",
        url: "http://localhost:3001/api/projects/",
      };
      const response = await axios(config);
      // console.log(response.data.reverse());
      setData(response.data.reverse());
    };
    fetchData();
  }, []);
  return (
    <div>
      <TopBar pageName="Student Dashboard" logout="true" />
      <div className="flex mt-4">
        <div className="w-[400px]  m-2 p-3 commonShadow rounded-md bg-[#96b6c5]">
          <h1 className="font-bold text-lg">Profile</h1>
          <div className="w-[200px] ">
            <img src={StudentImg}  className="bg-[#adc4ce] p-2 mb-5 m-2 shadow-lg" alt="Profile Picture" />
          </div>
          {/* <div className="profile-picture bg-[#adc4ce] p-2 m-2 w-[120px]" >
            <PersonIcon sx={{ fontSize: "100px" }} />
          </div> */}
          <h1><b>Name:</b> Radhika Sharma</h1>
          {/* <h1><b>UserID: </b> AD1234</h1> */}
          <h1><b>University:</b> Medi-Caps University</h1>
          <h1><b>EmailID:</b> raghika123@gmail.com</h1>
          <h1><b>Projects Uploaded:</b> 6</h1>
          <h1><b>Projects Accepted by University:</b> 2</h1>
          <h1><b>Projects Accepted by Mentors:</b> 4</h1>
          <h1><b>Projects Pending:</b> 4</h1>
          <div className="flex mt-9 p-2 effect rounded-md drop-shadow-lg bg-[#adc4ce]">
            <UpgradeIcon sx={{ fontSize: "30px" }} />
            <h1 className="m-1">
              <b>Update Profile</b>
            </h1>
          </div>
        </div>
        <div className="w-full m-2 p-3 commonShadow rounded-md bg-[#96b6c5]">
          <div className="relative mb-7">
            <h1 className="text-lg">
              <b>Student Projects</b>
            </h1>
            <Link to="/uploadproject" className="effect font-bold absolute right-0 top-0 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">
              Upload Project
            </Link>
          </div>
          <div className="projects rounded-md grid grid-cols-2 gap-4 grid-flow-row">
          {data.map(
              (item, index) =>
                // console.log(data[index].university)
                data[index].university == "MediCaps University" && (
                  <ProjectCard key={index} data={item} student="true"/>
                )
                // <ProjectCard key={index} data={item} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Student;
