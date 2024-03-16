import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const menus = [
        {id:1,name:"menu",to:"/menu",icon:<RestaurantMenuIcon/>},
        {id:2,name:"menu-category",to:"/menu-category",icon:<MenuBookIcon/>}
    ]
    
  return (
    <Box sx={{width:"300px",bgcolor:"#2D9596"}}>
      <List>
        {menus.map( m => (
           <Link key={m.id} to={m.to} style={{textDecoration:'none',color:'white'}}>
              <ListItem key={m.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color:'white'}}>
                    {m.icon}
                  </ListItemIcon>
                  <ListItemText primary={m.name} />
                </ListItemButton>
              </ListItem>
           </Link>  
        ))}
      </List>
      <Divider />
      <Link to={'/setting'} style={{textDecoration:'none',color:'white'}}>
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:'white'}}>
                  <SettingsSuggestIcon/>
                </ListItemIcon>
                <ListItemText primary={'Setting'} />
              </ListItemButton>
            </ListItem>
        </List>                   
      </Link>
    </Box>
  )
}

export default SideBar