import axios from "axios";
import { useEffect, useState } from "react";

function SocialPostsPage () {
    const [socialPosts, setSocialPosts] = useState([])
    
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

    console.log(socialPosts)
    console.log(socialPosts.length)


    return(
        <>
        <h1>Traffic Posts</h1>
        {socialPosts.map((elm) => {
        return (
            <div key={elm.id}>
            <h2>{elm.title}</h2>
            <p>{elm.location}</p>
            <p>{elm.date}</p>
            <image src={elm.image} />
            </div>
        )
        })}
    </>
    )
}

export default SocialPostsPage;