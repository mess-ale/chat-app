import { useTheme } from '@emotion/react'
import { DialogActions, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { BellSimpleRinging, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to Delete this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}


const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  }
  const handleCloseDelete = () => {
    setOpenDelete(false);
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
              <Typography variant='subtitle2'>
                Contact info
              </Typography>
              <IconButton onClick={() => {
                dispatch(ToggleSidebar());
              }}>
                <X />
              </IconButton>
            </Stack>
          </Box>

          {/* Body */}
          <Stack sx={{ height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll' }} p={3} spacing={2}>
            <Stack alignItems={'center'} direction={'row'} spacing={2}>
              <Avatar src={faker.image.avatar()} alt={faker.name.firstName} sx={{ height: 64, width: 64 }} />
              <Stack spacing={0.5}>
                <Typography variant='article' fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant='body2' fontWeight={500}>
                  {'+251 98 509 5515'}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
              <Stack spacing={1} alignItems={'center'}>
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant='overline'>Voice</Typography>
              </Stack>
              <Stack spacing={1} alignItems={'center'}>
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant='overline'>Vedio</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} spacing={3}>
                <BellSimpleRinging size={32} />
                <Typography>Notifications</Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <Typography variant='article'>About</Typography>
              <Typography variant='body2'>sky is the limit</Typography>
            </Stack>
            <Divider />
            <Stack direction={'roow'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant='subtitle2'>Media & Links</Typography>
              <Button onClick={() => {
                dispatch(UpdateSidebarType('SHERED'))
              }
              } endIcon={<CaretRight />}>
                401
              </Button>
            </Stack>

            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              ))}
            </Stack>
            <Divider />
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Star />
                <Typography variant='subtitle2'>Starred Messages</Typography>
              </Stack>
              <IconButton onClick={() => {
                dispatch(UpdateSidebarType('STARED'))
              }}>
                <CaretRight />
              </IconButton>
            </Stack>
            <Divider />
            <Typography>1 group in common</Typography>
            <Stack alignItems={'center'} direction={'row'} spacing={2}>
              <Avatar src={faker.image.avatar()} alt={faker.name.firstName} sx={{ height: 64, width: 64 }} />
              <Stack spacing={0.5}>
                <Typography variant='subtitle2' fontWeight={600}>
                  ECED Summer Internship Program
                </Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
              <Button onClick={() => {
                setOpenBlock(true);
              }} startIcon={<Prohibit />} variant="contained" color="primary">
                Delete
              </Button>
              <Button onClick={() => {
                setOpenDelete(true);
              }
              } startIcon={<Trash />} variant="contained" color="primary">
                Block
              </Button>
            </Stack>
          </Stack>
          {openBlock &&
            (<BlockDialog open={openBlock} handleClose={handleCloseBlock} />)
          }
          {openDelete &&
            (<DeleteDialog open={openDelete} handleClose={handleCloseDelete} />)
          }
        </Stack>
      </Box>
    </div>
  )
}

export default Contact