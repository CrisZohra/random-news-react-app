import AddPost from "../components/AddPost";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <>
      <img src="./src/images/title4.png" alt="what now? title" />
      <SearchBar />
      <AddPost />
      <Footer />
    </>
  );
}

export default HomePage;
