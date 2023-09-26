import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { InputBase, Avatar, Box, Stack, Button,
  Switch, IconButton, Divider, Typography } from "@mui/material"
import { useTheme, styled, alpha } from "@mui/material/styles";
import ima from "../../assets/Images/logo.png";
import { ChatList, Nav_Buttons } from "../../data"
import { ArchiveBox, CircleDashed, Gear, MagnifyingGlass, CaretDown } from "phosphor-react";
import { faker } from "@faker-js/faker";
import Badge from '@mui/material/Badge';
import useSettings from "../../hooks/useSettings"
import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({id, name , img, msg, time, unread, online}) => {
  return (
      <Box sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: "#ff1",
      }}
      p={1.1}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online  ? <StyledBadge 
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} /> </StyledBadge>
              : <Avatar src={faker.image.avatar()} />
              }

            
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {name}
              </Typography>
              <Typography variant="caption">
                {msg}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography sx={{fontWeight: 600, variant: "caption"}}>
             {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}>

            </Badge>
          </Stack>
        </Stack>
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
      <Box p={1} sx={{ flexGrow: 1, overflow: "scroll", backgroundColor: theme.palette.background, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",height: "100%", width: "35%"}}>
        <SimpleBarStyle timeout={0.5} clickOnTrack={false}>
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
          <CaretDown size={32} onClick={openClose} />
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


        <Stack paddingTop={3} spacing={3} direction="row" display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ idth:"100%" }}>
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
        </Stack >
        
        <Stack direction= "column">
          <Stack spacing={2.4}>
            <Typography sx={{color: "#676767"}} variant="subtitle2">
              Pinned
            </Typography>
            
            {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el}/>;
              })}
          </Stack>

          <Stack spacing={2.4}>
            <Typography sx={{color: "#676767"}} variant="subtitle2">
              All Chats
            </Typography>
            
            {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el}/>;
              })}
          </Stack>
        </Stack>
        </SimpleBarStyle>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
