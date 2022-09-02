import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink, Router } from "react-router-dom";

const accountLists = [
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "My Earnings",
    url: "/earnings",
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

const StyledButton = styled(Button)`
  border-radius: 0.5rem;
  text-transform: none;
  background-color: #1a73e8;
  color: #fff;
`;

const Profile = () => {
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
          <Box
            sx={{
              background:
                "url(https://d8it4huxumps7.cloudfront.net/uploads/images/62ee019aceede_user_cover_image.jpeg?d=1200x321)",
              minHeight: "20vh",
              display: "flex",
              m: "",
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: "50%",
                display: "block",
                m: "4rem auto 0 auto",
              }}
              src="https://picsum.photos/200"
            />

            <StyledButton>Edit</StyledButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Profile;
