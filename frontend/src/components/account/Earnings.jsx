import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink, Router } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const orderList = [
  {
    orderName: "boat headphone",
    orderStore: "Amazon",
    cashBack: "25",
  },
  {
    orderName: "boat headphone",
    orderStore: "Amazon",
    cashBack: "25",
  },
  {
    orderName: "boat headphone",
    orderStore: "Amazon",
    cashBack: "25",
  },
  {
    orderName: "boat headphone",
    orderStore: "Amazon",
    cashBack: "25",
  },
];

const Earnings = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",

            padding: "10px",
            margin: "20px 0px ",
            mb: 8,
          }}
        >
          <h1>Total Cashback Earned</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              mt: 2,
            }}
          >
            <h2>
              {" "}
              <CurrencyRupeeIcon /> 100
            </h2>
            <Button
              sx={{
                backgroundColor: "green",
                fontSize: "0.6rem",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
              component={NavLink}
              to="/account/payments"
            >
              Withdraw
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <h2>My Orders</h2>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              mb: 10,
            }}
          >
            {orderList.map((order, index) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "orange",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                  key={index}
                >
                  <h3>{order.orderName}</h3>
                  <p>{order.orderStore}</p>
                  <CurrencyRupeeIcon /> {order.cashBack}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Earnings;
