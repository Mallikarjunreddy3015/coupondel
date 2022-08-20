import React, { useState } from "react";
import {
  Box,
  AppBar,
  IconButton,
  InputBase,
  Drawer,
  Button,
  Link,
  List,
  ListItemButton,
  Menu,
  MenuItem,
  stepClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const drawerList = ["Log in", "My Profile", "About Us"];

  const drawerLists = [
    {
      name: "My Profile",
      url: "#",
    },
    {
      name: "About Us",
      url: "coupondel.com",
    },
    {
      name: "Log in",
      url: "/login",
    },
  ];

  const opened = Boolean(openMenu);
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <AppBar
        className="AppBar"
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px 0",
          boxShadow: "0 0 10px 1px #e0e0e0",
        }}
      >
        <IconButton
          sx={{
            mr: 1,
            ml: 3,
            mt: 1,
            display: { xs: "none", sm: "block", md: "block" },
          }}
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
        >
          <MenuIcon />
        </IconButton>

        <NavLink to="/">
          <Box
            component="img"
            sx={{
              marginLeft: "10px",
              width: { md: 200, xs: 150 },
            }}
            src={Logo}
            alt="#"
          />
        </NavLink>

        <Box
          sx={{
            display: { md: "flex", sm: "flex", xs: "none" },
            gap: "4vw",
            width: "auto",
            margin: "auto",
          }}
        >
          <NavLink
            to="/affiliates"
            style={{ textDecoration: "none", color: "black" }}
          >
            {"Stores"}
          </NavLink>
          <Link href="#" underline="none">
            {"Coupons"}
          </Link>
          <Link href="#" underline="none">
            {"Refer & Earn"}
          </Link>
        </Box>

        <Box sx={{ mr: 1, display: { sm: "none", md: "flex", xs: "none" } }}>
          <Box
            sx={{
              backgroundColor: "#e7e7e7",
              padding: " 0 0 0 15px ",
              mr: 3,
              borderRadius: "4px",
            }}
          >
            <InputBase placeholder="Search" />
            <IconButton sx={{ borderRadius: "0px" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Button
            component={NavLink}
            to="/login"
            sx={{ mr: 2 }}
            variant="outlined"
          >
            Log in
          </Button>

          <IconButton sx={{ mr: 0 }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={handleClick} sx={{ mr: 2 }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>

        <Drawer
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(() => {
              return !openDrawer;
            });
          }}
        >
          <List>
            {drawerLists.map((li, index) => {
              return (
                <p key={index}>
                  <ListItemButton
                    component={NavLink}
                    to={li.url}
                    sx={{ width: "15rem" }}
                  >
                    {li.name}
                  </ListItemButton>
                </p>
              );
            })}
          </List>
        </Drawer>

        <IconButton sx={{ ml: "auto", display: { xs: "block", md: "none" } }}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{ display: { xs: "block", md: "none" } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton
          onClick={handleClick}
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={openMenu}
          open={opened}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Header;
