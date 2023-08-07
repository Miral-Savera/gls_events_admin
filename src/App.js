import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home/*" element={<Home/>} />
                </Routes>
            </Router>

            <ToastContainer />

        </>
    );
}
export default App;
