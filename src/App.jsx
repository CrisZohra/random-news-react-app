import { Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import WeatherPostsPage from "./pages/WeatherPostsPage";
import TrafficPostsPage from "./pages/TrafficPostsPage";
import EducationPostsPage from "./pages/EducationPostsPage";
import JobsPostsPage from "./pages/JobsPostsPage";
import SellingPostsPage from "./pages/SellingPostsPage";
import EntertainmentPostsPage from "./pages/EntertainmentPostsPage";
import EventsPostsPage from "./pages/EventsPostsPage";
import SocialPostsPage from "./pages/SocialPostsPage";
import OtherPostsPage from "./pages/OtherPostsPage";
import AboutUs from "./pages/AboutUs";
import PostsStore from "./context/PostsStore";
import Footer from "./components/Footer";

function App() {
  return (
    <PostsStore>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:postId" element={<PostDetailsPage />} />
          <Route path="/posts/weather" element={<WeatherPostsPage />} />
          <Route path="/posts/traffic" element={<TrafficPostsPage />} />
          <Route path="/posts/education" element={<EducationPostsPage />} />
          <Route path="/posts/jobs" element={<JobsPostsPage />} />
          <Route path="/posts/selling" element={<SellingPostsPage />} />
          <Route
            path="/posts/entertainment"
            element={<EntertainmentPostsPage />}
          />
          <Route path="/posts/events" element={<EventsPostsPage />} />
          <Route path="/posts/social" element={<SocialPostsPage />} />
          <Route path="/posts/other" element={<OtherPostsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </PostsStore>
  );
}

export default App;
