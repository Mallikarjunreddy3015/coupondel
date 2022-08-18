import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Icon, Link } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';

const MCard=(props)=> {
  return (
    <>
 <Card id='card' sx={{ height:"150px" , width:{xs:"40%",sm:"18%"} ,maxWidth: 320 ,display:"inline-block",margin:"16px auto",objectFit:"fill" ,padding:"5px 0",
             borderRadius:"12px",
             boxShadow:"0px 2px 8px gray",
             "&:hover":{
               position:"relative",
               transition:"all 0.3s ease-in-out",
               transform:"scale(1.1)",
               backgroundColor:"white",
               boxShadow:"-2px -2px 8px gray",
              }
              
              }}>
      <CardActionArea href='https://google.com'>
        <div>
           <CardMedia
          component="img"
          height="70"
          width="100"
          image={props.img}
          alt="green iguana"
          sx={{objectFit:"contain",padding:"10px"}}
        />  
        </div>
        <Button variant='contained' color='secondary' sx={{fontSize:"min(calc(0.8vw + 0.4rem),1rem)",width:"90%",textTransform:"capitalize",margin:"auto",display:"block"}}>{`You can save ${props.discount}`}</Button>   
      </CardActionArea>
    </Card>
    </>
   
  );
}
export default MCard;