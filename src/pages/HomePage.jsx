import AddPost from "../components/AddPost";
import AllPosts from "../components/AllPosts";
import Footer from "../components/Footer";
import titlePic from "/title4.png"
function HomePage() {
  return (
    <>
      <img src={titlePic} alt="" />
      <AllPosts />
      <AddPost />
      <Footer />
    </>
  );
}

export default HomePage;
