import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Propiedades from './views/Propiedades';
import Administracion from './views/Administracion';
import Login from './views/Login';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/propiedades' element={<Propiedades />} />
          <Route path='/propiedades/:id' element={<Propiedades />} />
          <Route
            path='/admin'
            element={user ? <Administracion /> : <Navigate to='/login' />}
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App