import { useState } from "react";
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
  const [openSearch, setOpenSearch] = useState(null);
  const [value,setValue]= useState(0);
  const RemoveActive=(event)=>{
      event.currentTarget.classList.remove("active")
      console.log("removing");
  }
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

        <NavLink to="/" className={"ignoreActive"} >
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
            id="0"
            style={{ textDecoration: "none", color: "#1976d2",padding:"15px" }}
            // onClick={handleShadow}
          >
            {"Stores"}
          </NavLink>
          <NavLink id="1" to="/coupons" underline="none" style={{ color: "#1976d2",padding:"15px" }}>
            {"Coupons"}
          </NavLink>
          <NavLink to="/refer" id="2" underline="none" style={{ color: "#1976d2",padding:"15px" }}>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Header;
