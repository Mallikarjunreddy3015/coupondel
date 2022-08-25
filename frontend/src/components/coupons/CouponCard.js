import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React ,{useEffect}from 'react'
import { Box } from '@mui/system';
import  axios  from 'axios';
const CouponCard = (props) => {

  return (
    <Box sx={{display:"inline-block",width:{xs:"100%",sm:"45%",md:"32%"},margin:"8px auto",height:"200px" ,transition:"all 0.3s","&:hover":{
      transform:"scale(1.05)"
    }}}>
    <Card sx={{
        border:"0.1px dashed #0A1535",
        display:"flex",
        minHeight:"200px",
        padding:"8px 16px",
        flexWrap:'wrap',
        boxShadow:"-2px 6px 6px #66b3ff41 "
    }} >
            <CardMedia
            component="img"
            sx={{
            width:"40%",
            height:"50%",
            display:"inline-block",
            objectFit:"contain"
        }}
            image={props.img}

            />
            <Box sx={{display:"inline-block", width:"60%"}}>
            <Typography sx={{color:"#343A40",padding:"6px",fontWeight:500,fontSize:"16px"}}>{`Extra ${props.discount} cashback`}</Typography>
            <Typography sx={{color:"#bbbb",padding:"2px",fontWeight:550,fontSize:"12px"}}>{`Category ${props.category}`}</Typography>
            </Box>
               <Typography sx={{color:"#66B2FF",width:"100%",fontSize:"14px",padding:"4px",fontWeight:600}}>{props.heading}</Typography>
            <Typography sx={{lineHeight:"1",color:"#343A40",width:"100%",padding:"2px",fontWeight:500,fontSize:"14px"}}>Coupon Expire {props.expiryDate}</Typography>
            <Typography sx={{color:"#343A40",width:"100%",padding:"2px",width:"60%",fontWeight:550,fontSize:"14px"}}>Redeem Now</Typography> 
        
    </Card>
     </Box>
  )
}

export default CouponCard