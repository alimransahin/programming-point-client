import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import Sidebar from '../Share/SideBar/Sidebar';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <div className='row my-4'>
                <div className='col-md-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;