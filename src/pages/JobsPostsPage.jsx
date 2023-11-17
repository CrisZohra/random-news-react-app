import axios from "axios";
import { useEffect, useState } from "react";

function JobsPostsPage () {
    const [jobPosts, setJobPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const jobArray =  array.filter((elm) => {
        return elm.category === "jobs" 
        })
        setJobPosts(jobArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(jobPosts)
    console.log(jobPosts.length)

    return(
        <>
        <h1>Job Posts</h1>
        {jobPosts.map((elm) => {
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

export default JobsPostsPage;