import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link"

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Images/logo.png";
import {  NavLink } from "react-router-dom";
import activeChange from "../../action/appAction";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  border-radius: 3rem;
  text-transform: none;
`;

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSearch, setOpenSearch] = useState(null);

  const dispatch = useDispatch();

  const changeValue = () => {
    dispatch(activeChange(0));
  };

  const drawerLists = [
    {
      name: "My Account",
      url: "/account",
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

  const handleOpenSearch = () => {
    console.log("clicked");
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
        {/* <IconButton
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
        </IconButton> */}

        <NavLink className={"ignoreActive"} onClick={changeValue} to="/">
          <Box
            component="img"
            sx={{
              marginLeft: "3vw",
              width: { md: 150, xs: 150 },
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
            className="navTab"
            to="/"
            id="0"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              padding: "15px",
            }}
            // onClick={handleShadow}
          >
            {"Home"}
          </NavLink>
          <NavLink
            className="navTab"
            to="/affiliates"
            id="1"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              padding: "15px",
              transition: "all 0.6s",
            }}
            // onClick={handleShadow}
          >
            {"Stores"}
          </NavLink>
          <NavLink
            id="2"
            className="navTab"
            to="/coupons"
            underline="none"
            style={{
              color: "#1976d2",
              padding: "15px",
              transition: "all 0.6s",
            }}
          >
            {"Coupons"}
          </NavLink>
          <NavLink
            to="/refer"
            className="navTab"
            id="3"
            underline="none"
            style={{
              color: "#1976d2",
              padding: "15px",
              transition: "all 0.6s",
            }}
          >
            {"Refer & Earn"}
          </NavLink>
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

          <StyledButton
            component={NavLink}
            to="/login"
            sx={{ mr: 2, textTransform: "none" }}
            variant="outlined"
          >
            Log in
          </StyledButton>

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

        <IconButton
          onClick={handleOpenSearch}
          sx={{ ml: "auto", display: { xs: "block", md: "none" } }}
        >
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
          <MenuItem component={NavLink} to="/account/profile" onClick={handleClose}>
            My Account
          </MenuItem>
          <MenuItem component={Link} href="http://www.coupondel.com/" onClick={handleClose}>
            About
          </MenuItem>
          <MenuItem component={NavLink} to="/login" onClick={handleClose}>
            Log in
          </MenuItem>
        </Menu>
      </AppBar>
      <Box sx={{width:"100%",height:"0px" ,mt:11}}/>
    </>
  );
};

export default Header;
