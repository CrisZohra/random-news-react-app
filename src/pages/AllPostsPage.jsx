import axios from "axios";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Loader from "../components/Loader";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import Footer from "../components/Footer";
import LikesButtons from "../components/LikesButtons";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function AllPostsPage() {
  const [posts, setPosts] = useState([]);
  const [fetching, setFeching] = useState(true);
  const [displayedPosts, setDisplayedPosts] = useState(6);
  const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null }); //initial state for toggling
  
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
    <>
    <section className="all-posts">
      {fetching ? (
        <Loader />
        ) : (
          posts.slice(0, displayedPosts).map((post, i) => {
            return (
              <div key={post.id} className="post-container">
                <LikesButtons />
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
              <button
                onClick={
                  () =>
                  toggleEdit.toggle && i !== toggleEdit.index //checks if toggle is true and index is different from current post
                  ? setToggleEdit((prev) => ({
                    ...prev, // if so, we are just clicking edit for another post, so change index
                    index: i
                  }))
                      : setToggleEdit((prev) => ({
                          toggle: !prev.toggle,
                          index: !prev.toggle ? i : null,
                        })) // if i is not different from current index, we hide the edit
                      }
                      >
                Edit post
              </button>
              {toggleEdit.toggle && toggleEdit.index === i && ( // if toggle is true we show the edit form (also checking index to make sure we open the right form)
                <EditPost post={post} postId={post.id} />
                )}

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
    <Footer/>
    </>
  );
}

export default AllPostsPage;
