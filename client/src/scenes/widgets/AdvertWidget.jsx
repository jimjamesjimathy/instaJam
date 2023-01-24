import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper
      sx={{
        backgroundColor: palette.tertiary.one,
        border: `.2rem solid black`,
      }}
    >
      <FlexBetween>
        <Typography variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:5150/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography>MikaCosmetics</Typography>
        <Typography>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
