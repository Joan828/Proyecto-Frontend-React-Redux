import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Post = () => {
    const {posts, isLoading}= useSelector(state => state.posts)

    if(isLoading){
        return <p>Esperando a las publicaciones...</p>
    }
    const post = posts.map((post)=>{
        return (
            <div key={post._id}>
                <Link to ={"/postDetail/" + post._id}>
                {post.title}
                </Link>
            </div>
          )
    })
    return (
        <div>
            Títulos: {post}
        </div>
      )
}

export default Post