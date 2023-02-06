import { Box } from "@mui/material";
import Navbar from "../navbar/index";

const Messenger = () => {
  return (
    <Box>
      <Navbar />
      <Box display="flex" width="100%">
        <Box flex="1" textAlign="center" height="91.8vh" backgroundColor="#999">
          left
        </Box>
        <Box flex="1" textAlign="center" height="91.8vh" backgroundColor="#999">
          center
        </Box>
        <Box flex="1" textAlign="center" height="91.8vh" backgroundColor="#999">
          right
        </Box>
      </Box>
    </Box>
  );
};

export default Messenger;
