import React, { useState } from 'react'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Nombre"/>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Correo electrónico"/>
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Contraseña"/>
        <button type="submit">Registrarse</button>
    </form>
  )
}
export default Register