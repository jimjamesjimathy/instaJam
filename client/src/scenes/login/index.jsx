import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");

  // IMPORT COLORS
  const { palette } = useTheme();

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
        padding="2.5rem 5rem"
        m="2rem auto"
        borderRadius=".3rem"
        backgroundColor="rgba(255, 255, 255, .87)"
      >
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            gap="25px"
            marginBottom="2rem"
          >
            <Typography variant="h1" margin="0" textAlign="center">
              Welcome
            </Typography>
            <Typography variant="h1" margin="0" textAlign="center">
              to
            </Typography>
            <Typography variant="h1" color={palette.tertiary.one}>
              instaJam
            </Typography>
          </Box>
        </Box>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
