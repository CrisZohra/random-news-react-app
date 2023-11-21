import AddPost from "../components/AddPost";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function HomePage() {


  return (
    <>
      <h1>What now? The Portal</h1>
    <SearchBar/>
      < AddPost />
      <Footer/>
    </>
  );
}

export default HomePage;
