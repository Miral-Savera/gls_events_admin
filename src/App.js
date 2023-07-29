import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <Router>
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
            </Router>
        </>
    );
}
export default App;
