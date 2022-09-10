import { Box, Button, TextField } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Payments = () => {
  const availableBalance = 100;
  return (
    <>
      <Box
        sx={{
          mt: 10,
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "lightblue",
          }}
        >
          <h1>Available Balance</h1>
          <h3>
            <CurrencyRupeeIcon /> {availableBalance}
          </h3>
          <p>Minimum Withdraw : 50 rupees</p>
        </Box>
        <Box
          sx={{
            mt: 2,
            mb: 1,
          }}
          component="form"
        >
          <h4 style={{ margin: "0 0 10px 0" }}>Choose a Withdraw Method</h4>

          <Box sx={{ mb: 2 }}>
            <p>1. Using UPI</p>
            <TextField
              size="small"
              variant="filled"
              label="Enter your upi id"
            />
            <Button
              sx={{
                backgroundColor: "green",
                fontSize: "0.6rem",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Verify
            </Button>
          </Box>
          <Box>
            <p>2. Using paytem wallet</p>
            <TextField
              size="small"
              variant="standard"
              label="Enter your paytm no"
            />
            <Button
              sx={{
                backgroundColor: "green",
                fontSize: "0.6rem",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Verify
            </Button>
          </Box>

          <Box>
            <h4>Enter Amount</h4>
            <TextField
              variant="standard"
              label="Minimun amount is 50rs"
              size="small"
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              alert("Withdraw request submitted");
            }}
          >
            Submit
          </Button>
        </Box>

        <Box
          sx={{
            mt: 2,
          }}
        >
          <h2>All Withdrawals</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "orange",
            }}
          >
            <h4>70 Rupees</h4>
            <h5>Status : Success</h5>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payments;
