import AddPost from "../components/AddPost";
import AllPosts from "../components/AllPosts";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <img src="./src/images/title4.png" alt="" />
      <AllPosts />
      <AddPost />
      <Footer />
    </>
  );
}

export default HomePage;
