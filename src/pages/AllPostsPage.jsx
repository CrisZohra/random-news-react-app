import axios from "axios";

import { useState, useEffect } from "react";

import Loader from "../components/Loader";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function AllPostsPage() {
  const [posts, setPosts] = useState([]);
  const [fetching, setFeching] = useState(true);
  const [displayedPosts, setDisplayedPosts] = useState(6);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
        setFeching(false);
      })
      .catch((error) => error);
  }, []);

  const handleShowMore = () => {
    setDisplayedPosts((prev) => prev + 6);
  };

  return (
    <section className="all-posts">
      {fetching ? (
        <Loader />
      ) : (
        posts.slice(0, displayedPosts).map((post) => {
          return (
            <div key={post.id} className="post-container">
              <h1>{post.title} </h1>
              {post.image && (
                <img
                  src={post.image}
                  alt={`${post.title} photo`}
                  className="post-image"
                />
              )}
              <div className="location">
                <img src="./src/images/location-icon.png" alt="" />
                <h2> {post.location} </h2>
              </div>
              <h2>{post.date}</h2>
              <h3>Category: {post.category}</h3>
            </div>
          );
        })
      )}

      {posts.length > displayedPosts && (
        <button onClick={handleShowMore} className="showmore-button">
          SHOW MORE
        </button>
      )}
    </section>
  );
}

export default AllPostsPage;
