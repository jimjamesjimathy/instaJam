import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  // IMPORT COLORS

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="login"
    >
      <Box
        width={isNonMobileScreens ? "50%" : "75%"}
        padding="3.5rem"
        m="2rem auto"
        borderRadius=".3rem"
        backgroundColor={palette.primary.five}
      >
        <Box>
          <Box width="100%" marginBottom="2rem">
            <Typography variant="h1" margin="0" textAlign="center">
              Welcome to instaJam
            </Typography>
          </Box>
        </Box>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
