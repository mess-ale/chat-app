import { DialogActions, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, Button, Typography, } from '@mui/material'
import { Plus } from 'phosphor-react';
import React, { useState } from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const NotificationDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>All Notifications</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography>You have a new message from John Smith:
                        "Hey there! Just wanted to check in and see how you're doing. Let's catch up soon!"</Typography>
                    <Typography>
                        You have a new friend request from Sarah Johnson:
                        "Hi! I came across your profile and thought it would be great to connect. Let's be friends!"
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

const ThemeDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Theme</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Light</Button>
                <Button onClick={handleClose}>Dark</Button>
            </DialogActions>
        </Dialog>
    );
}

const PrivecyDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Privacy</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography>
                        1, Privacy Settings: Familiarize yourself with the privacy settings of the social media platforms you use. These settings allow you to control who can see your profile, posts, and personal information. Adjust the settings according to your preferences, and regularly review and update them as needed.
                    </Typography>
                    <Typography>
                        2, Strong Passwords: Use strong and unique passwords for your social media accounts to prevent unauthorized access. Avoid using easily guessable information like your name or birthdate. Consider using a password manager to securely store and generate complex passwords.
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

const SecurityDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Security</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography>
                        1. Strong and Unique Passwords: Use strong, unique passwords for your social media accounts. Avoid using common passwords or easily guessable information. Consider using a password manager to generate and store complex passwords securely.

                    </Typography>
                    <Typography>
                        2. Two-Factor Authentication (2FA): Enable two-factor authentication whenever possible. This adds an extra layer of security by requiring a second verification step, such as a code sent to your mobile device, in addition to your password.

                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

const ShortCutialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Short Cut</DialogTitle>
            <DialogContent width={222}>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography>
                        1. Press "n" to create a new post.
                    </Typography>
                    <Typography>
                        2. Press "l" to like a post.
                    </Typography>
                    <Typography>
                        3. Press "c" to comment on a post.
                    </Typography>
                    <Typography>
                        4. Press "s" to share a post.
                    </Typography>
                    <Typography>
                        5. Press "r" to reply to a story.
                    </Typography>
                    <Typography>
                        6. Press "d" to send a direct message.
                    </Typography>
                    <Typography>
                        7. Press "t" to go to the top of the feed.
                    </Typography>
                    <Typography>
                        8. Press "b" to go back to the previous page.
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

const HelpDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Help</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography>
                        1, Account Setup: If you're new to a social media platform, I can guide you through the process of setting up an account, including creating a profile, adding a profile picture, and filling out necessary information.
                        <Typography>
                            2. Privacy Settings: I can assist you in understanding and configuring the privacy settings on your social media accounts to control who can see your posts, photos, and personal information.
                        </Typography>
                        <Typography>
                            3. Posting and Sharing: If you need guidance on how to create and publish posts, share photos or videos, or use hashtags effectively, I can provide you with tips and best practices.</Typography>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}


const AddGroupDialog = ({ open, handleClose }) => {
    const [myArray, setMyArray] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const addValueToArray = () => {
        // Create a new array with the added value
        const newArray = [...myArray, inputValue];

        // Update the state with the new array
        setMyArray(newArray);

        // Clear the input field
        setInputValue('');
    };

    return (
        <Dialog
            fullWidth maxWidth='xs'
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            sx={{ p: 4 }}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'}>Create New Group</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Group Name
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter a Group Name"
                    fullWidth
                    variant="standard"
                />
                <DialogContentText>
                    members
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter a members Name"
                    fullWidth
                    variant="standard"
                />
                <Button style={{ backgroundColor: "#b5e2fa" }} onClick={addValueToArray}>
                    <Plus />
                </Button>
                <ul>
                    {myArray.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export { NotificationDialog, ThemeDialog, PrivecyDialog, SecurityDialog, ShortCutialog, HelpDialog, AddGroupDialog }