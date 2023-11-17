import axios from "axios";
import { useEffect, useState } from "react";

function EducationPostsPage () {
    const [educationPosts, setEducationPosts] = useState([])
    
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

    console.log(educationPosts)
    console.log(educationPosts.length)

    return(
        <>
        <h1>Education Posts</h1>
        {educationPosts.map((elm) => {
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

export default EducationPostsPage;