import { faker } from '@faker-js/faker'
import { Avatar, Divider, Stack, Typography } from '@mui/material'
import { Bell, Key, Keyboard, LockKey, PencilCircle, Question } from 'phosphor-react'
import React from 'react'
import { HelpDialog, NotificationDialog, PrivecyDialog, SecurityDialog, ShortCutialog, ThemeDialog } from './Dialog'
import { useState } from 'react'


const SettingSide = () => {
    const [openNotif, setOpenNotif] = useState(false);
    const handleCloseNotif = () => {
        setOpenNotif(false);
    }

    const [openTheme, setOpenTheme] = useState(false);
    const handleCloseTheme = () => {
        setOpenTheme(false);
    }
    
    const [openPrivecy, setOpenPrivecy] = useState(false);
    const handleClosePrivecy = () => {
        setOpenPrivecy(false);
    }

    const [openSecurity, setOpenSecurity] = useState(false);
    const handleCloseSecurity = () => {
        setOpenSecurity(false);
    }

    const [openShortCut, setOpenShortCut] = useState(false);
    const handleCloseShortCut = () => {
        setOpenShortCut(false);
    }

    const [openHelp, setOpenHelp] = useState(false);
    const handleCloseHelp = () => {
        setOpenHelp(false);
    }

    return (
        <>
            <Stack p={4} spacing={5}>
                <Stack direction={'row'} spacing={5}>
                    <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
                    <Stack spacing={1}>
                        <Typography variant='subtitle2'> {faker.name.fullName()} </Typography>
                        <Typography variant='body2'> {faker.random.word()} </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenNotif(true);
                    }} paddingTop={2} direction={'row'} spacing={10}>
                        <Bell size={32} />
                        <Typography>
                            Notification
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenTheme(true);
                    }} paddingTop={2} direction={'row'} spacing={10}>
                        <PencilCircle size={32} />
                        <Typography>
                            Theme
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenPrivecy(true);
                    }} paddingTop={2} direction={'row'} spacing={10}>
                        <LockKey size={32} />
                        <Typography>
                            Privecy
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenSecurity(true);
                    }} paddingTop={2} direction={'row'} spacing={10}>
                        <Key size={32} />
                        <Typography>
                            Security
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenShortCut(true);
                    }}paddingTop={2} direction={'row'} spacing={10}>
                        <Keyboard size={32} />
                        <Typography>
                            Keyboard Sortcut
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack onClick={() => {
                        setOpenHelp(true);
                    }}paddingTop={2} direction={'row'} spacing={10}>
                        <Question size={32} />
                        <Typography>
                            Help
                        </Typography>
                    </Stack>
                    {openNotif &&
                        (<NotificationDialog open={openNotif} handleClose={handleCloseNotif} />)
                    }
                    {openTheme &&
                        (<ThemeDialog open={openTheme} handleClose={handleCloseTheme} />)
                    }
                    {openPrivecy &&
                        (<PrivecyDialog open={openPrivecy} handleClose={handleClosePrivecy} />)
                    }
                    {openSecurity &&
                        (<SecurityDialog open={openSecurity} handleClose={handleCloseSecurity} />)
                    }
                    {openShortCut &&
                        (<ShortCutialog open={openShortCut} handleClose={handleCloseShortCut} />)
                    }
                    {openHelp &&
                        (<HelpDialog open={openHelp} handleClose={handleCloseHelp} />)
                    }
                </Stack>
            </Stack>
        </>
    )
}

export default SettingSide