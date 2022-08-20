import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "./Images/logo.png";

const Login = () => {
  return (
    <>
      <Container>
        <Box>
          <img src={Logo} alt="coupodel" />
          <h1>Log in</h1>
        </Box>
      </Container>
    </>
  );
};

export default Login;
