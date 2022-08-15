import {Drawer, List , ListItemButton, BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import React , {useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DiscountIcon from '@mui/icons-material/Discount';
import ShareIcon from '@mui/icons-material/Share';


const FootNav = () => {

    const [openDrawer , setOpenDrawer] = useState(false);
    const drawerList = ["Log in" , "My Profile"];
    const [value , setValue] = useState(0);

    return(
        <>
        
            <BottomNavigation
                sx={{
                width: "100%" , 
                position : "fixed" , 
                bottom : 0 ,
                mt : "auto" , 
                display : { md : "none" , sm : "none"} ,
                boxShadow : "0 0 10px 1px #e0e0e0",
                overflow : "auto"    
                    }}
                showLabels
                value={value}
                onChange={(event , newValue) => {
                    setValue(newValue)
                }} >

                
                <BottomNavigationAction
                LinkComponent={Link}
                 to="/"
                 label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Stores" icon={<ShoppingBagIcon />} />
                <BottomNavigationAction label="Coupons" icon={<DiscountIcon />} />
                <BottomNavigationAction label="Coupons" icon={<ShareIcon />} />
                
                <BottomNavigationAction onClick={()=>{
                    setOpenDrawer(!openDrawer)
                }} label="Menu" icon={<MenuOpenIcon />} />
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
                            <ListItemButton  sx={{width : "15rem"}}>
                                <li key={index}>{li}</li>
                            </ListItemButton>
                        )
                    })}
                </List>

            </Drawer>
        </>
    )
}

export default FootNav;