import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostsStore from "./context/PostsStore";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import CategoryPostsPage from "./pages/CategoryPostsPage";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <PostsStore>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/:postId" element={<PostDetailsPage />} />
              <Route
                path="/posts/category/:category"
                element={<CategoryPostsPage />}
              />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </PostsStore>
    </>
  );
}
export default App;
