import { Input, Stack, Typography, Checkbox, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <Stack direction={'row'} spacing={13} sx={{ width: '60%', backgroundColor: '#edede9', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        <Stack p={3} sx={{ backgroundColor: "#d6ccc2", width: '25%', boxShadow: '0px 2px 10px 1px rgba(71, 71, 71, 0.51)', borderRadius: 2, width: '460px', padding: 5 }}>
          <Stack spacing={0.6}>
            <Typography variant='h6'>
              Full Name
            </Typography>
            <Input placeholder='Name...'></Input>
          </Stack>
          <Stack spacing={0.6}>
            <Typography variant='h6'>
              Email
            </Typography>
            <Input placeholder='Email address...'></Input>
          </Stack>
          <Stack spacing={0.6}>
            <Typography variant='h6'>
              Username
            </Typography>
            <Input placeholder='Username...'></Input>
          </Stack>
          <Stack spacing={0.6}>
            <Typography variant='h6'>
              Password
            </Typography>
            <PasswordMeterInput />
          </Stack>
          <Stack spacing={0.6}>
            <Typography variant='h6'>
              Repeat Password
            </Typography>
            <PasswordMeterInput />
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Checkbox />
            <Typography variant='h7' paddingTop={1}>
              I agree to the TERMS OF USER
            </Typography>
          </Stack>
          <Stack alignItems={'center'} justifyContent={'center'} direction={'row'} spacing={2}>
            <Button variant="outlined">Sign Up</Button>
            <Link to={'/auth/login'}>
              <Button variant="outlined">Sign in</Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

function PasswordMeterInput() {
  const [value, setValue] = React.useState('');

  return (
    <Stack
      spacing={0.5}
      sx={{
        '--hue': Math.min(value.length * 10, 120),
      }}
    >
      <Input
        type="password"
        placeholder="Type in here…"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
      >
        {value.length < 3 && 'Very weak'}
        {value.length >= 3 && value.length < 6 && 'Weak'}
        {value.length >= 6 && value.length < 10 && 'Strong'}
        {value.length >= 10 && 'Very strong'}
      </Typography>
    </Stack>
  );
}

export default Register