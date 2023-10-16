import { useTheme } from '@emotion/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Box, Stack, Typography, IconButton, } from '@mui/material';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, } from 'phosphor-react';
import Message from './Conversation/Message';

const Stared = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <div>
            <Box sx={{ height: '100vh', flexGrow: 1, overflow: 'scroll' }} >
                <Stack sx={{ height: '100%' }}>
                    <Box sx={{
                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                        backgroundColor: theme.palette.mode === 'light' ? '#f8faff' : theme.palette.background,
                    }}>
                        <Stack sx={{ height: '100%', p: 2 }}
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            spacing={3}>
                            <IconButton onClick={() => {
                                dispatch(UpdateSidebarType('CONTACT'));
                            }}>
                                <CaretLeft />
                            </IconButton>
                            <Typography variant='subtitle2'>
                                Stared Messages
                            </Typography>
                        </Stack>
                    </Box>
                    <Message menu={false} />
                </Stack>
            </Box>
        </div>
    )
}

export default Stared