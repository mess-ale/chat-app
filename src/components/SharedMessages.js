import React from 'react'
import { Box, Stack, Typography, IconButton, Tab, Tabs, Grid } from '@mui/material'
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, } from 'phosphor-react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SHARED_LINKS } from '../data';
import { LinkMsg } from './Conversation/MsgType';

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const handlechange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Box sx={{ width: '100%', height: '100vh' }} >
                <Stack sx={{ height: '100%' }}>
                    <Box sx={{
                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                        width: '100%',
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
                                Shared Messages
                            </Typography>
                        </Stack>
                    </Box>
                    <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handlechange} centered>
                        <Tab label='Media' />
                        <Tab label='Links' />
                    </Tabs>

                    <Stack
                        sx={{
                            height: '100%',
                            position: 'relative',
                            flexGrow: 1,
                            overflowY: 'scroll',
                        }}
                        p={3}
                        spacing={2}
                    >
                        {(() => {
                            switch (value) {
                                case 0:
                                    return (<Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                                            return <Grid item xs={4}>
                                                <img
                                                    src={faker.image.avatar()}
                                                    alt={faker.name.fullName()}
                                                />
                                            </Grid>;
                                        })}
                                    </Grid>);

                                case 1:
                                    return SHARED_LINKS.map((el) => <LinkMsg el={el} />)

                                default:
                                    break;
                            }
                        })()
                        }
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}

export default SharedMessages