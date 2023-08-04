import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home/*" element={<Home/>} />
                </Routes>
            </Router>
        </>
    );
}
export default App;
