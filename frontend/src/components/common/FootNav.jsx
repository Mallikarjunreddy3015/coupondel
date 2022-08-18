import {Drawer, List , ListItemButton, BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import React , {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DiscountIcon from '@mui/icons-material/Discount';
import ShareIcon from '@mui/icons-material/Share';
import  {makeStyles}  from '@mui/styles';


const FootNav = () => {

    const [openDrawer , setOpenDrawer] = useState(false);
    const drawerList = ["Log in" , "My Profile"];
    const [value , setValue] = useState(0);

    return(
        <>
        
            <BottomNavigation
       
                sx={{
                  padding:"10px",
                gap:"0vw",
                width: "100%" , 
                position : "fixed" , 
                bottom : 0 ,
                mt : "auto" , 
                display : {xs : "flex" , md : "none" , sm : "none"} ,
                boxShadow : "0 0 10px 1px #e0e0e0" ,
                overflow : "auto" ,
                    }}
                showLabels
                value={value}
                onChange={(event , newValue) => {
                    setValue(newValue)
                }} >

                
                <BottomNavigationAction
                component={Link}
                to="www.google.com"
                 label="Home" icon={<HomeIcon sx={{minWidth : "5px"  ,fontSize: "6vw"}} />} />
                <BottomNavigationAction label="Stores" icon={<ShoppingBagIcon sx={{minWidth : "5px", fontSize: "6vw" } } />} />
                <BottomNavigationAction label="Coupons" icon={<DiscountIcon sx={{minWidth : "5px" , fontSize: "6vw"}} />} />
                <BottomNavigationAction label="Referral" icon={<ShareIcon sx={{minWidth : "5px" , fontSize: "6vw"}} />} />
                
                <BottomNavigationAction onClick={()=>{
                    setOpenDrawer(!openDrawer)
                }} label="Menu" icon={<MenuOpenIcon sx={{minWidth : "5px" , fontSize: "6vw"}} />} />


            </BottomNavigation>
            
           

            <Drawer anchor="right" open={openDrawer} sx={{
           
                display : {xs : "block" , md : "none" , sm : "none"},
                boxShadow : "none" ,
                }}
                onClose={() => {
                    setOpenDrawer(!openDrawer)
                }}
                >

                <List>
                    {drawerList.map((li , index)=>{
                        return(
                            <span key={index}>
                            <ListItemButton  sx={{width : "15rem"}}>
                                {li}
                            </ListItemButton>
                            </span>
                        )
                    })}
                </List>

            </Drawer>
        </>
    )
}

export default FootNav;