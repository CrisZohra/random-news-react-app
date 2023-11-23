import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import LikesButtons from "../components/LikesButtons";
import Comments from "../components/Comments";

function OtherPostsPage() {
  const [otherPosts, setOtherPosts] = useState([]);
  const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null });
  const [toggleComments, setToggleComments] = useState({
    toggle: false,
    index: null,
  });

  useEffect(() => {
    axios
      .get("https://random-news-react-app.adaptable.app/posts/")
      .then((response) => {
        const array = response.data;
        console.log(array);
        const otherArray = array.filter((elm) => {
          return elm.category === "other";
        });
        setOtherPosts(otherArray);
      })
      .catch((error) => {
        console.log("Cannot filter posts", error);
      });
  }, []);

  const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setOtherPosts(response.data);
      })
      .catch((error) => error);
  };

  return (
    <>
      <h1>Other</h1>
      {otherPosts.map((elm, i) => {
        return (
          <div key={elm.id}>
            <LikesButtons />
            <h2>{elm.title}</h2>
            <p>{elm.location}</p>
            <p>{elm.date}</p>
            <img src={elm.image} />

            <button
              onClick={() =>
                toggleEdit.toggle && i !== toggleEdit.index
                  ? setToggleEdit((prev) => ({
                      ...prev,
                      index: i,
                    }))
                  : setToggleEdit((prev) => ({
                      toggle: !prev.toggle,
                      index: !prev.toggle ? i : null,
                    }))
              }
            >
              Edit post
            </button>

            {toggleEdit.toggle && toggleEdit.index === i && (
              <EditPost post={elm} postId={elm.id} />
            )}

            <DeletePost postId={elm.id} onDelete={handlePostDelete} />
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
            {toggleComments.toggle && toggleComments.index == i && (
              <Comments postID={elm.id} />
            )}
          </div>
        );
      })}
    </>
  );
}

export default OtherPostsPage;
