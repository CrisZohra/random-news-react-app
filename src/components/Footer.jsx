import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography className="footer">
      <hr />
      <p className="footer">© ZoCris CodeCraft | 2023</p>
      <img
        src="org2.png"
        alt="ZoCri CodeCraft organisation logo"
        className="organisation-logo"
      />
    </Typography>
  );
}

export default Footer;
