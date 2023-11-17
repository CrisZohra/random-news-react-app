import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AllPostsPage from "./pages/AllPostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import WeatherPostsPage from "./pages/WeatherPostsPage";
import EntertaimentPostsPage from "./pages/EntertaimentPostsPage";
import TrafficPostsPage from "./pages/TrafficPostsPage";
import EventsPostsPage from "./pages/EventsPostsPage";
import SocialPostsPage from "./pages/SocialPostsPage";
import JobsPostsPage from "./pages/JobsPostsPage";
import EducationPostsPage from "./pages/EducationPostsPage";
import SellingPostsPage from "./pages/SellingPostsPage";
import OtherPostsPage from "./pages/OtherPostsPage";

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
          <Route path="/posts/entertaiment" element={ <EntertaimentPostsPage /> } />
          <Route path="/posts/traffic" element={ <TrafficPostsPage /> } />
          <Route path="/posts/events" element={ <EventsPostsPage /> } />
          <Route path="/posts/social" element={ <SocialPostsPage /> } />
          <Route path="/posts/jobs" element={ <JobsPostsPage /> } />
          <Route path="/posts/education" element={ <EducationPostsPage /> } />
          <Route path="/posts/selling" element={ <SellingPostsPage /> } />
          <Route path="/posts/other" element={ <OtherPostsPage /> } />
        </Routes>
    
      </div>
    </>
  );
}

export default App;
