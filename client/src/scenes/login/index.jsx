import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.first.darkOne}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="400" fontSize="2rem">
          instaJam
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "91%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.first.darkOne}
      >
        <Typography fontSize="1.5rem">
          Welcome to instaJam! A social media site that is pretty cool
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
