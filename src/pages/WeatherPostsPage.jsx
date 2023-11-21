import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function WeatherPostsPage () {
    const [weatherPosts, setWeatherPosts] = useState([])
    const [toggleEdit, setToggleEdit] = useState({ toggle: false, index: null });
    
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

const handlePostDelete = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setWeatherPosts(response.data);
      })
      .catch((error) => error);
  };

    return(
        <>
        <h1>Weather Posts</h1>
        <SearchBar/>
        {weatherPosts.map((elm, i) => {
        return (
            <div key={elm.id}>
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
            </div>    
        )
        })}
        < Footer />
    </>
    )
}

export default WeatherPostsPage;