import { Button, IconButton, InputBase, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "./Images/logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Login = () => {
  return (
    <>
      <Container
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "45px",
            mt: 6,
            mb: 3,
          }}
          component="img"
          src={Logo}
          alt="coupodel"
        />
        <Box
          component="form"
          autoComplete="off"
          sx={{
            height: "70vh",
            padding: "50px",
            boxShadow: "0 0 15px 10px #e7e7e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1>Log in</h1>
          <TextField
            sx={{
              "&:hover": {
                outline: "none",
                border: "none",
              },
            }}
            label="Email or phone"
            required
          />
          <TextField label="Password" variant="outlined" />
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
            Login using Google
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
            Login using Facebook
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <p>Don't have an Account ?</p>
          <Box sx={{ color: "blue" }} to="/" component={NavLink}>
            Sign up
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
