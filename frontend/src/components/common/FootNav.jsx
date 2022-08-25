import {
  Drawer,
  List,
  ListItemButton,
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DiscountIcon from "@mui/icons-material/Discount";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const FootNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerList = ["Log in", "My Profile"];
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

  const [value, setValue] = useState(0);

  return (
    <>
      <BottomNavigation
        sx={{
          padding: "10px 0px",
          gap: "0vw",
          width: "100%",
          position: "fixed",
          bottom: 0,
          mt: "auto",
          display: { xs: "flex", md: "none", sm: "none" },
          boxShadow: "0 0 10px 1px #e0e0e0",
          overflow: "auto",
          flexWrap: "wrap",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          label="Stores"
          to="/affiliates"
          icon={<ShoppingBagIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          label="Coupons"
          icon={<DiscountIcon />}
        />
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          label="Referral"
          icon={<ShareIcon />}
        />

        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
          label="Menu"
          icon={<MenuOpenIcon />}
        />
      </BottomNavigation>

      <Drawer
        anchor="right"
        open={openDrawer}
        sx={{
          display: { xs: "block", md: "none", sm: "none" },
          boxShadow: "none",
        }}
        onClose={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <List>
          {drawerLists.map((li, index) => {
            return (
              <span key={index}>
                <ListItemButton
                  component={NavLink}
                  to={li.url}
                  sx={{ width: "15rem" }}
                >
                  {li.name}
                </ListItemButton>
              </span>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default FootNav;
