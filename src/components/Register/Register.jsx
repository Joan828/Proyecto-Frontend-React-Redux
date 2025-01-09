import React, { useState } from 'react'
import { register } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { notification } from "antd";

const Register = () => {   
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2: '',
        birthday: ''
    })
    const {name,email,password, password2, birthday} = formData
    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            return notification.error({
                message: "Error",
                description: "Las contraseñas no coinciden",
            });
        } else {
            return dispatch(register(formData));
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Nombre"/>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Correo electrónico"/>
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Contraseña"/>
        <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Confirmar contraseña"/>
        <input type="date" name="birthday" value={birthday} onChange={onChange} />
        <button type="submit">Registrarse</button>
    </form>
  )
}
export default Register