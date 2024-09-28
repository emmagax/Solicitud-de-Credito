import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login.jsx';
import Home from '../components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Routes>
            <Route path="/Solicitud-de-Credito" element={<Login />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

export default App;
