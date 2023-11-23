import axios from "axios";

import React, { useState, useEffect, useContext } from "react";

import Loader from "./Loader";
import { PostsContext } from "../context/PostsStore";
import PostCard from "./PostCard";
import AddCard from "./AddCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const API_URL = "https://random-news-react-app.adaptable.app/";
const POSTS_URL = `${API_URL}posts/`;

function AllPosts() {
  const { posts, updatePosts, setLoadingPosts, loadingPosts } =
    useContext(PostsContext);
  const [displayedPosts, setDisplayedPosts] = useState(9);

  useEffect(() => {
    setLoadingPosts(true);

    axios
      .get(POSTS_URL)
      .then((response) => {
        let array = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          array.push(response.data[i]);
        }
        updatePosts(array);
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
    <>
      <div className="center">
        {loadingPosts ? (
          <Loader />
        ) : (
          <section className="all-posts">
            <AddCard />
            {posts.slice(0, displayedPosts).map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
          </section>
        )}
      </div>

      {posts.length > displayedPosts && (
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Button
            variant="contained"
            onClick={handleShowMore}
            sx={{
              backgroundColor: "#dea883",
              ":hover": {
                backgroundColor: "#1c0a52",
              },
            }}
          >
            SHOW MORE
          </Button>
        </Stack>
      )}
    </>
  );
}

export default AllPosts;
