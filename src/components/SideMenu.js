import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

// Side Navigation
const SideMenu = ({pageName, setPageName}) => {

    const menuItems = ['Profile', 'Posts', 'Gallery', 'ToDo']
    
    const drawerWidth = '18%';
    const selectedItemStyle = { color: 'white' }

    return (
        < Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: '#5d60fc',
                    justifyContent: 'center',
                    borderRadius: 10,
                    margin: '2em'
                },
            }
            }
            variant="permanent"
        >
            <List>
                {/* Mapping menu items */}
                {menuItems.map(text => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton sx={{ borderBottom: '1px solid white', margin: '1em 2em' }} onClick={() => { setPageName(text) }}>
                            <ListItemText sx={text == pageName ? selectedItemStyle : {}} primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer >
    )
}

export default SideMenu;