import React, { useEffect, useState } from 'react'
import { register, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from "antd";
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()

    const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Éxito!",
        description: message,
      });
    }
    if (isError) {
        notification.error({ message: "Error", description: message });
      }  

    dispatch(reset())

  }, [isSuccess, isError, message]);


    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            return notification.error({
                message: "Error",
                description: "Las contraseñas no coinciden",
            });
        } else {
         await   dispatch(register(formData))
            return navigate("/")
        }
        
    }

  return (
    <div className="background">
      <div className="register-container">
          <div className="register-card">
            <div className="center">
              <h1>Registrarse</h1>
              <form className="register-form" onSubmit={onSubmit}>
                  <input type="text" name="name" value={name} onChange={onChange} placeholder="Nombre"/>
                  <input type="email" name="email" value={email} onChange={onChange} placeholder="Correo electrónico"/>
                  <input type="password" name="password" value={password} onChange={onChange} placeholder="Contraseña"/>
                  <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Confirmar contraseña"/>
                  <input type="date" name="birthday" value={birthday} onChange={onChange} />
                  <div className="button-div">
                    <button type="submit" className="button-link">Registrarse</button>
                  </div>
              </form>
              <p className="register-link">Si ya tienes una cuenta, inicia sesión <Link to="/login">aquí</Link></p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Register