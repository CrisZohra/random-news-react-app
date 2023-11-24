import AllPosts from "../components/AllPosts";
import titlePic from "/title4.png";
import Chips from "../components/Chips";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="homepage-header">
        <NavLink to="/about">
          <img src={titlePic} alt="what now? title" />
        </NavLink>
        <div className="homepage-header-text">
          <h4>Unleash Worldwide Stories, From Weather Whims to Job Wins!</h4>
          <h4>Post, Share, Connect - Every Detail, Every Moment.</h4>
          <h4>Dive in, Post Now!</h4>
        </div>
      </section>
      <Chips />
      <AllPosts />
    </>
  );
}

export default HomePage;
