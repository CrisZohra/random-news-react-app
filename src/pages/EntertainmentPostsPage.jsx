import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import AddCard from "../components/AddCard";
import { PostsContext } from "../context/PostsStore";

function EntertainmentPostsPage() {
  const [entertainmentPosts, setEntertainmentPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(9);
  const { loadingPosts } = useContext(PostsContext);

  useEffect(() => {
    axios
      .get("https://random-news-react-app.adaptable.app/posts/")
      .then((response) => {
        let array = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          if (response.data[i].category === "entertainment")
            array.push(response.data[i]);
        }
        setEntertainmentPosts(array);
      })
      .catch((error) => {
        console.log("Cannot filter posts", error);
      });
  }, [entertainmentPosts]);

  const handleShowMore = () => {
    setDisplayedPosts((prev) => prev + 6);
  };

  return (
    <>
      <h1>Entertainment Posts</h1>
      <div className="center">
        {loadingPosts ? (
          <Loader />
        ) : (
          <section className="all-posts">
            <AddCard />
            {entertainmentPosts.slice(0, displayedPosts).map((elm) => {
              return <PostCard key={elm.id} post={elm} />;
            })}
          </section>
        )}
      </div>
      {entertainmentPosts.length > displayedPosts && (
        <button onClick={handleShowMore} className="showmore-button">
          SHOW MORE
        </button>
      )}
    </>
  );
}

export default EntertainmentPostsPage;
