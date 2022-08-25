import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CouponCard from './CouponCard'
import { CouponeApi } from './CouponeApi'

const Coupons = () => {
  const renderCoupon = CouponeApi.map((curr,index)=>{
    console.log(curr)
    return<CouponCard key={index} img={curr.img} heading={curr.heading}/>
    
  })
  return (
    <>
    <Container maxWidth="xl" sx={{display:"flex",flexWrap:"wrap",mt:12,mb:10,flexDirection:"row"}}>
      <Box sx={{bgcolor:"gray",width:{xs:"100%",md:"15%"},height:{xs:"70px",md:"100vh"}}}></Box>
      <Box sx={{display:"flex",flexWrap:"wrap",width:{xs:"100%",md:"85%"}}}>{renderCoupon}</Box>
      
    </Container>
    </>
  )
}

export default Coupons