import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import About from './pages/AboutPage/About';
import Contact from './pages/Contact/Contact';
import HomePage from './pages/Home/HomePage';
import Service from './pages/Service/Service';
import Support from './pages/Support/Support';
import './App.scss';
import Layout from './Layout/Layout';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='service' element={<Service/>}/>
                    <Route path='support' element={<Support/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;