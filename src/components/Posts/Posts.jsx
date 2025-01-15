import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../features/posts/postSlice'
import { Link } from 'react-router-dom'


const Posts = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getAll())
  },[])
  return (
    <div>Posts
      {user ? 
      <>
        <br/><Link to="/AddPost">Añadir publicación + </Link><br/>
      </>
      : null }
      
        <Post/>
    </div>
  )
}

export default Posts