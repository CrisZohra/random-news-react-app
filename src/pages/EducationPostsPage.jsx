import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import Footer from "../components/Footer";
import LikesButtons from "../components/LikesButtons";

function EducationPostsPage () {
    const [educationPosts, setEducationPosts] = useState([])
    const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null });

    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const educationArray =  array.filter((elm) => {
        return elm.category === "education" 
        })
        setEducationPosts(educationArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    const handlePostDelete = () => {
        axios
          .get(API_URL)
          .then((response) => {
            setEducationPosts(response.data);
          })
          .catch((error) => error);
      };


    return(
        <>
        <h1>Education Posts</h1>
        {educationPosts.map((elm, i) => {
        return (
            <div key={elm.id}>
              <LikesButtons />
            <h2>{elm.title}</h2>
            <p>{elm.location}</p>
            <p>{elm.date}</p>
            <img src={elm.image} />

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
            </div>
        )
        })}
        <Footer/>
    </>
    )
}

export default EducationPostsPage;