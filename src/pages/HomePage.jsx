import AddPost from "../components/AddPost";
import AllPosts from "../components/AllPosts";
import Footer from "../components/Footer";
import titlePic from "/title4.png";
function HomePage() {
  return (
    <>
      <section className="homepage-header">
        <img src={titlePic} alt="what now? title" />
        <div className="homepage-header-text">
          <h4>Unleash Local Stories, From Weather Whims to Job Wins!</h4>
          <h4>Post, Share, Connect - Every Detail, Every Moment.</h4>
          <h4>Dive in, Post Now!</h4>
        </div>
      </section>
      <AllPosts />
      <AddPost />
      <Footer />
    </>
  );
}

export default HomePage;
