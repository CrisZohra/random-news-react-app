import { useState } from "react";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";

const buttonStyles = {
  display: "flex",
  gap: "3px",
  color: "#72335b",
  fontSize: "20px",
  "&:hover": {
    color: "#72335b",
    backgroundColor: "#72335b24",
  },
};

function LikesButtons() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [activeLikes, setActiveLikes] = useState(false);
  const [activeDislikes, setActiveDislikes] = useState(false);

  function toggleLikes() {
    if (activeLikes == false) {
      setLikes(likes + 1);
      setActiveLikes(true);
      if (activeDislikes == true) {
        setDislikes(dislikes - 1);
      }
      setActiveDislikes(false);
    }
  }
  function toggleDislikes() {
    if (activeDislikes == false) {
      setDislikes(dislikes + 1);
      setActiveDislikes(true);
      if (activeLikes == true) {
        setLikes(likes - 1);
      }
      setActiveLikes(false);
    }
  }

  return (
    <div className="button-container">
      <IconButton
        color="primary"
        aria-label="add like"
        sx={buttonStyles}
        onClick={toggleLikes}
      >
        <ThumbUpIcon />
        {likes}
      </IconButton>
      <IconButton
        aria-label="add dislike"
        sx={buttonStyles}
        onClick={toggleDislikes}
      >
        <ThumbDownOffAltIcon />
        {dislikes}
      </IconButton>
    </div>
  );
}

export default LikesButtons;
