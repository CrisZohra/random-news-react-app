import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Typography className="footer">
      <hr />
      <p className="footer">© ZoCris CodeCraft | 2023</p>
      <NavLink to="/about">
        <img
          src="org2.png"
          alt="ZoCri CodeCraft organisation logo"
          className="organisation-logo"
        />
      </NavLink>
    </Typography>
  );
}

export default Footer;
