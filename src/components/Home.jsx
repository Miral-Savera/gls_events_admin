import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Dashboard from './dashboard/Dashboard';
import $ from "jquery";

function Home() {

	const navigate = useNavigate();
    useEffect( () => {

        if(!localStorage.getItem('authtoken')){
			navigate('/');
		}

        let loadTime = new Date();
        let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
        let refreshTime = loadTime.getTime() - unloadTime.getTime();

        if(refreshTime>1800000)
        {
            window.localStorage.removeItem("authtoken");
            window.localStorage.removeItem("refreshTime");
            navigate('/');
        }

        $(function () {
            $('body').attr('data-color','bg-gradient-x-purple-blue');
            $('body').addClass('vertical-layout vertical-menu 2-columns fixed-navbar menu-expanded pace-done');
        });
    });

  return (
    <>
        <Navbar />
        <Sidebar />
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-wrapper-before"></div>
                    <Breadcrumbs />
                    <div className="content-body">
                        <Routes>
                            <Route exact path="/" element={<Dashboard/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Home
