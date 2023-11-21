import { useEffect, useState } from "react";
import thumbsUp from "/thumbs-up.png";
import thumbsDown from "/thumbs-down.png";

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
      <button className="button" onClick={toggleLikes}>
        <img width="15px" src={thumbsUp} />
        {" " + likes}
      </button>
      <button className="button" onClick={toggleDislikes}>
        <img width="15px" src={thumbsDown} />
        {" " + dislikes}
      </button>
    </div>
  );
}

export default LikesButtons;
