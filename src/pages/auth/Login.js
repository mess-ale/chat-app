import { Button, Input, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleReSize = () => {
    const maxWidth = 1045;
    setIsMobile(window.innerWidth <= maxWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleReSize);
    handleReSize();

    return () => {
      window.removeEventListener('resize', handleReSize);
    }
  }, []);

  return (
    <><Stack direction= {isMobile ? 'column' : 'row'} spacing={12} sx={{ backgroundColor: '#edede9', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh', paddingTop:4, paddingBottom: 4  }}>
      <Stack sx={{ widows: '60%'}}>
        <Typography color={'#edafb8'} variant="h1">ChitChat</Typography>
        <Typography variant="h4">ChitChat helps you connect and share with the </Typography>
        <Typography variant="h4">people in your life.</Typography>
      </Stack>
      <Stack spacing={3} sx={{ backgroundColor: "#d6ccc2", boxShadow: '0px 2px 10px 1px rgba(71, 71, 71, 0.51)', borderRadius: 2, minWidth: '320px', padding: 5 }}>
        <Input style={{ color: "#000" }} placeholder="Enter you Email or Phone" />
        <Input style={{ color: "#000" }}
          type="password"
          placeholder="Type your password…"
        />
        <Link to='/app'>
          <Button sx={{ backgroundColor: "#2ec4b6", width:'100%' }}>Log In</Button>
        </Link>

        <Stack sx={{ alignItems: 'center' }}>
          <Link to={'/auth/forgot'} variant='subtitle2'>
            Forgot Password?
          </Link>
        </Stack>
        <Divider />
        <Link to='/auth/register' variant='subtitle2'>
          <Button sx={{ backgroundColor: '#edede9', width:'100%' }}>Create New Account</Button>
        </Link>
      </Stack>
    </Stack>
    </>
  )
}

export default Login