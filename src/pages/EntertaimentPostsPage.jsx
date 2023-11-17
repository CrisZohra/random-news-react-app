import axios from "axios";
import { useEffect, useState } from "react";

function EntertaimentPostsPage () {
    const [entertainmentPosts, setEntertainmentPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const entertainmentArray =  array.filter((elm) => {
        return elm.category === "entertainment" 
        })
        setEntertainmentPosts(entertainmentArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(entertainmentPosts)
    console.log(entertainmentPosts.length)

    return(
        <>
        <h1>Entertainment Posts</h1>
        {entertainmentPosts.map((elm) => {
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

export default EntertaimentPostsPage;