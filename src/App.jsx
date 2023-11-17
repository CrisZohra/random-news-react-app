import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

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
      {post.map((elm) => {
        return <p key={elm.id}>{elm.title}</p>;
      })}
    </>
  );
}
export default App;
