import React, { useState } from 'react'
import "./AddPost.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { addPost } from '../../features/posts/postSlice'

const AddPost = () => {
    const [formData, setFormData] = useState({
        title:'',
        body:''
    })
    const {title, body} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

   const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        await dispatch(addPost(formData))
        navigate("/")
    }
  return (
    <div className="background">
    <div className="login-container">
        <div className="login-card">
            <div className="center">
            <h2>Añadir publicación</h2>
            <form className="login-form" onSubmit={onSubmit}>
                <input
                type="text"
                placeholder="Título"
                name="title"
                value={title}
                onChange={onChange}
                required
                />
                <input
                type="text"
                placeholder="Contenido"
                name="body"
                value={body}
                onChange={onChange}
                required
                />
                <button type="submit">Añadir</button>
            </form>
            <Button ><Link to="/">Home</Link></Button >
            </div>
        </div>
        </div>
        </div>
  )
}

export default AddPost