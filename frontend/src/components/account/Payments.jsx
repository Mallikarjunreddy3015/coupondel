import { Box } from "@mui/material";
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
        <Box>
          <h4>Choose a Withdraw Method</h4>
        </Box>
      </Box>
    </>
  );
};

export default Payments;
