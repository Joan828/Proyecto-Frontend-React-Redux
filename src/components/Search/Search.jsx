import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getByTitle } from '../../features/posts/postSlice'
import Post from '../Post/Post'

const Search = () => {
    const {title} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getByTitle(title))
    },[title])
  return (
    <div>
        <Post/>
    </div>
  )
}

export default Search