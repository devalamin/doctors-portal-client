import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/shared/Footer/Footer';
import Navbar from '../pages/Home/Home/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;