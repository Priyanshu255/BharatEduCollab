import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  emailID: "",
  password: "",
  conPass: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  emailID: yup
    .string()
    .required("required")
    .email("Please enter a valid email id."),
  password: yup.string().required("required"),
  conPass: yup.string().required("required"),
});

const handleFormSubmit = () => {};

const MentorRegistration = () => {
  return (
    <div>
      <Formik
        onSubmit={(values) => console.log(values)}
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
              <TextField
                fullWidth
                // color=""
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                // color=""
                variant="filled"
                type="text"
                label="EmailID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.emailID}
                name="emailID"
                error={!!touched.emailID && !!errors.emailID}
                helperText={touched.emailID && errors.emailID}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Create Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.conPass}
                name="conPass"
                error={!!touched.conPass && !!errors.conPass}
                helperText={touched.conPass && errors.conPass}
              />
              <Box className="flex justify-center">
                <Button type="submit" color="secondary" variant="contained">
                  <Link to="/mentor">Register</Link>
                </Button>
              </Box>
              <h1>
                Have account?{" "}
                <Link to="/login" className="cursor-pointer underline">
                  Login here
                </Link>
              </h1>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MentorRegistration;
