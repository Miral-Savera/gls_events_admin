import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Sidebar />
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-wrapper-before"></div>
                        <Breadcrumbs />
                        <div className="content-body">
                            <section id="chartjs-bar-charts">
                                <Routes>
                                    <Route exact path="/" element={<Dashboard />} />
                                </Routes>
                            </section>
                        </div>
                    </div>
                </div>
            <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
