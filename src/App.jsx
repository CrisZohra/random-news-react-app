import axios from "axios"
import { useState } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState([])

  axios.get("https://random-news-react-app.adaptable.app/posts") 
  .then((response) => {
    setPost(response.data)
  }
  )
  .catch(error => error)

  return (
    post.map((elm) => {
      return <p>{elm.title}</p>
    })
  )
}

export default App
