import React from "react";
import {Box, AppBar, IconButton, InputBase, Tabs, Toolbar, Tab, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { Container } from "@mui/system";


const Header = () => {
    return(
        <>
          <AppBar className="AppBar" sx={{boxShadow : "none" , display : "flex"  }}>
          <Container maxWidth = "xl">
          <img width={200} height={"auto"} src="http://www.coupondel.com/imgs/footer-logo-icon-white.f4a976bc89294d2affe5402dadfd5734.png" alt="#" />
            <Toolbar className="Toolbar">

                <Tabs sx={{ width : "70%" ,m : "auto" }}>
                    <Tab sx={{color : "#fff"}} label="Stores" />
                    <Tab sx={{color : "#fff"}} label="Coupons" />
                    <Tab sx={{color : "#fff"}} label="Refer & Earn" />
                </Tabs>

            </Toolbar>
           </Container> 
          </AppBar>
        </>
    )
}

export default Header;