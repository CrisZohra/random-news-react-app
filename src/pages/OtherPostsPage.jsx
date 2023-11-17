import axios from "axios";
import { useEffect, useState } from "react";

function OtherPostsPage () {
    const [otherPosts, setOtherPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const otherArray =  array.filter((elm) => {
        return elm.category === "other" 
        })
        setOtherPosts(otherArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(otherPosts)
    console.log(otherPosts.length)

    return(
        <>
        <h1>Other</h1>
        {otherPosts.map((elm) => {
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

export default OtherPostsPage;