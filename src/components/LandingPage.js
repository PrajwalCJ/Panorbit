import { useEffect } from "react";
import { useHandleUsers } from "../hooks/useHandleUsers"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../background.svg"


const LandingPage = () => {

    const { fetchUsers, allUsers } = useHandleUsers();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div style={{ margin: 0, background: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}>
            <div style={{ padding: '10% 0' }}>

                <Card sx={{ width: '40vw', borderRadius: 10, margin: 'auto' }}>

                    {/* Heading */}
                    <Typography variant="h5" component="div" sx={{ height: '4em', display: "flex", alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }} >
                        Select an account
                    </Typography>

                    {/* List of users */}
                    <CardContent sx={{ overflowY: 'auto', maxHeight: '50vh' }}>
                        {allUsers.map(user =>
                            <CardActionArea key={user.id}>
                                <div style={{ display: 'flex', alignItems: 'center', padding: '0.5em 0.1px', borderBottom: '1px solid #e0e0e0' }} onClick={() => { navigate(`/homepage/${user.id}`) }}>
                                    <Avatar alt={user.name} src={user.profilepicture} />
                                    <Typography>{user.name}</Typography>
                                </div>
                            </CardActionArea>
                        )}
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default LandingPage;