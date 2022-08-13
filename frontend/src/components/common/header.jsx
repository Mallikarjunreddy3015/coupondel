import React from "react";
import {Box, AppBar, IconButton, InputBase, Tabs, Toolbar, Tab, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from "@mui/system";


const Header = () => {
    return(
        <>
          <AppBar className="AppBar" sx={{
            backgroundColor : "#fff", 
            display : "flex" , 
            flexWrap : "wrap" , 
            flexDirection:"row" ,
            alignItems : "center",
            padding : "10px 0"
            }}>
          
          <img width={200}  src="http://www.coupondel.com/imgs/logo-icon.ee909b75407f5be0b7f5bd5a84693622.png" alt="#" />

            <Tabs sx={{width : "auto" , margin : "auto" , backgroundColor : "dodgerblue" ,}}>
                <Tab sx={{textTransform : "none" , mr : 4}} label="Stores" />
                <Tab sx={{textTransform : "none" , mr : 4}} label="Coupons" />
                <Tab  label="Refer & Earn" />
            </Tabs>

            <Box sx={{ mr : 4}}>
                <IconButton sx={{mr : 2}}>
                    <SearchIcon />
                </IconButton>

                <Button sx={{mr : 2}} variant = "outlined">Log in</Button>
                <IconButton sx={{mr : 2}}>
                    <NotificationsIcon />
                </IconButton>

                <IconButton sx={{mr : 2}}>
                    <AccountCircleIcon />
                </IconButton>

                <IconButton sx={{mr : 2}}>
                    <HelpIcon />
                </IconButton>
            </Box>
            
            
           
          </AppBar>
        </>
    )
}

export default Header;