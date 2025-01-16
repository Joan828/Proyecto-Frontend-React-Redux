import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../features/posts/postSlice';

const PostDetail = () => {
    const {_id} = useParams()
    const {post} = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getById(_id))
    },[])

  return (
    <div>PostDetail
        <p>Título: {post.title}</p>
        <p>Contenido: {post.body}</p>
        <p>Likes: {post.likes?.length }</p>
        <p>Creado por: {post.userId?.name}</p>
        <p>Creado el {post.createdAt}</p>
        <p>Última modificación: {post.updatedAt}</p>
    </div>
  )
}

export default PostDetail