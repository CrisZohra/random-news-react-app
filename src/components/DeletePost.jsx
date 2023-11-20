import axios from "axios"
import { useParams } from "react-router-dom"

function DeletePost() {

    const { postID } = useParams()
    
    function deletePost() {
    axios.delete("https://random-news-react-app.adaptable.app/posts"+ postID)
    .then(() => {
        console.log("post deleted")
    })
    .catch(error => error)
    }

    return (
        <button onClick={deletePost}>Delete</button>
 )
}

export default DeletePost