import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Switch,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import { dispatch } from "../../redux/store";
import { useTheme } from "@mui/material/styles";
import ima from "../../assets/Images/logo.png";
import {
  CircleDashed,
  Gear,
  CaretDown,
  Phone,
  Users,
  ChatCircleDots,
} from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import Chats from "./Chats";
import { useSelector } from "react-redux";
import { UpdateSelectedFutures, UpdateSelectedSidebarType } from "../../redux/slices/app";
import SettingSide from "./SettingSide";
import { Link } from "react-router-dom";
import GroupSide from "./GroupSide";
import CallLog from "./CallLog";


const SideBar = () => {
  const theme = useTheme();
  const [showBox, setShowBox] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(0);
  const { sidebar } = useSelector((store) => store.app)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1157); // Adjust the breakpoint as per your needs
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openClose = () => {
    setShowBox(!showBox);
  };

  const { onToggleMode } = useSettings();

  return (
    <Box
      p={1}
      sx={{
        flexGrow: 1,
        overflow: "scroll",
        overflowX: 'hidden',
        backgroundColor: theme.palette.background,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: "40%",
      }}
    >
      <Stack
        spacing={3}
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 70,
            width: "30%",
            borderRadius: 1.5,
            display: "flex",
            minWidth: "30%",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
          }}
        >
          {" "}
          <img src={ima} alt="logo img" />
        </Box>

        <Typography variant="h5">{sidebar.Futures}</Typography>

        <IconButton>
          <CircleDashed />
        </IconButton>
      </Stack>

      <Box sx={{ textAlign: "center", paddingTop: 2 }}>
        <CaretDown size={32} onClick={openClose} />
      </Box>

      {showBox && (
        <Stack
          style={{
            padding: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
          }}
        >
          {selected === 0 ? (
            <Link to='/app'>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(UpdateSelectedSidebarType('option1'));
                    dispatch(UpdateSelectedFutures('Chats'));
                  }}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <ChatCircleDots />
                </IconButton>
              </Box>
            </Link>
          ) : (
            <Link to='/app'>
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(0);
                  dispatch(UpdateSelectedSidebarType('option1'));
                  dispatch(UpdateSelectedFutures('Chats'));
                }}
              >
                <ChatCircleDots />
              </IconButton>
            </Link>
          )}
          {selected === 1 ? (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <Link to='/app'>
                <IconButton
                  onClick={() => {
                    dispatch(UpdateSelectedSidebarType('option2'));
                    dispatch(UpdateSelectedFutures('Groups'));
                  }}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <Users />
                </IconButton>
              </Link>
            </Box>
          ) : (
            <Link to='/app'>
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(1);
                  dispatch(UpdateSelectedSidebarType('option2'));
                  dispatch(UpdateSelectedFutures('Groups'));
                }}
              >
                <Users />
              </IconButton>
            </Link>
          )}
          {selected === 2 ? (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <Link to='/app'>
                <IconButton
                  onClick={() => {
                    dispatch(UpdateSelectedSidebarType('option3'));
                    dispatch(UpdateSelectedFutures('Call Logs'));
                  }}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <Phone />
                </IconButton>
              </Link>
            </Box>
          ) : (
            <Link to='/app'>
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(2);
                  dispatch(UpdateSelectedSidebarType('option3'));
                  dispatch(UpdateSelectedFutures('Call Logs'));
                }}
              >
                <Phone />
              </IconButton>
            </Link>
          )}
          <Divider sx={{ padding: 2, width: "48px" }} orientation="vertical" flexItem />
          {selected === 3 ? (
            <Link to='/setting'>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  onClick={() => {
                    dispatch(UpdateSelectedSidebarType('option4'));
                    dispatch(UpdateSelectedFutures('Settings'));
                  }}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content",
                    color: "#fff",
                  }}
                >
                  <Gear />
                </IconButton>
              </Box>
            </Link>
          ) : (
            <Link to='/setting'>
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(3);
                  dispatch(UpdateSelectedSidebarType('option4'));
                  dispatch(UpdateSelectedFutures('Settings'));
                }}
              >
                <Gear />
              </IconButton>
            </Link>
          )}
          <Switch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
        </Stack>
      )}

      {sidebar.valueType === 'option1' ? <Chats />
        : sidebar.valueType === 'option2' ? <GroupSide />
          : sidebar.valueType === 'option3' ? <CallLog />
            : sidebar.valueType === 'option4' ? <SettingSide />
              : 'No option selected'}

    </Box>
  );
};

export default SideBar;