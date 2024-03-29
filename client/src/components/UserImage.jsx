import { Box } from "@mui/material";

const UserImage = ({ image, size = "85px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:5150/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
