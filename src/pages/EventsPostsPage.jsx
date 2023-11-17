import axios from "axios";
import { useEffect, useState } from "react";

function EventsPostsPage () {
    const [eventsPosts, setEventsPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const eventsArray =  array.filter((elm) => {
        return elm.category === "events" 
        })
        setEventsPosts(eventsArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(eventsPosts)
    console.log(eventsPosts.length)

    return(
        <>
        <h1>Events Posts</h1>
        {eventsPosts.map((elm) => {
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
export default EventsPostsPage;