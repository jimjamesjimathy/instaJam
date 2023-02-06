import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/index";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1051px)");
  const fullName = `${user.firstName} ${user.lastName}`;
  const theme = useTheme();

  return (
    <FlexBetween
      padding="1rem 6%"
      sx={{
        boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="500"
          letterSpacing="1px"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          instaJam
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween borderRadius="5px" gap="3rem" padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="2rem"
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode
                sx={{
                  fontSize: "25px",
                  flex: 1,
                }}
              />
            ) : (
              <LightMode sx={{ fontSize: "25px", flex: 1 }} />
            )}
          </IconButton>
          <Message
            onClick={() => navigate("/messenger")}
            sx={{
              fontSize: "25px",
              flex: 1,
              cursor: "pointer",
            }}
          />
          <Notifications
            sx={{
              fontSize: "25px",
              flex: 1,
            }}
          />
          <Help
            sx={{
              fontSize: "25px",
              flex: 1,
            }}
          />
          <FormControl
            value={fullName}
            sx={{
              borderRadius: "5px",
            }}
          >
            <Select
              value={fullName}
              sx={{
                flex: 2,
                borderRadius: "0.25rem",
                width: "13em",
                padding: "0.3rem 0",
              }}
              input={<InputBase />}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                value={fullName}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {fullName}
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(setLogout())}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Log Out
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  width: "100%",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {},
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode
                  sx={{
                    fontSize: "25px",
                    flex: 1,
                  }}
                />
              ) : (
                <LightMode sx={{ fontSize: "25px", flex: 1 }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
