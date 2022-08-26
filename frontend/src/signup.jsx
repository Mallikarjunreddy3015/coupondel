import { Button, IconButton, InputBase, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "./Images/logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Signup = () => {
  return (
    <>
      <Container
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "45px",
            mt: 3,
            mb: 3,
          }}
          component="img"
          src={Logo}
          alt="coupodel"
          draggable="false"
        />
        <Box
          component="form"
          autoComplete="off"
          sx={{
            height: "90vh",
            padding: { md: "50px", xs: "20px" },
            boxShadow: "0 0 15px 10px #e7e7e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "#3b3b3b",
              marginBottom: "17px",
              fontWeight: "bolder",
              fontSize: "1.4rem",
            }}
          >
            Create your account
          </p>
          <TextField
            sx={{
              "&:hover": {
                outline: "none",
                border: "none",
              },
            }}
            type="text"
            label="Full name"
            required
          />
          <TextField
            sx={{
              "&:hover": {
                outline: "none",
                border: "none",
              },
            }}
            type="email"
            label="Email or phone"
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            required
          />
          <TextField label="Confirm Password" variant="outlined" required />
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "dodgerblue",
              "&:hover": {
                backgroundColor: "dodgerblue",
              },
            }}
            type="submit"
            variant="contained"
            size="large"
            disableElevation
          >
            Continue
          </Button>
          <hr />

          <Button
            disableElevation
            variant="contained"
            startIcon={<GoogleIcon />}
            size="large"
            sx={{
              textTransform: "none",
              backgroundColor: "dodgerblue",
              "&:hover": {
                backgroundColor: "dodgerblue",
              },
            }}
          >
            Sign up using Google
          </Button>
          <Button
            disableElevation
            variant="contained"
            startIcon={<FacebookRoundedIcon />}
            size="large"
            sx={{
              textTransform: "none",
              backgroundColor: "dodgerblue",
              "&:hover": {
                backgroundColor: "dodgerblue",
              },
            }}
          >
            Sign up using Facebook
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <p>Already have an Account ?</p>
          <Box sx={{ color: "blue", ml: 1 }} to="/login" component={NavLink}>
            Log in
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
