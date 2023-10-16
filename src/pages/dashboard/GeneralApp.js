import { Box, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Conversation from "../../components/Conversation";
import Contact from '../../components/Contact'
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import Stared from "../../components/Stared";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const maxWidth = 1000;
    setIsMobile(window.innerWidth <= maxWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Box
        sx={{
          height: "100%",
          width: !isMobile ? "calc(100vw - 35%)" : '100%',
          backgroundColor: theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {(!isMobile && sidebar.open) && (() => {
        switch (sidebar.type) {
          case 'CONTACT':
            return <Box width={'45%'}><Contact /></Box>

          case 'SHERED':
            return <Box width={'45%'}><SharedMessages /></Box>

          case 'STARED':
            return <Box width={'29.8%'}><Stared /></Box>

          default:
            break;
        }
      })()}

    </Stack>
  );
};

export default GeneralApp;
