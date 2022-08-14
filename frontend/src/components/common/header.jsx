import React , {useState} from "react";
import {Box, AppBar, IconButton, InputBase, Drawer, Button, Link , List , ListItemButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from "@mui/system";
import styled from "@emotion/styled";




const Header = () => {

    const [openDrawer , setOpenDrawer] = useState(false)

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

            <Box  sx={{mr : 1 , display : {sm : "none" , md : "flex" , xs : "none"}}}>
                
                
                <Box sx={{backgroundColor : "#e7e7e7" , padding : " 0 0 0 15px " , mr : 3 , borderRadius : "4px"}}>
                    <InputBase placeholder="Search" />
                    <IconButton sx={{borderRadius : "0px"}}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                <Button sx={{mr : 2}} variant = "outlined">Log in</Button>
                <IconButton sx={{mr : 2}}>
                    <NotificationsIcon />
                </IconButton>

                <IconButton onClick={() => {
                setOpenDrawer(!openDrawer)
                }} sx={{mr : 2}}>
                    <AccountCircleIcon />
                </IconButton>

                
            </Box>
            
            

            <Drawer open={openDrawer}
                onClose = {() => {
                setOpenDrawer(() => {
                    return (!openDrawer)
                })
                }}
                >
                <List>
                    <ListItemButton sx={{width : "15rem" , textAlign : "center"}}>
                        Log in
                    </ListItemButton>
                </List>
            </Drawer>
            
            <IconButton sx={{ml : "auto", mr : 3 , display : {xs : "block" ,  md : "none"}}} 
            onClick={() => {
                setOpenDrawer(!openDrawer)
            }}>
                <AccountCircleIcon />
            </IconButton>
            
          </AppBar>
        </>
    )
}

export default Header;