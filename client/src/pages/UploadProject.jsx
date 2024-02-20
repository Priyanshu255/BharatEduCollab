import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { projectData } from "../data/projectData";
import axios from "axios";
import { useEffect, useState } from "react";

const initialValues = {
  projectName: "",
  university: "",
  domain: "",
  techUsed: "",
  teamMembers: "",
  description: "",
  video: "",
};

const userSchema = yup.object().shape({
  projectName: yup.string().required("required"),
  university: yup.string().required("required"),
  domain: yup.string().required("required"),
  techUsed: yup.string().required("required"),
  teamMembers: yup.string().required("required"),
  description: yup.string().required("required"),
  video: yup.string().required("required"),
});

const UploadProject = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    console.log(values);
    // let data = JSON.stringify(values);
    // console.log(data);
    // let config = {
    //   method: 'POST',
    //   url: 'http://localhost:3001/api/projects/',
    //   body: JSON.stringify(values),
    // headers: {'Content-Type': 'application/json'},
    // };
    // const response = await axios.post('http://localhost:3001/api/projects/', {data});
    // console.log(response);
    const response = await fetch("http://localhost:3001/api/projects/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    navigate("/university");
  };
  return (
    <>
      <TopBar pageName="Upload Project" />
      <div>
        <Formik
          onSubmit={(values) => {
            // console.log(values);
            // setProdata(values);
            handleFormSubmit(values);
          }}
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
              className="flex-col justify-center m-[80px]"
            >
              <div className="grid grid-cols-2 gap-4 grid-flow-row mb-20">
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="Name of Project"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectName}
                  name="projectName"
                  error={!!touched.projectName && !!errors.projectName}
                  helperText={touched.projectName && errors.projectName}
                />
                <TextField
                  fullWidth
                  // color=""
                  variant="filled"
                  type="text"
                  label="University"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.university}
                  name="university"
                  error={!!touched.university && !!errors.university}
                  helperText={touched.university && errors.university}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Domain"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.domain}
                  name="domain"
                  error={!!touched.domain && !!errors.domain}
                  helperText={touched.domain && errors.domain}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Technology Used"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.techUsed}
                  name="techUsed"
                  error={!!touched.techUsed && !!errors.techUsed}
                  helperText={touched.techUsed && errors.techUsed}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Team Member(s)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.teamMembers}
                  name="teamMembers"
                  error={!!touched.teamMembers && !!errors.teamMembers}
                  helperText={touched.teamMembers && errors.teamMembers}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Youtube Video Embeded Link"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.video}
                  name="video"
                  error={!!touched.video && !!errors.video}
                  helperText={touched.video && errors.video}
                />
              </div>
              <Box className="flex justify-start">
                <Button type="submit" color="secondary" variant="contained">
                  Upload
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UploadProject;
