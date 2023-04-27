import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';


export const SideBar = ({ drawerWidth = 280 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Luciano Labudia
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'asdasdasdassdvdsfgdsfdsdsfsdf' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )
                }
            </List>

        </Drawer>

    </Box>
  )
}
