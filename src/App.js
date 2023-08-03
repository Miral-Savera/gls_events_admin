import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/home" element={<Home/>} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
