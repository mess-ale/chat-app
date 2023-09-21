import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import ima from "../../assets/Images/logo.ico";

const DashboardLayout = () => {
  const them = useTheme();
  console.log(them);
  return (
    <>
      <Box p={1} sx={{backgroundColor: them.palette.background, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: "30%"}}>
        <Stack spacing={3} direction="row" alignItems={"center"} sx={{width:"100%"}}>
           <Box
           sx={{
              backgroundColor: them.palette.primary.main,
              height:64,
              width:"19%",
              borderRadius:1.5
            }}> <img src=  {ima} alt="logo img" />
            </Box>
        </Stack>
       
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;