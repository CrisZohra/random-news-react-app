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
import { styled } from "@mui/system";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const chipStyles = [
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

const StyledStack = styled(Stack)`
  margin: 0 35px;

  @media (min-width: 576px) {
    margin: 0 120px;
  }
`;

export default function Chips() {
  return (
    <StyledStack direction="row" spacing={3} useFlexGap flexWrap="wrap">
      {chipStyles.map((style, index) => (
        <StyledNavLink
          key={index}
          to={`/posts/category/${style.label.toLowerCase()}`}
        >
          <Chip
            label={style.label}
            color="primary"
            variant="filled"
            icon={style.icon}
            sx={{
              backgroundColor: style.backgroundColor,
              color: style.color,
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          />
        </StyledNavLink>
      ))}
    </StyledStack>
  );
}
