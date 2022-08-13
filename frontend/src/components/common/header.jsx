import React from "react";
import {Box, AppBar, IconButton, InputBase, Tabs, Toolbar, Tab, Button, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";
import styled from "@emotion/styled";



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
          
          <img style={{margin : "0 0 0 30px"}} width={200}  src="http://www.coupondel.com/imgs/logo-icon.ee909b75407f5be0b7f5bd5a84693622.png" alt="#" />

            <Box sx={{display : {md : "flex" , sm : "flex" , xs : "none"} , gap : "4vw" , width : "auto" , margin : "auto"}}>
                <Link href="#" underline="none">
                    {"Stores"}
                </Link>
                <Link href="#" underline="none">
                    {"Coupons"}
                </Link>
                <Link href="#" underline="none">
                    {"Refer & Earn"}
                </Link>
            </Box>

            <Box  sx={{mr : 1 , display : {sm : "none" , md : "block" , xs : "none"}}}>
                
                
                <InputBase placeholder="Search..." sx={{
                    backgroundColor : "#e7e7e7" ,
                    padding : "5px 10px 5px 12px" ,
                    borderRadius : "10px 0px 0px 10px",
                    mr : 0
                    }}
                 />
                <IconButton sx={{mr : 4 ,
                 backgroundColor : "#e7e7e7" ,
                 borderRadius : "0px 10px 10px 0px" ,
                 padding : "9px 10px 8px 9px" ,
                 transform : "translateY(-0.75px)"
                 }}>
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