import React from "react";
import {Box, AppBar, IconButton, InputBase, Tabs, Toolbar, Tab, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";
import styled from "@emotion/styled";


const StyledTab = styled(Tab)({
    textTransform : "none" 
})

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
          
          <img style={{margin : "0 0 0 20px"}} width={200}  src="http://www.coupondel.com/imgs/logo-icon.ee909b75407f5be0b7f5bd5a84693622.png" alt="#" />

            <Tabs sx={{width : "auto" , margin : "auto" ,display : {xs : "none" , sm : "block"}}}>
                <StyledTab sx={{mr : 4}} label="Stores" />
                <StyledTab sx={{mr : 4}} label="Coupons" />
                <StyledTab label="Refer & Earn" />
            </Tabs>

            <Box  sx={{mr : 1 , display : {sm : "none" , md : "block" , xs : "none"}}}>
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

                
            </Box>
            <IconButton sx={{ml : "auto", mr : 3 , display : {xs : "block" ,  md : "none"}}}>
                    <MenuIcon />
            </IconButton>
            
            
           
          </AppBar>
        </>
    )
}

export default Header;