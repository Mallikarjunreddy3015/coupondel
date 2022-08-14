import { AppBar, IconButton, Toolbar , Link, Drawer, List , ListItemButton } from "@mui/material";
import React , {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';

const FootNav = () => {

    const [openDrawer , setOpenDrawer] = useState(false);
    const drawerList = ["Log in" , "My Profile"]


    return(
        <>
            <AppBar position="fixed"  color="primary"
                sx={{ top : "auto", bottom : 0 ,
                display : {xs : "block" , md : "none" , sm : "none"},
                boxShadow : "none" ,
                
                }}
            >
                <Toolbar sx={{
                    display : "flex",
                    gap : "6vw" ,
                    alignItems : "center",
                    justifyContent : "center",
                    overflow : "auto"
                }}> 


                <Link href="#" underline="none" >
                    <IconButton sx={{fontSize : "1rem" , display : "flex" , flexDirection : "column" , color : "#fff"}}>
                        <HomeIcon />
                        <p>Home</p>
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton sx={{fontSize : "1rem" , display : "flex" , flexDirection : "column" , color : "#fff"}}>
                        <ShoppingBagIcon />
                        <p>Stores</p>
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton sx={{fontSize : "1rem" , display : "flex" , flexDirection : "column" , color : "#fff"}}>
                        <SellIcon />
                        <p>Coupons</p>
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton sx={{fontSize : "1rem" , display : "flex" , flexDirection : "column" , color : "#fff"}}>
                        <ShareIcon />
                        <p>Refer</p>
                    </IconButton>
                </Link>    
                    <IconButton sx={{fontSize : "1rem" , display : "flex" , flexDirection : "column" , color : "#fff"}} onClick={() => {
                    setOpenDrawer(!openDrawer)
                }}>
                        <MenuOpenIcon />
                        <p>Menu</p>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={openDrawer} sx={{
                display : {xs : "block" , md : "none" , sm : "none"},
                boxShadow : "none" ,
                }}
                onClose={() => {
                    setOpenDrawer(!openDrawer)
                }}
                >

                <List>
                    {drawerList.map((li)=>{
                        return(
                            <ListItemButton sx={{width : "15rem"}}>
                                {li}
                            </ListItemButton>
                        )
                    })}
                </List>

            </Drawer>
        </>
    )
}

export default FootNav;