import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import Earnings from "./Earnings";

const accountLists = [
  {
    name: "Profile",
    url: "/account",
  },
  {
    name: "My Earnings",
    url: "/account",
  },
  {
    name: "Payments",
    url: "/account",
  },
  {
    name: "My Questions and Answers",
    url: "/account",
  },
];

const UserAccount = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          height: "100vh",
          width: "90%",
          margin: "auto",
        }}
      >
        {/* ....................left box.................... */}

        <Box
          sx={{
            mt: 10,
            backgroundColor: "#d4d4d4",
            width: "20%",
            display: { md: "flex", xs: "none" },
            flexDirection: "column",
          }}
        >
          <h1>Welcome User</h1>
          <Box>
            <List>
              {accountLists.map((li, index) => {
                return (
                  <ListItemButton component={NavLink} to={li.url} key={index}>
                    {li.name}
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        </Box>

        {/* ....................right box.................... */}

        <Box
          sx={{
            mt: 10,
            backgroundColor: "gray",
            width: "80%",
          }}
        >
          <Profile />
          <Earnings />
        </Box>
      </Box>
    </>
  );
};

export default UserAccount;
