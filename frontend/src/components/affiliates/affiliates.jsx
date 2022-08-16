import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
//import axios from "axios"

const Affiliates = () => {
  const [data ,setData]= useState([])
    const fetchData= async()=>{
      const responce = await axios.get(`https://fakestoreapi.com/products`).catch((err)=>{
          console.log("err",err);
      })
      dispatch(setData(responce.data))
      console.log(responce)
  }
useEffect(()=>{
  fetchData();
},[]);
  return (
    <>
    
    </>
  )
}

export default Affiliates