import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import AddCard from "../components/AddCard";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function capitalize(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function CategoryPostsPage() {
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(9);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://random-news-react-app.adaptable.app/posts/")
      .then((response) => {
        let array = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          if (response.data[i].category === category)
            array.push(response.data[i]);
        }
        setCategoryPosts(array);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Cannot filter posts", error);
      });
  }, []);

  const handleShowMore = () => {
    setDisplayedPosts((prev) => prev + 6);
  };

  return (
    <>
      <Typography
        variant="h1"
        sx={{ marginTop: "25px", fontSize: "40px", fontWeight: "400" }}
      >
        {`${capitalize(category)} Posts`}
      </Typography>
      <div className="center">
        {isLoading ? (
          <Loader />
        ) : (
          <section className="all-posts">
            <AddCard />
            {categoryPosts.slice(0, displayedPosts).map((elm) => {
              return <PostCard key={elm.id} post={elm} />;
            })}
          </section>
        )}
      </div>
      {categoryPosts.length > displayedPosts && (
        <button onClick={handleShowMore} className="showmore-button">
          SHOW MORE
        </button>
      )}
    </>
  );
}

export default CategoryPostsPage;
