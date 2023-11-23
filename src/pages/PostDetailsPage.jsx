import axios from "axios";
import React from "react";

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import LikesButtons from "../components/LikesButtons";
import Comments from "../components/Comments";
import locationLogo from "/location-icon.png";
import { Button, Chip } from "@mui/material";
import CardMenu from "../components/PostCardMenu";
import { Typography } from "@mui/material";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const FormattedDateTypography = ({ date }) => {
  const formattedDate = formatDate(date);

  return <p>{formattedDate}</p>;
};

function PostDetailsPage() {
  const [postDetails, setPostDetails] = useState("");
  const [fetching, setFeching] = useState(true);
  const [toggleComments, setToggleComments] = useState(false);

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
  }, [postId, postDetails]);

  const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setPostDetails(response.data);
      })
      .catch((error) => error);
  };

  return (
    <div className="details">
      <Typography>
        <CardMenu post={postDetails} />
        <div className="post-details-container">
          {fetching ? (
            <Loader />
          ) : (
            <div className="post-details">
              <div className="details-container">
                <div className="location-date">
                  <div className="details-location">
                    <img
                      src={locationLogo}
                      alt="location icon"
                      className="logo"
                    />
                    <p> {postDetails.location} </p>
                  </div>
                  <FormattedDateTypography date={postDetails.date} />
                </div>
                {postDetails.image && (
                  <img
                    src={postDetails.image}
                    alt={`${postDetails.title} photo`}
                    className="details-image"
                  />
                )}
                <h3 className="article">{postDetails.title}</h3>
                <p className="article">{postDetails.description}</p>
                <h6>Category: {postDetails.category}</h6>
                <div className="post-bottom">
                  <div className="comments-container">
                    <Button
                      onClick={() => setToggleComments((prev) => !prev)}
                      sx={{
                        color: "#72335b",
                        margin: "10px",
                        "&:hover": {
                          color: "#72335b",
                          backgroundColor: "#72335b24",
                        },
                      }}
                    >
                      {`${toggleComments ? "Hide" : "Show"} comments`}
                    </Button>
                    {toggleComments && <Comments postID={postDetails.id} />}
                    <hr className="hr" />
                  </div>
                  <LikesButtons />
                </div>
              </div>
            </div>
          )}
        </div>
      </Typography>
    </div>
  );
}

export default PostDetailsPage;
