import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/posts">POSTS</NavLink>
      <NavLink to="/posts/new">ADD POST</NavLink>
    </nav>
  );
}
export default Navbar;
