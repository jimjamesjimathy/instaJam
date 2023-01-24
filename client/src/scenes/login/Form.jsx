import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const { palette } = useTheme();

  // REGISTER FUNCTION
  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:5150/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      navigate("/home");
    }
  };

  // LOGIN FUNCTION
  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:5150/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            textAlign="center"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  placeholder="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    borderRadius: "5px",
                    gridColumn: "span 2",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    borderRadius: "5px",
                    gridColumn: "span 2",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                    borderRadius: "5px",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    gridColumn: "span 4",
                    borderRadius: "5px",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{
                    borderRadius: "5px",
                    gridColumn: "span 4",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Occupation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.occupation}
                  name="occupation"
                  error={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
                  helperText={touched.occupation && errors.occupation}
                  sx={{
                    borderRadius: "5px",
                    gridColumn: "span 4",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <Box
                  gridColumn="span 4"
                  height="5vh"
                  border="1px solid #999"
                  borderRadius="5px"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        height="100%"
                        width="100%"
                        {...getRootProps()}
                        sx={{
                          textAlign: "center",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#F5F5F5",
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <Typography
                            variant="h5"
                            fontSize="1.15rem"
                            fontWeight="300"
                          >
                            Upload a Photo
                          </Typography>
                        ) : (
                          <Box
                            width="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-evenly"
                          >
                            <Typography
                              variant="h5"
                              fontWeight="300"
                              fontSize="1.2rem"
                            >
                              {values.picture.name}
                            </Typography>
                            <EditOutlinedIcon />
                          </Box>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}
            {isLogin ? (
              <>
                <TextField
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                    borderRadius: "5px",
                    width: "65%",
                    margin: "0 auto",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <TextField
                  placeholder="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  inputProps={{
                    color: "#000",
                  }}
                  sx={{
                    gridColumn: "span 4",
                    borderRadius: "5px",
                    width: "65%",
                    margin: "0 auto",
                    backgroundColor: "#F5F5F5",
                  }}
                />
              </>
            ) : (
              <span style={{ display: "none" }} />
            )}
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="outlined"
              type="submit"
              sx={{
                m: "2rem 0",
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#FFFFFF",
                width: "10em",
                backgroundColor: palette.secondary.five,
                "&:hover": {
                  backgroundColor: palette.secondary.three,
                },
              }}
            >
              {isLogin ? "Log in" : "register"}
            </Button>
            <Box width="100%">
              <Typography
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                  resetForm();
                }}
                sx={{
                  textDecoration: "underline",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up here."
                  : "Already have an account? Login here."}
              </Typography>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
