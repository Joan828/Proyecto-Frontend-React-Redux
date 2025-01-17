import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss"
import {HomeOutlined,UserOutlined} from "@ant-design/icons"

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value);
    if(e.key === "Enter"){
        navigate("/search/" + text)
    }
};

  const onLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <div>
      <div className="parent">
        <div className="left">
          <Link className="title" to="/">
              FotoHub <HomeOutlined />
          </Link>
            <div className="searchbar">
              <Input onKeyUp={handleChange} placeholder="Buscar publicación" name="text" />
            </div>
        </div>
          {user ? (
            <div className="right">
            <Link to="/AddPost"><Button  type="primary">Añadir publicación</Button></Link>
            <Link to="/profile" className="profile-name">{user.name} <UserOutlined /></Link>

            <Button onClick={onLogout} type="primary" danger>Cerrar sesión</Button>
            </div>
          ) : (
            
            <div className="right">
              <button className="button-link"><Link className="link" to="/login">Iniciar sesión</Link> </button>
              <button className="button-link"><Link className="link" to="/register">Registrarse</Link></button>
            </div>
        )}
          
          </div>
        <div className="line"></div>
    </div>
  )
}

export default Header;