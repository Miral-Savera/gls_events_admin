import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Dashboard from './dashboard/Dashboard';
import $ from "jquery";
import Department from './department/Department';
import Course from './course/Course';
import Faculty from './faculty/Faculty';

function Home() {

	const navigate = useNavigate();
    useEffect( () => {

        if(!localStorage.getItem('authtoken')){
			navigate('/');
		}

        let loadTime = new Date();
        let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
        let refreshTime = loadTime.getTime() - unloadTime.getTime();

        // if(refreshTime!==0){
        //     if(refreshTime>1800000)
        //     {
        //         window.localStorage.removeItem("authtoken");
        //         window.localStorage.removeItem("refreshTime");
        //         navigate('/');
        //     }
        // }

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
                    <div className="content-body">
                        <Routes>
                            <Route exact path="/dashboard" element={<Dashboard/>} />
                            <Route exact path="/department" element={<Department/>} />
                            <Route exact path='/course' element={<Course/>} />
                            <Route exact path='/faculty' element={<Faculty/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Home
