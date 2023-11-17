import axios from "axios";
import { useEffect, useState } from "react";

function SellingPostsPage () {
    const [sellingPosts, setSellingPosts] = useState([])
    
    useEffect(()=> {
        axios.get("https://random-news-react-app.adaptable.app/posts/")
        .then((response) => {
            const array = response.data
            console.log(array)
        const sellingArray =  array.filter((elm) => {
        return elm.category === "selling" 
        })
        setSellingPosts(sellingArray)
    })
    .catch(error => {
        console.log("Cannot filter posts", error)
    })
}, [])

    console.log(sellingPosts)
    console.log(sellingPosts.length)

    return(
        <>
        <h1>Selling Posts</h1>
        {sellingPosts.map((elm) => {
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
export default SellingPostsPage;