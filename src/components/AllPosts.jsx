import axios from "axios";

import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import Loader from "./Loader";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import LikesButtons from "./LikesButtons";
import { PostsContext } from "../context/PostsStore";
import locationLogo from "/location-icon.png"
import Comments from "./Comments"

const API_URL = "https://random-news-react-app.adaptable.app/";
const POSTS_URL = `${API_URL}posts/`;

function AllPosts() {
  const { posts, updatePosts, setLoadingPosts, loadingPosts } =
    useContext(PostsContext);
  const [displayedPosts, setDisplayedPosts] = useState(6);
  const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null }); //initial state for toggling
  const [toggleComments, setToggleComments] = useState({toggle: false, index: null});
  const [ refresh, setRefresh] = useState(false)
  useEffect(() => {
    setLoadingPosts(true);

    axios
      .get(POSTS_URL)
      .then((response) => {
        updatePosts(response.data);
        setLoadingPosts(false);
      })
      .catch((error) => error);
  }, [refresh]);

  const handleShowMore = () => {
    setDisplayedPosts((prev) => prev + 6);
  };

  const handleCancelEdit = () => {
    setToggleEdit({ toggle: false, index: null });
  };

  const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        updatePosts(response.data);
      })
      .catch((error) => error);
  };



  return (
    <section className="all-posts">
      {loadingPosts ? (
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
                    src={locationLogo}
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
                          index: i,
                        }))
                      : setToggleEdit((prev) => ({
                          toggle: !prev.toggle,
                          index: !prev.toggle ? i : null,
                        })) // if i is not different from current index, we hide the edit
                }
              >
                Edit post
              </button>
              {toggleEdit.toggle &&
                toggleEdit.index === i && ( // if toggle is true we show the edit form (also checking index to make sure we open the right form)
                  <EditPost
                    post={post}
                    postId={post.id}
                    onExitEditing={handleCancelEdit}
                  />
                )}

              <DeletePost postId={post.id} onDelete={handlePostDelete} />
              <button
                  onClick={() => {
                    toggleComments.toggle && i !== toggleComments.index
                      ? setToggleComments((prev) => ({
                          ...prev,
                          index: i,
                        }))
                      : setToggleComments((prev) => ({
                          toggle: !prev.toggle,
                          index: !prev.toggle ? i : null,
                        }));
                  }}
                >
                  Show comments
                </button>
                {toggleComments.toggle &&
                  toggleComments.index == i && (<Comments postID={post.id}/>)}
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

export default AllPosts;
