import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrands } from '../../action/couponAction';

export default  function Brands() {
const dispatch = useDispatch()
const brandState = useSelector((state)=>state.coupon.ActiveStateBrand)
  const Brands = [
    {
      id:1,
      BrandName:"Zomota"
    },
    {
      id:1,
      BrandName:"Swiggy"
    },
    {
      id:1,
      BrandName:"Myntra"
    },
    
  ]
  

  const list = () => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
    >
      <Divider />
      <List>
        {Brands.map((curr,index) => (
          <ListItem  key={index} id={curr.id} disablePadding >
            <ListItemButton component={NavLink} to={`/coupons`}>
              {/* <ListItemIcon>
                { <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={curr.BrandName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
          <Drawer open={brandState} onClick={()=>{dispatch(toggleBrands(!brandState))}} anchor="bottom" PaperProps={{ style: { height: "60vh" ,borderRadius:"16px 16px 0 0"} }}>
            <Typography  sx={{margin:"16px",fontSize:"1.3rem"}}>Select Brand</Typography>
             {list()}
          </Drawer>
          <Box>
            {list()}
          </Box>
    </>
  );
}