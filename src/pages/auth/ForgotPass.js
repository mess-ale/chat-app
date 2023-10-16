import { Button, Input, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ForgotPass = () => {
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
        <>
            <Stack direction= {isMobile ? 'column' : 'row'} spacing={10} sx={{ backgroundColor: '#edede9', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh', paddingTop:4, paddingBottom: 4   }}>
                <Stack spacing={1} sx={{ width: '50%'}}>
                    <Typography color={'#edafb8'} variant='h2'>
                        Forgot Password
                    </Typography>
                    <Typography variant='h4'>
                        Enter you email and we'll send you a link to reset your password.
                    </Typography>
                </Stack>

                <Stack p={3} sx={{ minWidth: '320px', backgroundColor: "#d6ccc2", boxShadow: '0px 2px 10px 1px rgba(71, 71, 71, 0.51)', borderRadius: 2, width: '360px', padding: 5 }}>
                    <Input placeholder='Enter recovery email...' />
                    <Stack direction={'row'} spacing={2} paddingTop={5} justifyContent={'center'}>
                        <Button variant="outlined">
                            Submit
                        </Button>
                        <Link to={'/auth/login'}>
                            <Button variant="outlined">
                                Back to Login
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default ForgotPass