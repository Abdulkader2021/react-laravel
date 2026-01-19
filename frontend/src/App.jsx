import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Login from './components/backend/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';
import {default as ShowServices} from './components/backend/services/Show';
import {default as CreateServices} from './components/backend/services/Create';
import {default as EditServices} from './components/backend/services/Edit';




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin/login' element={<Login />} />



          <Route path='/admin/dashboard' element=
            <RequireAuth>
                  {<Dashboard />} 
            </RequireAuth>
            
          />
         
          <Route path='/admin/services' element=
            <RequireAuth>
                  {<ShowServices />} 
            </RequireAuth>
            
          />
         
          <Route path='/admin/services/create' element=
            <RequireAuth>
                  {<CreateServices />} 
            </RequireAuth>
          />
          
          <Route path='/admin/services/edit/:id' element=
            <RequireAuth>
                  {<EditServices />} 
            </RequireAuth>
          />

        </Routes>
      </BrowserRouter>

      <ToastContainer 
        position="top-right"
      />

    </>
  )
}

export default App
