import axios from "axios";
import { useState } from "react";

const API_URL = "https://random-news-react-app.adaptable.app/posts"

function AllPostsPage() {

    const [posts, setPosts] = useState([]);

    axios.get(API_URL)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((error) => error);

    return (
        <div>
            {posts.map((post) => {
                return <p key={post.id}> {post.title} </p>
            })}
        </div>
    );
}

export default AllPostsPage;