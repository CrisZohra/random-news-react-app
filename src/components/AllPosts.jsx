import axios from "axios";

import React, { useState, useEffect, useContext } from "react";

import Loader from "./Loader";
import { PostsContext } from "../context/PostsStore";
import PostCard from "./PostCard";
import AddCard from "./AddCard";

const API_URL = "https://random-news-react-app.adaptable.app/";
const POSTS_URL = `${API_URL}posts/`;

function AllPosts() {
  const { posts, updatePosts, setLoadingPosts, loadingPosts } =
    useContext(PostsContext);
  const [displayedPosts, setDisplayedPosts] = useState(6);

  useEffect(() => {
    setLoadingPosts(true);

    axios
      .get(POSTS_URL)
      .then((response) => {
        updatePosts(response.data);
        setLoadingPosts(false);
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
        updatePosts(response.data);
      })
      .catch((error) => error);
  };

  return (
    <section className="all-posts">
      {loadingPosts ? (
        <Loader />
      ) : (
        <>
          <AddCard />

          {posts.slice(0, displayedPosts).map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}

          {posts.length > displayedPosts && (
            <button onClick={handleShowMore} className="showmore-button">
              SHOW MORE
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default AllPosts;
