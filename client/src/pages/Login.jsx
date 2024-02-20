// import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
// import useAuth from "../hooks/useAuth";
import StudentLogin from "../components/StudentLogin";
import MentorLogin from "../components/MentorLogin";
import OrganisationLogin from "../components/OrganisationLogin";
import UniversityLogin from "../components/UniversityLogin";

// const initialValues = {
//   userID: "",
//   password: "",
// };

// const userSchema = yup.object().shape({
//   userID: yup.string().required("required"),
//   password: yup.string().required("required"),
// });

// const user = false;

const login = () => {
  const [student, setStudent] = useState(true);
  const [university, setUniversity] = useState(false);
  const [organisation, setOrganisation] = useState(false);
  const [mentor, setMentor] = useState(false);

  // const handleFormSubmit = () => {
  //   // let organistion = true;
  //   // setAuth({ organisation });
  //   console.log("hi ");
  // };

  return (
    <div>
      <TopBar pageName="Login" home="true" />
      <div className="flex gap-4 justify-around py-4 bg-[#eee0c9]">
        <h1
          onClick={() => {
            setStudent(true);
            setUniversity(false);
            setOrganisation(false);
            setMentor(false);
          }}
          className={`${
            student && "bg-[#96b6c5]"
          } p-2 rounded-md drop-shadow-md cursor-pointer`}
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
          className={`${
            organisation && "bg-[#96b6c5]"
          } p-2 rounded-md drop-shadow-md cursor-pointer`}
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
          className={`${
            mentor && "bg-[#96b6c5]"
          } p-2 rounded-md drop-shadow-md cursor-pointer`}
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
          className={`${
            university && "bg-[#96b6c5]"
          } p-2 rounded-md drop-shadow-md cursor-pointer`}
        >
          University
        </h1>
      </div>
      <div className="w-full flex justify-center pt-8">
        {student && <h1 style={{ fontSize: "1.5rem" }}>Login as Student</h1>}
        {organisation && (
          <h1 style={{ fontSize: "1.5rem" }}>Login as Organisation</h1>
        )}
        {mentor && <h1 style={{ fontSize: "1.5rem" }}>Login as Mentor</h1>}
        {university && (
          <h1 style={{ fontSize: "1.5rem" }}>Login as University</h1>
        )}
      </div>
      {student && <StudentLogin />}
      {mentor && <MentorLogin />}
      {organisation && <OrganisationLogin />}
      {university && <UniversityLogin />}
    </div>
  );
};

export default login;

{
  /* <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center mt-[80px]"
          >
            <div className="flex flex-col gap-6 w-[300px] justify-center ">
              {student && (
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="StudentID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userID}
                  name="userID"
                  error={!!touched.userID && !!errors.userID}
                  helperText={touched.userID && errors.userID}
                />
              )}
              {mentor && (
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="MentorID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userID}
                  name="userID"
                  error={!!touched.userID && !!errors.userID}
                  helperText={touched.userID && errors.userID}
                />
              )}
              {university && (
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="UniversityID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userID}
                  name="userID"
                  error={!!touched.userID && !!errors.userID}
                  helperText={touched.userID && errors.userID}
                />
              )}
              {organisation && (
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="OrganisationID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userID}
                  name="userID"
                  error={!!touched.userID && !!errors.userID}
                  helperText={touched.userID && errors.userID}
                />
              )}
              <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="OrganisationID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userID}
                  name="userID"
                  error={!!touched.userID && !!errors.userID}
                  helperText={touched.userID && errors.userID}
                />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <Box className="flex justify-center">
                <Button type="submit" color="secondary" variant="contained">
                  login
                  {student && <Link to="/student">Log In</Link>}
                  {university && <Link to="/university">Log In</Link>}
                  {organisation && <Link to="/home">Log In</Link>}
                  {mentor && <Link to="/mentor">Log In</Link>}
                </Button>
              </Box>
              <h1>
                Didn't have account?{" "}
                <Link to="/register" className="cursor-pointer underline">
                  Register here
                </Link>
              </h1>
            </div>
          </form>
        )}
      </Formik> */
}
