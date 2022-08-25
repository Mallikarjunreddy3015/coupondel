import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React ,{useEffect}from 'react'
import { Box } from '@mui/system';
import  axios  from 'axios';
const CouponCard = (props) => {

  return (
    <Box sx={{display:"inline-block",width:{xs:"100%",sm:"45%",md:"30%"},margin:" 8px auto"}}>
    <Card sx={{
        border:"0.1px dashed #0A1535",
        display:"flex",
        height:"200px",
        padding:"15px 30px",
        flexWrap:'wrap',
    }} >
            <CardMedia
            component="img"
            sx={{
            width:"40%",
            height:"100%",
            display:"inline-block",
            objectFit:"contain"
        }}
            image={props.img}

            />
            <Box sx={{display:"inline-block",width:"60%"}}>
               <Typography sx={{height:"50%",color:"#66B2FF",padding:"8px",fontWeight:600}}>{props.heading}</Typography>
               <Typography sx={{height:"50%",color:"#0A1535",padding:"8px"}}>Redeem Now</Typography>
            </Box>
    </Card> </Box>
  )
}

export default CouponCard