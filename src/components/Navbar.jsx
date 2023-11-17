import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="/posts" className="nav-link">
        ALL POSTS
      </NavLink>
      <NavDropdown title="POSTS ON..." className="nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/posts/weather" className="nav-link">
          WEATHER
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/traffic" className="nav-link">
          TRAFFIC
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/posts/education"
          className="nav-link"
        >
          EDUCATION
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/jobs" className="nav-link">
          JOBS
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/selling" className="nav-link">
          SELLING
        </NavDropdown.Item>
        <NavDropdown.Item
          as={NavLink}
          to="/posts/entertaiment"
          className="nav-link"
        >
          ENTERTAIMENT
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/events" className="nav-link">
          EVENTS
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/social" className="nav-link">
          SOCIAL
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/posts/other" className="nav-link">
          OTHER
        </NavDropdown.Item>
      </NavDropdown>
      <NavLink to="/about-us" className="nav-link">
        ABOUT US
      </NavLink>
    </nav>
  );
}
export default Navbar;
