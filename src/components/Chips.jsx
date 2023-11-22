import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DirectionsIcon from "@mui/icons-material/Directions";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export default function ClickableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const chipStyles = [
    {
      label: "Weather",
      backgroundColor: "#dc6a36",
      color: "#fff9e9",
      icon: <WbSunnyIcon />,
    },
    {
      label: "Traffic",
      backgroundColor: "#81b29a",
      color: "#fff9e9",
      icon: <DirectionsIcon />,
    },
    {
      label: "Education",
      backgroundColor: "#3d405b",
      color: "#fff9e9",
      icon: <SchoolIcon />,
    },
    {
      label: "Jobs",
      backgroundColor: "#e09f3e",
      color: "#fff9e9",
      icon: <WorkIcon />,
    },
    {
      label: "Selling",
      backgroundColor: "#335c67",
      color: "#fff9e9",
      icon: <StorefrontIcon />,
    },
    {
      label: "Entertainment",
      backgroundColor: "#9e2a2b",
      color: "#fff9e9",
      icon: <TagFacesIcon />,
    },
    {
      label: "Events",
      backgroundColor: "#540b0e",
      color: "#fff9e9",
      icon: <CalendarMonthIcon />,
    },
    {
      label: "Social",
      backgroundColor: "#a78a7f",
      color: "#fff9e9",
      icon: <Diversity3Icon />,
    },
    {
      label: "Other",
      backgroundColor: "#b56576",
      color: "#fff9e9",
      icon: <AllInclusiveIcon />,
    },
  ];

  return (
    <Stack direction="row" spacing={3} className="chips">
      {chipStyles.map((style, index) => (
        <NavLink key={index} to={`/posts/${style.label.toLowerCase()}`}>
          <Chip
            label={style.label}
            color="primary"
            variant="filled"
            icon={style.icon}
            style={{
              backgroundColor: style.backgroundColor,
              color: style.color,
              fontSize: "16px",
              fontFamily: "monospace",
            }}
            onClick={handleClick}
          />
        </NavLink>
      ))}
    </Stack>
  );
}
