import { Avatar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHandleUsers } from "../hooks/useHandleUsers";
import ProfileDetailItem from "./ProfileDetailItem";
import ProfileMenu from "./ProfileMenu";
import SideMenu from "./SideMenu";

const HomePage = () => {

    const { fetchUserById, loggedInUser, allUsers } = useHandleUsers();
    const { id } = useParams();
    const [profilePop, setProfilePop] = useState(null);
    const [pageName, setPageName] = useState('Profile')

    useEffect(() => {
        fetchUserById(id);
    }, [id])

    return (
        <>
            {loggedInUser && (
                // Outer element
                <Box sx={{ display: 'flex', margin: '2em' }}>

                    {/* Side Menu */}
                    <SideMenu pageName={pageName} setPageName={setPageName} />

                    {/* Content */}
                    <Box sx={{ width: '100%' }}>

                        <Grid container>
                            {/* Top bar */}
                            <Grid item sm={12} sx={{ padding: '0 2em' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="h6">{pageName}</Typography>
                                    {/* Profile Menu pop*/}
                                    <ProfileMenu setProfilePop={setProfilePop} profilePop={profilePop} loggedInUser={loggedInUser} allUsers={allUsers} />
                                </div>
                            </Grid>

                            <Grid item sm={12} p={3}>
                                <Divider />
                            </Grid>

                            {pageName != "Profile" &&
                                <Grid item sm={12} p={3}>
                                    <Typography>Coming Soon!</Typography>
                                </Grid>
                            }

                            {/* Profile Details section */}
                            {pageName == "Profile" && <>
                                <Grid pitem px={1} lg={4} sx={{ width: '100%', borderRight: '0.5px solid grey' }}>
                                    <Avatar
                                        alt={loggedInUser.name}
                                        src={loggedInUser.profilepicture}
                                        sx={{ width: '50%', height: 'auto', margin: 'auto' }}
                                    />
                                    <div>
                                        <Typography variant="h6">{loggedInUser.name}</Typography>
                                        <ProfileDetailItem keyName={"Username"} keyValue={loggedInUser.name} />
                                        <ProfileDetailItem keyName={"e-mail"} keyValue={loggedInUser.email} />
                                        <ProfileDetailItem keyName={"Phone"} keyValue={loggedInUser.phone} />
                                        <ProfileDetailItem keyName={"Website"} keyValue={loggedInUser.website} />

                                        <Divider sx={{ width: '80%', margin: 'auto' }} />

                                        <Typography p={2} variant="body1">Company</Typography>
                                        <ProfileDetailItem keyName={"Name"} keyValue={loggedInUser.company.name} />
                                        <ProfileDetailItem keyName={"catchphrase"} keyValue={loggedInUser.company.catchPhrase} />
                                        <ProfileDetailItem keyName={"bs"} keyValue={loggedInUser.company.bs} />
                                    </div>
                                </Grid>

                                {/* Address Section */}
                                <Grid item lg={8} px={5}>
                                    <Typography textAlign={'left'} variant={'h6'}>Address:</Typography>
                                    <Grid item lg={5}>
                                        <ProfileDetailItem keyName={"Street"} keyValue={loggedInUser.address.street} />
                                        <ProfileDetailItem keyName={"Suite"} keyValue={loggedInUser.address.suite} />
                                        <ProfileDetailItem keyName={"City"} keyValue={loggedInUser.address.city} />
                                        <ProfileDetailItem keyName={"Zipcode"} keyValue={loggedInUser.address.zipcode} />
                                    </Grid>

                                    <Box>
                                        {/* <iframe
                                        width="100"
                                        height="100"
                                        frameborder="0" style="border:0"
                                        src="https://www.google.com/maps/embed/v1/MAP_MODE?key=&PARAMETERS"
                                        allowfullscreen>
                                    </iframe> */}
                                        {/* <script src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap" async defer></script> */}
                                    </Box>

                                </Grid>

                            </>}
                        </Grid>
                    </Box>


                </Box>
            )}

        </>
    )
}

export default HomePage;