import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
    status="404"
    title="Error 404"
    subTitle="Disculpe, la página que ha visitado no existe, compruebe la url/ruta."
    extra={
     <Link to="/"> 
        <Button type="primary">Volver al inicio</Button>
    </Link>  }
  />
  )
}

export default NotFound