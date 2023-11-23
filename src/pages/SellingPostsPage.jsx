import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import AddCard from "../components/AddCard";
import { PostsContext } from "../context/PostsStore";

function SellingPostsPage() {
  const [sellingPosts, setSellingPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(9);
  const { loadingPosts } = useContext(PostsContext);

  useEffect(() => {
    axios
      .get("https://random-news-react-app.adaptable.app/posts/")
      .then((response) => {
        let array = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          if (response.data[i].category === "selling")
            array.push(response.data[i]);
        }
        setSellingPosts(array);
      })
      .catch((error) => {
        console.log("Cannot filter posts", error);
      });
  }, [sellingPosts]);

  const handleShowMore = () => {
    setDisplayedPosts((prev) => prev + 6);
  };

  return (
    <>
      <h1>Selling Posts</h1>
      <div className="center">
        {loadingPosts ? (
          <Loader />
        ) : (
          <section className="all-posts">
            <AddCard />
            {sellingPosts.slice(0, displayedPosts).map((elm) => {
              return <PostCard key={elm.id} post={elm} />;
            })}
          </section>
        )}
      </div>
      {sellingPosts.length > displayedPosts && (
        <button onClick={handleShowMore} className="showmore-button">
          SHOW MORE
        </button>
      )}
    </>
  );
}
export default SellingPostsPage;
