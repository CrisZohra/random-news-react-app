import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/posts">ALL POSTS</NavLink>
      <NavDropdown title="POSTS ON..." id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/posts/weather">
          WEATHER
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/traffic">
          TRAFFIC
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/education">
          EDUCATION
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/jobs">
          JOBS
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/selling">
          SELLING
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/entertaiment">
          ENTERTAIMENT
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/events">
          EVENTS
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/social">
          SOCIAL
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/other">
          OTHER
        </NavDropdown.Item>
      </NavDropdown>
    </nav>
  );
}
export default Navbar;
