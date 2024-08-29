import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideMenu from './component/SideMenu';

function App() {
  const matches = useMediaQuery('(min-width:600px)');
  // const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      {matches ? <></> : <SideMenu />}
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;