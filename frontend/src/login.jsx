import { Button, IconButton, InputBase, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Logo from "./Images/logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate("/");
  }

  return (
    <>
      <Container
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
        }}
      >
        <Box
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
            draggable="false"
          />

          <IconButton
           
            onClick={handleClick}
            sx={{
              position: 'absolute',
              mt: 6,
              mb: 3,
              ml:20,
            }}
          >

            <CloseIcon />

          </IconButton>

        </Box>


        <Box
          component="form"
          autoComplete="off"
          sx={{
            height: "70vh",
            padding: { md: "50px", xs: "20px" },
            boxShadow: "0 0 15px 10px #e7e7e7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "4px",
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
            Sign in to your account
          </p>
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
          <Box
            sx={{
              color: "dodgerblue",
              display: "block",
              width: "130px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            component={NavLink}
            to="/"
          >
            Forgot password
          </Box>
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
          <p>Don't have an Account ? </p>
          <Box sx={{ color: "blue", ml: 1 }} to="/signup" component={NavLink}>
            Sign up
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
