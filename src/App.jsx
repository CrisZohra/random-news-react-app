import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AllPostsPage from "./pages/AllPostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import WeatherPostsPage from "./pages/WeatherPostsPage";
import TrafficPostsPage from "./pages/TrafficPostsPage";
import EducationPostsPage from "./pages/EducationPostsPage";
import JobsPostsPage from "./pages/JobsPostsPage";
import SellingPostsPage from "./pages/SellingPostsPage";
import EntertaimentPostsPage from "./pages/EntertaimentPostsPage";
import EventsPostsPage from "./pages/EventsPostsPage";
import SocialPostsPage from "./pages/SocialPostsPage";
import OtherPostsPage from "./pages/OtherPostsPage";
import AboutUs from "./pages/AboutUs";

function App() {

  return (
    <>
      <div className="App">

        <Navbar />

        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/posts" element={ <AllPostsPage /> } />
          <Route path="/posts/:postid" element={ <PostDetailsPage /> } />
          <Route path="/posts/weather" element={ <WeatherPostsPage /> } />
          <Route path="/posts/traffic" element={ <TrafficPostsPage /> } />
          <Route path="/posts/education" element={ <EducationPostsPage /> } />
          <Route path="/posts/jobs" element={ <JobsPostsPage /> } />
          <Route path="/posts/selling" element={ <SellingPostsPage /> } />
          <Route path="/posts/entertaiment" element={ <EntertaimentPostsPage /> } />
          <Route path="/posts/events" element={ <EventsPostsPage /> } />
          <Route path="/posts/social" element={ <SocialPostsPage /> } />
          <Route path="/posts/other" element={ <OtherPostsPage /> } />
          <Route path="/about-us" element={ <AboutUs /> } />
        </Routes>
    
      </div>
    </>
  );
}

export default App;
