import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../features/auth/authSlice';
import Post from '../Post/Post';
import { getAll } from '../../features/posts/postSlice';

const Profile = () => {
  const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    useEffect(()=>{
      dispatch(getInfo())
      dispatch(getAll())
    },[])

  return (
    <div>
         <p>Nombre: {user.name}</p>
        <p>Correo electrónico: {user.email}</p>
        <p>Fecha de nacimiento: {user.birthday}</p>
        <p>Rol: {user.role}</p>
        <Post/>
    </div>
  )
}

export default Profile