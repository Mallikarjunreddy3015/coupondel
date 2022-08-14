import { AppBar, IconButton, Toolbar , Link, Drawer, List , ListItemButton } from "@mui/material";
import React , {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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
                    gap : "10vw" ,
                    alignItems : "center",
                    justifyContent : "center"
                }}> 


                <Link href="#" underline="none">
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton>
                        S
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton>
                        C
                    </IconButton>
                </Link>
                <Link href="#" underline="none">    
                    <IconButton>
                        R
                    </IconButton>
                </Link>    
                    <IconButton onClick={() => {
                    setOpenDrawer(!openDrawer)
                }}>
                        <MenuOpenIcon />
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