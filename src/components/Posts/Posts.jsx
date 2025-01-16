import React from 'react'
import Post from '../Post/Post'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../features/posts/postSlice'
import { Link } from 'react-router-dom'
import "./Posts.scss"
import { Button } from 'antd'


const Posts = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getAll())
  },[])
  return (
    <div className="addPostButton">   
        <Post/>
    </div>
  )
}

export default Posts