import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { like, unlike } from "../../features/posts/postSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./Post.scss"

const Post = () => {
    const {posts, isLoading}= useSelector(state => state.posts)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(isLoading){
        return <p>Esperando a las publicaciones...</p>
    }
    const post = posts.map((post)=>{
        const isAlreadyLiked = post.likes?.includes(user?._id)
        
        return (
            <div key={post._id}>
                <Link to ={"/postDetail/" + post._id}>
                {post.title}
                </Link>
                <p>Me gustas: {post.likes?.length}
                {user ? (
                    <>
                    {isAlreadyLiked ? (
                        <HeartFilled className="cora" onClick={()=> dispatch(unlike(post._id))  } />
                        ) : (
                        <HeartOutlined onClick={()=> dispatch(like(post._id))  } />
                        )
                    }
                    </>
                    )  : <HeartOutlined onClick={()=>navigate("/login")} />
                }
                </p>
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