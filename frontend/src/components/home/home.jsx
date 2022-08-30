import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import firstImage from "../../Images/first.png";
import { NavLink } from "react-router-dom";
import activeChange from "../../action/appAction";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

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

const StyledCard = styled(Card)`
  box-shadow: none;
  border-radius: 8px;
  transition: 0.25s;
  :hover {
    box-shadow: 5px 5px 15px 0.8px #1a73e83a;
    transform: scale(1.01);
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0.5rem;
  text-transform: none;
  background-color: #1a73e8;
`;

const Home = () => {
  const dispatch = useDispatch();
  const changeValue = () => {
    dispatch(activeChange(1));
  };
  return (
    <div className="">
      <Carousel
        sx={{
          mt: 15,
        }}
        interval={6000}
        animation="fade"
        indicators={true}
        stopAutoPlayOnHover
        swipe
      >
        {images.map((image, index) => (
          <Box component={NavLink} key={index} to="/">
            <Box
              component="img"
              sx={{
                display: "block",
                margin: " 0 auto",
                width: "90vw",
                height: { xs: "15vh", md: "30vh" },
              }}
              src={image.url}
              alt="pic"
            />
          </Box>
        ))}
      </Carousel>

      {/* .................................Top Stores................................... */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 20px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Top Stores</h1>

        <StyledButton
          component={NavLink}
          to="/affiliates"
          sx={{
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
          variant="contained"
          onClick={changeValue}
        >
          View All
        </StyledButton>
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
            display: { xs: "flex", md: "flex", sm: "flex" },
          },
          "&>*:nth-of-type(6)": {
            display: { xs: "flex", md: "flex", sm: "none" },
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
                height: { xs: "auto", sm: "15vw", md: "13vw" },
                width: { xs: "40vw", sm: "15vw", md: "13vw" },
                boxShadow: "none",
                borderRadius: "8px",
                transition: "0.25s",
                "&:hover": {
                  boxShadow: " 5px 5px 15px 0.8px #1a73e83a ",
                  transform: "scale(1.01)",
                },
              }}
            >
              <Box>
                <img
                  key={index}
                  style={{
                    width: "100%",
                    height: "80%",
                    transform: "scale(0.8)",
                  }}
                  src={brand.url}
                />
              </Box>
            </Card>
          );
        })}
      </Box>

      {/* ...............................Top Coupons.......................... */}

      <Box
        sx={{
          width: "90vw",
          margin: " 50px auto 20px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Top Coupons</h1>

        <StyledButton
          component={NavLink}
          to="/coupons"
          sx={{
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
          variant="contained"
          onClick={() => dispatch(activeChange(2))}
        >
          View All
        </StyledButton>
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
            display: { xs: "flex", md: "flex", sm: "flex" },
          },
          "&>*:nth-of-type(6)": {
            display: { xs: "flex", md: "flex", sm: "none" },
          },
        }}
      >
        {brandImages.map((brand, index) => {
          return (
            <StyledCard
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "auto", sm: "15vw", md: "13vw" },
                width: { xs: "150px", sm: "15vw", md: "13vw" },
              }}
            >
              <Box>
                <img
                  key={index}
                  style={{
                    width: "100%",
                    height: "80%",
                    transform: "scale(0.8)",
                  }}
                  src={brand.url}
                />
              </Box>
            </StyledCard>
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
          component={NavLink}
          onClick={() => dispatch(activeChange(3))}
          sx={{
            backgroundColor: "#e7e7e7",
            color: "#000",
          }}
          to="/refer"
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
    </div>
  );
};

export default Home;
