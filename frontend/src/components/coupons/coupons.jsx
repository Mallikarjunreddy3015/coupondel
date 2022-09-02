import { Button, Divider, Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import ButtonGroup  from "@mui/material/ButtonGroup";
import { Container, display } from "@mui/system";
import React,{useState} from "react";
import CouponCard from "./CouponCard";
import { CouponeApi } from "./CouponeApi";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import Brands from "./Brands";
import Filter from "./Filter"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBrands, toggleFilter } from "../../action/couponAction";
const Coupons = () => {
  const activeState = useSelector((state)=>state.coupon.ActiveStateFilter)
  const brandState = useSelector((state)=>state.coupon.ActiveStateBrand)
  const dispatch = useDispatch();
  
  const renderCoupon = CouponeApi.map((curr, index) => {
    return (
      <CouponCard
        key={index}
        img={curr.img}
        discount={curr.discount}
        heading={curr.heading}
        expiryDate={curr.expiryDate}
        category={curr.category}
      />
    );
  });
  return (
    <>
    <Box
          sx={{
            display: {xs:"flex",md:"none"},
            // flexWrap: "wrap",
            width: { xs: "100vw", md: "100%" },
            height: { xs: "50px", md: "auto" },
            alignItems: "center",
            bgcolor:"white",
            mt:9,
            // borderRadius:"16px",
            padding:"14px"
          }}
        >
          <Button
            sx={{ width: { xs: "33%"},color:"#343A40", textAlign: "center",textTransform:"uppercase",fontSize: "12px",fontWeight:"450" ,"&:hover":{bgcolor:"transparent"}}}
            startIcon ={<KeyboardArrowDownIcon/>}
            onClick={()=>{dispatch(toggleBrands(!brandState))}}
          >
            Select Brand
          </Button>
          <Divider orientation="vertical" />
          <Button
            sx={{ width: { xs: "33%" },color:"#343A40", textAlign: "center", fontSize: "12px",fontWeight:"500","&:hover":{bgcolor:"transparent"} }}
            startIcon={<AddIcon/>}
          >
           Upload your
          </Button>
          <Divider orientation="vertical" />
          <Button
            sx={{ width: { xs: "33%" },color:"#343A40", textAlign: "center", fontSize: "12px",fontWeight:"500","&:hover":{bgcolor:"transparent"} }}
            startIcon={<TuneIcon/>}
            onClick={()=>{dispatch(toggleFilter(!activeState))}}
          >
            FILTER
          </Button>
        </Box>
       
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 10,
          mt:{xs:0,md:11},
          flexDirection: "row",
        }}
      >
        <Box sx={{width:"15%",position:"sticky",top:"0",display:{xs:"none",md:"block"}}}>
        <Button
            variant="contained"
            sx={{textAlign: "center",textTransform:"capitalize",width:"100%",fontSize: "16px",fontWeight:"500",bgcolor:"#ffff",color:"black",margin:" 8px 0px" }}
            startIcon={<AddIcon/>}
          >
           Upload your
          </Button>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Filter/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Select Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Brands/>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: { xs: "100%", md: "85%" },
          }}
        >
          {renderCoupon}
        </Box>
      </Container>
    </>
  );
};

export default Coupons;
