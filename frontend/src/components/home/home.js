import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import { Button, Card, IconButton, InputBase } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import firstImage from "../../Images/first.png";
import { NavLink } from "react-router-dom";

var images = [
  {
    url: `${firstImage}`,
  },
  {
    url: `${firstImage}`,
  },
  {
    url: `${firstImage}`,
  },
  {
    url: `${firstImage}`,
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
        }}
        interval={5000}
        animation="slide"
        indicators={true}
        stopAutoPlayOnHover
        swipe
      >
        {images.map((image, index) => (
          <Box
            component="img"
            key={index}
            sx={{
              display: "block",
              margin: " 0 auto",
              width: "90vw",
              height: { xs: "15vh", md: "30vh" },
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
          component={NavLink}
          to="/affiliates"
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
          "&>*:nth-of-type(5)": {
            display: { xs: "none", md: "flex", sm: "flex" },
          },
          "&>*:nth-of-type(6)": {
            display: { xs: "none", md: "flex" },
          },
        }}
      >
        {brandImages.map((brand, index) => {
          return (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "150px", sm: "15vw", md: "13vw" },
                width: { xs: "150px", sm: "15vw", md: "13vw" },
                boxShadow: " 5px 0 20px 3px #e7e7e7",
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
          "&>*:nth-of-type(5)": {
            display: { xs: "none", md: "flex", sm: "flex" },
          },
          "&>*:nth-of-type(6)": {
            display: { xs: "none", md: "flex" },
          },
        }}
      >
        {brandImages.map((brand, index) => {
          return (
            <Card
              key={index}
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
