import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const dispatch = useDispatch()
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }
  return (
    <div className="background">
    <div className="login-container">
        <div className="login-card">
            <div className="center">
            <h2>Casi lo tienes...</h2>
            <form className="login-form" onSubmit={onSubmit}>
                <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={email}
                onChange={onChange}
                required
                />
                <input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onChange}
                required
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            <p>Si ya tienes una cuenta, registrate <Link to="/register">aquí</Link></p>
            </div>
        </div>
        </div>
        </div>
  )

}
export default Login