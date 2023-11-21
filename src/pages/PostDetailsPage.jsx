import axios from "axios";
import React from "react";

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import Footer from "../components/Footer";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function PostDetailsPage(props) {
  const [postDetails, setPostDetails] = useState("");
  const [fetching, setFeching] = useState(true);
  const [toggle, setToggle] = useState(false);

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

  const handlePostDelete = () => {
      axios
        .get(API_URL)
        .then((response) => {
          setPostDetails(response.data);
        })
        .catch((error) => error);
    };


  return (
    <>
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
          
          <button
                onClick={
                  () => {
                    setToggle(!toggle)
                  } }
                  >
                Edit post
              </button>
              
                {toggle && <EditPost post={postDetails} postId={postDetails.id} />}
                
          <DeletePost postId={postDetails.id} onDelete={handlePostDelete} />
        </div>
      )}
    </div>
    <Footer/>
                    </>
  );
}

export default PostDetailsPage;
