import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useState } from "react";
import { List, ListItem, styled } from "@mui/material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import titlePic from "/title4.png";
import Paper from "@mui/material/Paper";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DirectionsIcon from "@mui/icons-material/Directions";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const StyledLogo = styled("img")({
  width: "200px",
});

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setIsOpen((open) => !open)}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Paper sx={{ height: "100%", backgroundColor: "#dea883" }}>
          <StyledLogo src={titlePic} alt="what now? logo" />

          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="HOME" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/weather");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <WbSunnyIcon />
                </ListItemIcon>
                <ListItemText primary="Weather" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/traffic");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <DirectionsIcon />
                </ListItemIcon>
                <ListItemText primary="Traffic" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/education");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Education" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/jobs");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/selling");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Selling" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/entertainment");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <TagFacesIcon />
                </ListItemIcon>
                <ListItemText primary="Entertainment" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/events");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/social");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <Diversity3Icon />
                </ListItemIcon>
                <ListItemText primary="Social" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/posts/other");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <AllInclusiveIcon />
                </ListItemIcon>
                <ListItemText primary="Other" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/about-us");
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>
                  <PeopleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="ABOUT" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </SwipeableDrawer>
    </>
  );
}
