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

export default  function Filter(props) {
  const [categories ,setCategories]=useState([])
  const fetchData= async()=>{
    const responce= await axios.get(`https://fakestoreapi.com/products/categories`).catch((err)=>{
       console.log("err",err);
   })
  
   setCategories(responce.data)
}
useEffect(()=>{
  fetchData();
 },[])
  const list = () => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
    >
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem  key={text} id={text} disablePadding >
            <ListItemButton component={NavLink} to={`/shoppingcart/category/${text}`}>
              {/* <ListItemIcon>
                { <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {
        
          <Drawer open={props.active} onClick={props.toggleDrawer} anchor="bottom">
            <Typography  sx={{margin:"16px",fontSize:"1.3rem"}}>filter</Typography>
             {list()}
          </Drawer>
      }
    </>
  );
}