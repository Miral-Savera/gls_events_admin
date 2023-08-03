import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Dashboard from './dashboard/Dashboard';


function Home() {
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
