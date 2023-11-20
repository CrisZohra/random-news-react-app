import axios from "axios";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Loader from "../components/Loader";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";

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

  const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => error);
  };

  return (
    <section className="all-posts">
      {fetching ? (
        <Loader />
      ) : (
        posts.slice(0, displayedPosts).map((post) => {
          return (
            <div key={post.id} className="post-container">
              <NavLink to={`/posts/${post.id}`}>
                <h1>{post.title} </h1>
                {post.image && (
                  <img
                    src={post.image}
                    alt={`${post.title} photo`}
                    className="post-image"
                  />
                )}
                <div className="location">
                  <img
                    src="./src/images/location-icon.png"
                    alt="location icon"
                  />
                  <h2> {post.location} </h2>
                </div>
                <h2>{post.date}</h2>
                <h3>Category: {post.category}</h3>
              </NavLink>
              <EditPost />
              <DeletePost postId={post.id} onDelete={handlePostDelete} />
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
