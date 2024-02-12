import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
function App() {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/hotels' element={<List/>}></Route>
                <Route path='/hotels/:id'element={<Hotel/>} ></Route>
            </Routes>
        </div>
    </BrowserRouter>
    
  )
}

export default App