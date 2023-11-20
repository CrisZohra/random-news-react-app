import axios from "axios";
import React from "react";

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function PostDetailsPage(props) {
  const [postDetails, setPostDetails] = useState("");
  const [fetching, setFeching] = useState(true);

  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${postId}`)
      .then((response) => {
        setPostDetails(response.data);
        setFeching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <div className="post-details">
      {fetching ? (
        <Loader />
      ) : (
        <div className="details-container">
          <h1>{postDetails.title}</h1>
          {postDetails.image && (
            <img
              src={postDetails.image}
              alt={`${postDetails.title} photo`}
              className="details-image"
            />
          )}
          <div className="details-location">
            <img
              src="../src/images/location-icon.png"
              alt="location icon"
              className="details-location-icon"
            />
            <h2> {postDetails.location} </h2>
          </div>
          <h2>{postDetails.date}</h2>
          <h3>{postDetails.description}</h3>
          <NavLink to={`${postDetails.url}`} target="_blank">
            Click here for more details.
          </NavLink>
          <h3>Category: {postDetails.category}</h3>
        </div>
      )}
    </div>
  );
}

export default PostDetailsPage;
