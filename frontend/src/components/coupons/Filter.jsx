import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {toggleFilter} from "../../action/couponAction"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default  function Filter(props) {
  // const [categories ,setCategories]=useState([])
  const activeState = useSelector((state)=>state.coupon.ActiveStateFilter)
  const dispatch = useDispatch()
  const Brands = [
    {
      id:1,
      by:"Trainding"
    },
    {
      id:2,
      by:"Old to New"
    },
    {
        id:3,
        by:"New to Old"
      },
    {
      id:4,
      by:"Available for you"
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
            <ListItemButton component={NavLink} to={`/coupons/`}>
              {/* <ListItemIcon>
                { <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={curr.by} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
          <Drawer open={activeState} onClick={()=>{ dispatch(toggleFilter(!activeState));}} anchor="bottom" PaperProps={{ sx:{ height: "40vh" ,borderRadius:"16px 16px 0 0"} }}>
            <Typography  sx={{margin:"16px",fontSize:"1.3rem"}}>Filter</Typography>
             {list()}
          </Drawer>
          <Box sx={{display:{xs:"none",md:"block"}}}>
            {list()}
          </Box>
    </>
  );
}