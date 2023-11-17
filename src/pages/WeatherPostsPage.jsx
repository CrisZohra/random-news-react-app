import axios from "axios";
import { useEffect, useState } from "react";

function WeatherPostsPage () {
    const [weatherPosts, setWeatherPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const weatherArray =  array.filter((elm) => {
        return elm.category === "weather" 
        })
        setWeatherPosts(weatherArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(weatherPosts)
    console.log(weatherPosts.length)

    return(
        <>
        <h1>Weather Posts</h1>
        {weatherPosts.map((elm) => {
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

export default WeatherPostsPage;