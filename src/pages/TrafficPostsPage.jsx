import axios from "axios";
import { useEffect, useState } from "react";

function TrafficPostsPage () {
    const [trafficPosts, setTrafficPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const trafficArray =  array.filter((elm) => {
        return elm.category === "traffic" 
        })
        setTrafficPosts(trafficArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(trafficPosts)
    console.log(trafficPosts.length)


    return(
        <>
        <h1>Traffic Posts</h1>
        {trafficPosts.map((elm) => {
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

   


export default TrafficPostsPage;