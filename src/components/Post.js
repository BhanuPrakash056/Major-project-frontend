import React from 'react'
import "./css/Post.css"
function Post() {
  return (
    <div className="post">
        <div className='post__info'>
            <h5>Username1</h5>
            <small>Time Stump</small>
        </div>
        <div className='post__body'>
        <div className="post__question">
        <p></p>
          <button className="post__btnAnswer">
          Answer
          </button>
          </div>
        </div>
        <div className='post__ansnwer'>
        <div className='post-answer-container'>
        <div className='post-answered'>
        <div className='post-info'>
        <p>Username</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Post