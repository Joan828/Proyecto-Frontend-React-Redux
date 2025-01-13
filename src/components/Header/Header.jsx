import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <div>
      <Link to="/">Home</Link> /
      {user ? (
        <>
        <Link to="/profile">{user.name}</Link>
          <Button onClick={onLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> /<Link to="/register">Register</Link> /
        </>
      )}
    </div>
  );
};

export default Header;