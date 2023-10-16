import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";
import React, { useState, useEffect } from 'react';

const ResponsiveComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const maxWidth = 680;
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
    
    <Stack direction={"row"} height={"100%"}>
      {!isMobile && <SideBar />}
      <Outlet />
    </Stack>
  );
};

export default ResponsiveComponent;