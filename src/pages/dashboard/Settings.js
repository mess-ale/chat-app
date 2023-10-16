import React, { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { useTheme } from '@emotion/react'
import imgs from '../../assets/Images/sigmund-f0dJjQMhfXo-unsplash.jpg'
import SideBar from '../../layouts/dashboard/SideBar'

const Settings = () => {
    const theme = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        const maxWidth = 980;
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
    
    const [isMobiles, setIsMobiles] = useState(false);

    const handleResizer = () => {
        const maxWidth = 680;
        setIsMobiles(window.innerWidth <= maxWidth);
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResizer);

        // Initial check on component mount
        handleResizer();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResizer);
        };
    }, []);

    return (
        <>
            {!isMobile &&
                <Stack direction={"row"} sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            height: "100%",
                            width: "calc(100vw - 35%)",
                            backgroundColor: theme.palette.mode === "light" ? "#f0f4fa" : theme.palette.background.default,
                        }}
                    >
                        <img height={'100%'} width={'100%'} src={imgs} alt='settings img' />
                    </Box>
                </Stack>
            }
            {isMobiles && <SideBar />}
        </>
    )
}

export default Settings