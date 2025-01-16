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
              Mern <HomeOutlined />
          </Link>
            <div className="searchbar">
              <Input onKeyUp={handleChange} placeholder="Buscar publicación" name="text" />
            </div>
        </div>
          {user ? (
            <>
            <Link to="/profile">{user.name} <UserOutlined /></Link>
            <Link to="/AddPost"><Button  type="primary">Añadir publicación</Button></Link>

            <Button onClick={onLogout}>Logout</Button>
            </>
          ) : (
            
            <div className="right">
              <button><Link className="normal-link" to="/login">Iniciar sesión</Link> </button>
              <button><Link className="normal-link" to="/register">Register</Link></button>
            </div>
        )}
          
          </div>
        <div className="line"></div>
    </div>
  )
}

export default Header;