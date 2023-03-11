import { Avatar, Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ setProfilePop, profilePop, loggedInUser, allUsers }) => {
    const navigate= useNavigate();
    const open = Boolean(profilePop);
    const handleClick = (event) => {
        setProfilePop(event.currentTarget);
    };
    const handleClose = () => {
        setProfilePop(null);
    };

    return (
        <div>
            <Button sx={{ color: 'black' }} onClick={handleClick} >
                <Avatar alt={loggedInUser.name} src={loggedInUser.profilepicture} />
                <Typography pl={1} variant="body2">{loggedInUser.name}</Typography>
            </Button>

            <StyledMenu
                anchorEl={profilePop}
                open={open}
                onClose={handleClose}
            >
                <Box pb={2} onClick={handleClose} >
                    <Avatar
                        alt={loggedInUser.name}
                        src={loggedInUser.profilepicture}
                        sx={{ width: '25%', height: 'auto', margin: 'auto' }}
                    />
                    <Typography variant="h6">{loggedInUser.name}</Typography>
                    <Typography variant="body2" >{loggedInUser.email}</Typography>
                </Box>

                <div style={{ height: '10em', overflowY: 'scroll' }}>
                    {allUsers.map(user =>
                        <MenuItem key={user.id} disableRipple
                            onClick={() => { handleClose(); navigate(`/homepage/${user.id}`)}}
                        >
                            <Avatar alt={user.name} src={user.profilepicture} sx={{ width: '1.5em', height: 'auto' }} />
                            <Typography pl={1}>{user.name}</Typography>
                        </MenuItem>
                    )}
                </div>

                <Button variant="contained" color="error" sx={{ margin: '2em', borderRadius: 20 }}
                    onClick={() => { handleClose(); navigate('/')}}
                >
                    Sign Out
                </Button>


            </StyledMenu>
        </div>
    );
}

// Mui styling for profileMenu
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 20,
        marginTop: theme.spacing(1),
        width: '25%',
        textAlign: 'center',
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '2em',
        },
        '& .MuiMenuItem-root': {
            paddingBottom: '0.7em',
            borderTop: 'thin solid grey'
        },
    },
}));

export default ProfileMenu;