import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FilterPosts from "./FilterPosts";
import { styled } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router-dom";
import icon from "/icon1.png";
import SidebarMenu from "./SidebarMenu";

const StyledLogo = styled("img")(() => ({
  height: "80px",
}));

const StyledNavLink = styled(NavLink)(() => ({
  margin: "0 auto",
}));

export default function Navbar() {
  const location = useLocation();
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#1c0b52" }}>
        <Toolbar>
          <SidebarMenu />
          <StyledNavLink to="/">
            <StyledLogo src={icon} alt="what now? icon" />
          </StyledNavLink>
          {location.pathname === "/" ? <FilterPosts /> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
