import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // IMPORT COLORS
  const { palette } = useTheme();

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundColor={palette.text.main}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={isNonMobileScreens ? "50%" : "91%"}
        padding="1.5rem 5rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={palette.text.two}
      >
        <Box>
          <Typography variant="h1" margin="0" textAlign="center">
            Welcome to instaJam
          </Typography>
          <Typography variant="h4" paddingBottom="2rem" textAlign="center">
            Social Media for complete idiots.
          </Typography>
        </Box>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
