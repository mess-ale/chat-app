import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { InputBase, Avatar, Box, Stack, Button,
  Switch, IconButton, Divider, Typography } from "@mui/material"
import { useTheme, styled, alpha } from "@mui/material/styles";
import ima from "../../assets/Images/logo.png";
import { FaChevronDown } from 'react-icons/fa';
import { Nav_Buttons } from "../../data"
import { ArchiveBox, CircleDashed, Gear, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings"
import Badges from './Badge'

const ChatElement = () => {
  return (
      <Box sx={{
          width: "100%",
          height: 60,
          borderRadius: 1,
          backgroundColor: "#ff1",
      }}
      p={1.1}
      >
        <Badges />
      </Box>
  )
}

const Search = styled("div") (({theme}) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  border: "2px solid rgba(0, 0, 0, 0.3)", 
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) =>({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft:  `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  }
}))

const DashboardLayout = () => {
  const theme = useTheme();
  const [showBox, setShowBox] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 868); // Adjust the breakpoint as per your needs
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const openClose = () => {
    setShowBox(!showBox);
  }

  const {onToggleMode} = useSettings();


  return (
    <>
      <Box p={1} sx={{backgroundColor: theme.palette.background, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: "35%"}}>
      <Stack spacing={3} direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ width:"100%" }}>
          <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                height:70,
                width:"30%",
                borderRadius:1.5, 
                display: 'flex',
                minWidth:"26%",
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
              }}> <img min-width={40} min-height={40} src=  {ima} alt="logo img" />
          </Box>

          <Typography variant="h5">
            Chats
          </Typography>

          <IconButton>
            <CircleDashed />
          </IconButton>

        </Stack>

        <Box sx={{ textAlign: "center", paddingTop: 4 }}>
          <FaChevronDown onClick={openClose} />
        </Box>

        { showBox && 
          <Stack style={{ padding: 6, display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: isMobile ? "column" : "row", gap: '12px' }}> 
            {Nav_Buttons.map((el) => (
              el.index === selected ?
              <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                <IconButton sx={{width: "max-content", color: "#fff"}} key={el.index}> {el.icon} </IconButton>
              </Box>
              : 
              <IconButton onClick={() => {
                setSelected(el.index)}
              } sx={{width: "max-content", 
              color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary}}
             key={el.index}> {el.icon} </IconButton>
            ))}
           <Divider sx={{ width: "48px" }} />
           { selected === 3 ?
            <IconButton sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, width: "max-content", color: "#fff"}}>
                <Gear />  
            </IconButton>    
            :
            <IconButton sx={{width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary}} onClick={() => {setSelected(3)}}>
               <Gear />  
            </IconButton> 
            }   
            <Switch onChange={() => {
              onToggleMode();
            }} defaultChecked />
          </Stack>
        }


        <Stack paddingTop={3} spacing={3} direction="row" alignItems={"center"} sx={{ idth:"100%" }}>
          <Box>
            <Avatar src={faker.image.avatar()} />
          </Box>

          <Box>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709ce6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}} />
              </Search>
          </Box>
        </Stack>

        <Stack paddingTop={3} spacing={1}>
          <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button >archive</Button>
          </Stack>
          <Divider />
        </Stack>
          <ChatElement />
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
