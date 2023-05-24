import * as React from 'react'
import * as DOMRouter from 'react-router-dom'
import Login from './pages/login'

const App = () =>{
  return (
    <DOMRouter.BrowserRouter>
        <DOMRouter.Routes>

          <DOMRouter.Route path="/login" element={<Login/>} />
        </DOMRouter.Routes>
    </DOMRouter.BrowserRouter>
  )
}

export default App
