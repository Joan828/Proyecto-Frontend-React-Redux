import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import PostDetail from './components/PostDetail/PostDetail'
import Search from './components/Search/Search'
import PrivateZone from './guards/PrivateZone'
import Admin from './components/Admin/Admin'
import AdminZone from './guards/AdminZone'
import NotFound from './components/NotFound/NotFound'
import AddPost from './components/AddPost/AddPost'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={ <Home/>} />
        <Route path="/admin" element={ 
          <AdminZone>
            <Admin/>
          </AdminZone>
          } />
        <Route path="/profile" element={ 
          <PrivateZone>
            <Profile/>
          </PrivateZone>} 
        />
        <Route path="/postDetail/:_id" element={ <PostDetail/>} />
        <Route path="/search/:title" element={ <Search/>} />
        <Route path="/addPost" element={ <AddPost/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
