import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import homeApp from './Home'; // Import your components

const App = () => {
    return (
        <BrowserRouter basename="/Solicitud-de-Credito">
            <Routes>
                <Route path="/" exact component={homeApp} />
            </Routes>

        </BrowserRouter>
    );
};

export default App;
