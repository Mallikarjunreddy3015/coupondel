import { Box, Divider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CouponCard from './CouponCard'
import { CouponeApi } from './CouponeApi'

const Coupons = () => {
  const renderCoupon = CouponeApi.map((curr,index)=>{
    return<CouponCard key={index} img={curr.img} discount={curr.discount} heading={curr.heading} expiryDate={curr.expiryDate} category={curr.category}/>
    
  })
  return (
    <>
    <Container maxWidth="xl" sx={{display:"flex",flexWrap:"wrap",mt:12,mb:10,flexDirection:"row"}}>
      <Box sx={{display:"flex",flexWrap:"wrap", width:{xs:"100%",md:"15%"},height:{xs:"70px",md:"auto"}}}>
        <Typography xs={{width:{sx:"50%"}}}>categories</Typography>
        <Divider orientation='vertical'/>
        <Typography xs={{width:{sx:"50%"},display:"block"}}>filter</Typography>
      </Box>
      <Box sx={{display:"flex",flexWrap:"wrap",width:{xs:"100%",md:"85%"}}}>{renderCoupon}</Box>
      
    </Container>
    </>
  )
}

export default Coupons