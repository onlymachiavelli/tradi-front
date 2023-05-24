import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
        <DOMRouter.Routes>

          <DOMRouter.Route path="/login" element={<Login/>} />
          <DOMRouter.Route path="/register" element={<Register/>} />
          <DOMRouter.Route path="/" element={<Home/>} />
          <DOMRouter.Route path="/dashboard" element={<Dashboard/>} />
        </DOMRouter.Routes>
    </DOMRouter.BrowserRouter>
  )
}

export default App
