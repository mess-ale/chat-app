import React from 'react'
import {
    Box, Avatar, Button, Stack,
    Menu,
    InputBase,
    MenuItem, Divider, Typography,
} from '@mui/material';
import {
    ArchiveBox,
    MagnifyingGlass,
} from 'phosphor-react';
import { ChatList } from '../../data';
import Badge from "@mui/material/Badge";
import { Profile_Menu } from "../../data";
import { styled, alpha } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { useState } from 'react';

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    border: "2px solid rgba(0, 0, 0, 0.3)",
    width: "100%",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "gray",
            }}
            p={1.1}
        >
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2}>
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar src={faker.image.avatar()} />{" "}
                        </StyledBadge>
                    ) : (
                        <Avatar src={faker.image.avatar()} />
                    )}

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={"center"}>
                    <Typography sx={{ fontWeight: 600, variant: "caption" }}>
                        {time}
                    </Typography>
                    <Badge color="primary" badgeContent={unread}></Badge>
                </Stack>
            </Stack>
        </Box>
    );
};

const MessageOption = () => {
    const [anchorEl, setAnchoreEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleclick = (event) => {
        setAnchoreEl(event.currentTarget);
    };
    const handleclose = () => {
        setAnchoreEl(null);
    };

    return (
        <>
            <Avatar src={faker.image.avatar()} id='basic-button' arial-controls={open ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} onClick={handleclick} size={24} />
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleclose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={1} px={1}>
                    {Profile_Menu.map((el) => (
                        <MenuItem onClick={handleclick}>
                            <Stack sx={{ width: 100 }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                <span>{el.title}</span>{el.icon}
                            </Stack>
                        </MenuItem>
                    ))}
                </Stack>
            </Menu>
        </>
    );
}

const Chats = () => {

    return (
        <>
            <Stack
                paddingTop={2}
                spacing={3}
                direction="row"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ idth: "100%" }}
            >
                <Box>
                    <MessageOption />
                </Box>

                <Box>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709ce6" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Box>
            </Stack>
            <Stack paddingTop={3} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                    <ArchiveBox size={24} />
                    <Button>archive</Button>
                </Stack>
                <Divider />
            </Stack>

            <Stack direction="column">
                <Stack spacing={2.4}>
                    <Typography sx={{ color: "#676767" }} variant="subtitle2">
                        Pinned
                    </Typography>

                    {ChatList.filter((el) => el.pinned).map((el) => {
                        return <ChatElement {...el} />;
                    })}
                </Stack>

                <Stack spacing={2.4}>
                    <Typography sx={{ color: "#676767" }} variant="subtitle2">
                        All Chats
                    </Typography>

                    {ChatList.filter((el) => !el.pinned).map((el) => {
                        return <ChatElement {...el} />;
                    })}
                </Stack>
            </Stack>
        </>
    )
}

export default Chats