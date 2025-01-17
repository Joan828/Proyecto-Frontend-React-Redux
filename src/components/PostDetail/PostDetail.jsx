import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getById } from '../../features/posts/postSlice';
import Meta from 'antd/es/card/Meta';
import { Card } from 'antd';

const PostDetail = () => {
    const {_id} = useParams()
    const {post} = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getById(_id))
    },[])

  return (
    <div className="posts-profile">
    <Card
        key={post._id}
        hoverable
        style={{
          width: 268,
        }}
        cover={
        <Link to={"/postDetail/" + post._id}>
            <img
            alt="img coche"
            height={400}
            src="https://imgs.search.brave.com/GJciMSDNeVCvVj5g-aP_GkW0VNr89qaAFcgxZrzMeKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/ZGlzcGFyby12ZXJ0/aWNhbC1wYWlzYWpl/LXZlcmRlLXF1ZS1y/ZWZsZWphLWxhZ28t/cGVyZGlkby13aGlz/dGxlci1iYy1jYW5h/ZGFfMTgxNjI0LTQ0/ODU1LmpwZz9zZW10/PWFpc19oeWJyaWQ"
          />
        </Link>
        }
      >
        <Link to={"/postDetail/"+post._id}>        
            <Meta title={post.title} description={post.body}/>
        </Link>
        Me gustas: {post.likes?.length}
      </Card>
      <p>
      <Card
        key={post._id}
        hoverable
        style={{
          width: 400,
        }}
      >
       <Meta title={"Publicación creada por: " + post.userId?.name} description={"El día " + post.createdAt}/>
      </Card>
      </p>
      </div>
    // <div>
    //     <p>Título: {post.title}</p>
    //     <p>Contenido: {post.body}</p>
    //     <p>Likes: {post.likes?.length }</p>
    //     <p>Creado por: {post.userId?.name}</p>
    //     <p>Creado el {post.createdAt}</p>
    //     <p>Última modificación: {post.updatedAt}</p>
    // </div>
  )
}

export default PostDetail