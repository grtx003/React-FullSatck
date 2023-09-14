import React from "react";
import "../css/Home.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [listofPosts, setListOfPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)
    })
  }, [])

    return(
      <div>
        <div>
            {listofPosts.map((value, key) => {
                return <div className='post' key={key} onClick={() => {navigate(`/post/${value.id}`)}}>
                    <div className='title'>{value.title}</div>
                    <div className='body'>{value.postText}</div>
                    <div className='footer'>{value.username}</div>
                </div>
            })}
        </div>
      </div>
        
    )
}

export default Home