import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Footer from './components/Footer'
import Welcome from './pages/welcome/Welcome'
function App() {
  const {authIsReady, user} = useAuthContext()
  return (
    <div className='font-inter'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/login' element={!user ? <Login/> : <Navigate to='/home'/>}/>
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/home'/>}/>
            <Route path='/home' element={user ? <Home/> : <Navigate to='/'/>}/>
            <Route path='/' element={!user ? <Welcome/> : <Navigate to='/home'/>}/>
            <Route 
                path='/recipe/:id' 
                element={user ? <Recipe/> : <Navigate to='/'/>}
              />
          </Routes>
          {user && <Footer/>}
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
