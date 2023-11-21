import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import Footer from "../components/Footer";
import LikesButtons from "../components/LikesButtons";
import Comments from "../components/Comments";

function SocialPostsPage () {
    const [socialPosts, setSocialPosts] = useState([])
    const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null });
    const [toggleComments, setToggleComments] = useState({toggle: false, index: null});

    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const socialArray =  array.filter((elm) => {
        return elm.category === "social" 
        })
        setSocialPosts(socialArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setSocialPosts(response.data);
      })
      .catch((error) => error);
  };


    return(
        <>
        <h1>Traffic Posts</h1>
        {socialPosts.map((elm, i) => {
        return (
            <div key={elm.id}>
              <LikesButtons/>
            <h2>{elm.title}</h2>
            <p>{elm.location}</p>
            <p>{elm.date}</p>
            <image src={elm.image} />
            
            <button
                onClick={
                  () =>
                    toggleEdit.toggle && i !== toggleEdit.index 
                      ? setToggleEdit((prev) => ({
                          ...prev, 
                          index: i
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
                {toggleComments.toggle &&
                  toggleComments.index == i && (<Comments />)}
            </div>
        )
        })}
        <Footer />
    </>
    )
}

export default SocialPostsPage;