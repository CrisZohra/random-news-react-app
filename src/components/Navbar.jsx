import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FilterPosts from "./FilterPosts";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const StyledLogo = styled("img")(() => ({
  height: "80px",
}));
const StyledNavLink = styled(NavLink)(() => ({
  margin: "0 auto",
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1c0b52" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <StyledNavLink to="/">
            <StyledLogo src="./src/images/icon1.png" alt="what now? icon" />
          </StyledNavLink>

          <FilterPosts />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
