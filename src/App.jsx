import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import User from './user'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<User />}></Route>
        <Route path='create' element={<UserCreate />}></Route>
        <Route path='edit/:id' element={<UserEdit />}></Route>
      </Routes>

    </>
  )
}

export default App
