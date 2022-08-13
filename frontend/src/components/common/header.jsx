import React from "react";
import {Box, AppBar, IconButton, InputBase, Tabs, Toolbar, Tab, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { Container } from "@mui/system";


const Header = () => {
    return(
        <>
          <AppBar className="AppBar" sx={{backgroundColor : "#fff", display : "flex"  }}>
          <Container maxWidth = "xl">
          <img  width={200}  src="http://www.coupondel.com/imgs/logo-icon.ee909b75407f5be0b7f5bd5a84693622.png" alt="#" />
            <Toolbar className="Toolbar">

                <Tabs sx={{ width : "70%" ,m : "auto" }}>
                    <Tab label="Stores" />
                    <Tab label="Coupons" />
                    <Tab label="Refer & Earn" />
                </Tabs>

            </Toolbar>
           </Container> 
          </AppBar>
        </>
    )
}

export default Header;