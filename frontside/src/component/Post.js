import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/Post.css"

function Post() {
  let { id } = useParams()
  const [postData, setPostData] = useState({})
  const [commentData, setCommentData] = useState([])
  const [newCommentData, setNewCommentData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then( (response) => {
      setPostData(response.data)
    })
    axios.get(`http://localhost:3001/comments/${id}`).then( (response) => {
      setCommentData(response.data)
    })
  }, [])

  const onSubmitComment = async () => {
      await axios.post("http://localhost:3001/comments", {commentBody: newCommentData , PostId: id }).then((response) => {
        const commentToAdd = { commentBody: newCommentData }
        setCommentData([...commentData, commentToAdd])
        setNewCommentData("")
      })

  }

  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className='post'>
          <div className='title'>{postData.title}</div>
          <div className='body'>{postData.postText}</div>
          <div className='footer'>{postData.username}</div>
        </div>
      </div>
      <div className='rightSide'>
        <div className='addCommentContainer'>
          <input type='text' placeholder='Comment...' value={newCommentData} autoComplete='off' onChange={(event) => { setNewCommentData(event.target.value) }} />
          <button onClick={onSubmitComment}>Add Comment</button>
        </div>
        <div className='listOfComments'>
          {commentData.map((comment, key) => {
            return <div className='comment' key={key}>{comment.commentBody}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Post