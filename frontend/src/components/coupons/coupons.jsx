import { Box, ButtonGroup, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CouponCard from "./CouponCard";
import { CouponeApi } from "./CouponeApi";

const Coupons = () => {
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
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: 12,
          mb: 10,
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: { xs: "100%", md: "15%" },
            height: { xs: "50px", md: "auto" },
            alignItems: "center",
          }}
        >
          {/* <Typography
            variant="p"
            sx={{ width: { xs: "50%" }, textAlign: "center", fontSize: "24px",fontWeight:"550" }}
          >
            Brands
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            variant="p"
            sx={{ width: { xs: "49%" }, textAlign: "center", fontSize: "24px",fontWeight:"550" }}
          >
            sort
          </Typography> */}
          <ButtonGroup>
            
          </ButtonGroup>
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
