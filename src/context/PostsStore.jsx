import { createContext, useState } from "react";

export const PostsContext = createContext();

function PostsStore({ children }) {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const handleUpdatePosts = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  const store = {
    posts: posts,
    updatePosts: handleUpdatePosts,
    loadingPosts: loadingPosts,
    setLoadingPosts: setLoadingPosts,
  };

  return (
    <PostsContext.Provider value={store}>{children}</PostsContext.Provider>
  );
}

export default PostsStore;
