import React, { useEffect, useState } from 'react'
import { Typography, Card } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from "axios"
import MCard from "./Card"
import Amazon from "../../images/amazon.png"
const carddata ={
  img:`${Amazon}`,
  details:"Lorem ipsum dolor sit a fugiat ratione delectus illum necessitatibus molestias, doloribus ipsum! Animi, alias.",
  discount:"8%"
}
const allcards =[
  carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,
  carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,carddata,
]

const Affiliates = () => {
  const [data ,setData]= useState([])
const cardList = allcards.map((curr,index)=>{
  return <MCard key={index} img ={carddata.img} details ={carddata.details} discount={carddata.discount} ></MCard>

 })
  return (
    <>
    <Container sx={{display:"flex",flexWrap:"wrap",mt:11,mb:10}}>
      <Typography variant='h4' sx={{display:"block",width:"100%"}}>All Stores</Typography>
      {cardList}
    </Container>
  
    </>
  )
}

export default Affiliates