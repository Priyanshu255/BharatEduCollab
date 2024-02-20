import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import StudentRegistration from "../components/StudentRegistration";
import UniversityRegistration from "../components/UniversityRegistration";
import MentorRegistration from "../components/MentorRegistration";
import OrganistionRegistration from "../components/OrganisationRegistration";

const Register = () => {
  const [student, setStudent] = useState(true);
  const [university, setUniversity] = useState(false);
  const [organisation, setOrganisation] = useState(false);
  const [mentor, setMentor] = useState(false);
  return (
    <div>
      <TopBar pageName="Register" home="true" />
      <div className="flex gap-4 justify-around p-3 bg-[#eee0c9]">
        <h1
          onClick={() => {
            setStudent(true);
            setUniversity(false);
            setOrganisation(false);
            setMentor(false);
          }}
          className={`${student && "bg-[#96b6c5]" } p-2 rounded-md drop-shadow-md cursor-pointer`}
        >
          Student
        </h1>
        <h1
          onClick={() => {
            setStudent(false);
            setUniversity(false);
            setOrganisation(true);
            setMentor(false);
          }}
          className={`${organisation && "bg-[#96b6c5]" } p-2 rounded-md drop-shadow-md cursor-pointer`}
        >
          Organisation[hire/fund]
        </h1>
        <h1
          onClick={() => {
            setStudent(false);
            setUniversity(false);
            setOrganisation(false);
            setMentor(true);
          }}
          className={`${mentor && "bg-[#96b6c5]" } p-2 rounded-md drop-shadow-md cursor-pointer`}
        >
          Mentor
        </h1>
        <h1
          onClick={() => {
            setStudent(false);
            setUniversity(true);
            setOrganisation(false);
            setMentor(false);
          }}
          className={`${university && "bg-[#96b6c5]" } p-2 rounded-md drop-shadow-md cursor-pointer`}
        >
          University
        </h1>
      </div>
      <div className="w-full flex justify-center pt-8">
        {student && <h1> Register as Student </h1>}
        {organisation && <h1> Register as Organisation </h1>}
        {mentor && <h1> Register as Mentor </h1>}
        {university && <h1> Register as University </h1>}
      </div>
      <div>
        {student && <StudentRegistration /> }
        {university && <UniversityRegistration /> }
        {mentor && <MentorRegistration />}
        {organisation && <OrganistionRegistration />}
      </div>
    </div>
  );
};

export default Register;
