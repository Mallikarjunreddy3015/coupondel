import { Box, List, ListItemButton } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

const accountLists = [
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "My Earnings",
    url: "/profile",
  },
  {
    name: "Payments",
    url: "/profile",
  },
  {
    name: "My Questions and Answers",
    url: "/profile",
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Welcome Bhadwa</h1>
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
          <h1>Welcome Bhadwa</h1>
        </Box>
      </Box>
    </>
  );
};

export default UserAccount;
