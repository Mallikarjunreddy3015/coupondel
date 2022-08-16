import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import { Container, Paper } from "@mui/material";

var images = [
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/2000/140/image/5cee5d597b55471a.jpg?q=50",
  },
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d3a42152e8c1f5e5.jpeg?q=50",
  },
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/7b06cf56f376257c.jpg?q=50",
  },
];

const Home = () => {
  return (
    <>
      <Carousel
        sx={{
          mt: 11,
          mb: 10,
        }}
        interval={5000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        navButtonsAlwaysVisible
      >
        {images.map((image, index) => (
          <img
            key={index}
            style={{
              display: "block",
              margin: " 0 auto",
              width: "90vw",
              height: "50%",
            }}
            src={image.url}
            alt="pic"
          />
        ))}
      </Carousel>

      <h2 style={{ backgroundColor: "red", width: "90vw", margin: " 0 auto" }}>
        Top Stores
      </h2>
      {/* <Box
            sx={{
            display: 'flex', 
            flexWrap : "wrap",
            width : "90vw" ,
            gap : 2 ,
            m : "0 auto" ,
            '& > :not(style)': {
            mt: 2,
            width: "15vw",
            height: "15vw",
            },
        }}>
                
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>

                
            </Box>
            <h2 style={{ width : "90vw" , margin : " 0 auto"}}>New Flash Deals</h2>
            <Box
            sx={{
            display: 'flex', 
            flexWrap : "wrap",
            width : "90vw" ,
            gap : 2 ,
            m : "0 auto" ,
            '& > :not(style)': {
            mt: 2,
            width: "15vw",
            height: "15vw",
            },
        }}>
                
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>
                <Paper elevation={3} >
                    <img style={{width : "100%" , height : "100%"}} src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png" />
                </Paper>

                
            </Box> */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap:{xs:3 , sm : 5 , md: 7},
          width:"90vw",
          margin:"auto"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            height: { xs: "150px", md: "300px" },
            width: { xs: "150px", md: "300px" },
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png"
          />
        </Paper>
        <Paper
          sx={{
            height: { xs: "150px", md: "300px" },
            width: { xs: "150px", md: "300px" },
          }}
          elevation={3}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png"
          />
        </Paper>
        <Paper
          sx={{
            height: { xs: "150px", md: "300px" },
            width: { xs: "150px", md: "300px" },
          }}
          elevation={3}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png"
          />
        </Paper>
        <Paper
          sx={{
            height: { xs: "150px", md: "300px" },
            width: { xs: "150px", md: "300px" },
          }}
          elevation={3}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://asset20.ckassets.com/resources/image/stores/puma-coupons.png"
          />
        </Paper>
      </Box>
    </>
  );
};

export default Home;
