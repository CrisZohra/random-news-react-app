import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";

function App() {
  const [post, setPost] = useState([]);
  axios
    .get("https://random-news-react-app.adaptable.app/posts")
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => error);
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/posts" element={ <AllPosts /> } />
        <Route path="/posts/:postid" element={ <PostDetails /> } />
        <Route path="/posts/weather" element={ <WeatherPosts /> } />
        <Route path="/posts/entertaiment" element={ <EntertaimentPosts /> } />
        <Route path="/posts/traffic" element={ <TrafficPosts /> } />
        <Route path="/posts/events" element={ <EventsPosts /> } />
        <Route path="/posts/social" element={ <SocialPosts /> } />
        <Route path="/posts/jobs" element={ <JobsPosts /> } />
        <Route path="/posts/education" element={ <EducationPosts /> } />
        <Route path="/posts/selling" element={ <SellingPosts /> } />
        <Route path="/posts/other" element={ <OtherPosts /> } />
      </Routes>

      {post.map((elm) => {
        return <p key={elm.id}>{elm.title}</p>;
      })}
    </>
  );
}
export default App;
