import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-wrapper-before"></div>
                    <Breadcrumbs />
                    <div className="content-body">
                        <section id="chartjs-bar-charts">
                            <Dashboard/>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
export default App;
