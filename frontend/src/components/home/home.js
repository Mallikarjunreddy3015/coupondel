import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  Container,
  IconButton,
  InputBase,
  Paper,
  stepClasses,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

var images = [
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/5b83b9417eeb8124.jpg?q=50",
  },
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

const brandImages = [
  {
    url: "https://asset20.ckassets.com/resources/image/stores/amazon-1602658695.png",
  },
  {
    url: "https://asset20.ckassets.com/resources/image/stores/ajio-coupons-1632200353.png",
  },
  {
    url: "https://asset20.ckassets.com/resources/image/stores/myntra-1632828693.png",
  },
  {
    url: "https://asset20.ckassets.com/resources/image/stores/1mg-coupons-1625574060.png",
  },
  {
    url: "https://asset20.ckassets.com/resources/image/stores/amazon-1602658695.png",
  },
  {
    url: "https://asset20.ckassets.com/resources/image/stores/amazon-1602658695.png",
  },
];

const Home = () => {
  return (
    <>
      <Carousel
        sx={{
          mt: 11,
          minHeight: { xs: "200px" },
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
              height: "100%",
            }}
            src={image.url}
            alt="pic"
          />
        ))}
      </Carousel>

      {/* .................................Top Stores................................... */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Top Stores</h1>

        <Button
          sx={{
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
          variant="contained"
        >
          View All
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "revert" },
          justifyContent: {
            xs: "center",
            md: "space-between",
            sm: "space-between",
          },
          gap: { xs: 3, sm: 0, md: 0 },
          width: "90vw",
          margin: "auto",
          "&>*:nth-child(5)": {
            display: { xs: "none", md: "flex", sm: "flex" },
          },
          "&>*:nth-child(6)": {
            display: { xs: "none", md: "flex" },
          },
        }}
      >
        {brandImages.map((brand, index) => {
          return (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "150px", sm: "15vw", md: "13vw" },
                width: { xs: "150px", sm: "15vw", md: "13vw" },
                boxShadow: " 0 0 20px 3px #e7e7e7",
              }}
            >
              <img
                key={index}
                style={{
                  width: "100%",
                  height: "80%",
                  transform: "scale(0.8)",
                }}
                src={brand.url}
              />
            </Card>
          );
        })}
      </Box>

      {/* ...............................Top Coupons.......................... */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Top Coupons</h1>

        <Button
          sx={{
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
          variant="contained"
        >
          View All
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "revert" },
          justifyContent: {
            xs: "center",
            md: "space-between",
            sm: "space-between",
          },
          gap: { xs: 3, sm: 0, md: 0 },
          width: "90vw",
          margin: "auto",
          "&>*:nth-child(5)": {
            display: { xs: "none", md: "flex", sm: "flex" },
          },
          "&>*:nth-child(6)": {
            display: { xs: "none", md: "flex" },
          },
        }}
      >
        {brandImages.map((brand, index) => {
          return (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "150px", sm: "15vw", md: "13vw" },
                width: { xs: "150px", sm: "15vw", md: "13vw" },
                boxShadow: " 0 0 20px 3px #e7e7e7",
              }}
            >
              <img
                key={index}
                style={{
                  width: "100%",
                  height: "80%",
                  transform: "scale(0.8)",
                }}
                src={brand.url}
              />
            </Card>
          );
        })}
      </Box>

      {/* .................................. More ways to earn............................. */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>More ways to earn</h1>
        <IconButton
          sx={{
            backgroundColor: "#e7e7e7",
            color: "#000",
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "90vw",
          height: "140px",
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d4d4d4",
        }}
      >
        images and texts
      </Box>

      {/* ..................................How Coupndel Works............................. */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>How Coupondel works</h1>
        <IconButton
          sx={{
            backgroundColor: "#e7e7e7",
            color: "#000",
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "90vw",
          height: "140px",
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#d4d4d4",
        }}
      >
        images and texts
      </Box>
      {/* ..................................Subscribe to our mail letter............................. */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 10px auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "space-between",
          alignItems: { md: "center", sm: "center" },
        }}
      >
        <h1>Subscribe to us</h1>
        <Box
          sx={{
            backgroundColor: "#d4d4d4",
            padding: "5px 0 5px 15px",
            borderRadius: "4px",
          }}
        >
          <InputBase
            placeholder="Enter your email"
            sx={{
              padding: "5px 0",
            }}
          />
          <Button>Subscribe</Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
