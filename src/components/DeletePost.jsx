import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://random-news-react-app.adaptable.app/posts";

function DeletePost() {
  const { postId } = useParams();

  function deletePost() {
    axios
      .delete(`${API_URL}/${postId}`)
      .then(() => {
        console.log("post deleted");
      })
      .catch((error) => error);
  }

  return <button onClick={deletePost}>Delete</button>;
}

export default DeletePost;
