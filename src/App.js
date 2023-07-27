import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
    return (
        <>
            <div className="App">
                <Navbar />
                <Sidebar />
                <div className="app-content content">
                    <div className="content-wrapper">
                        <div className="content-wrapper-before"></div>
                        <Breadcrumbs />
                        <div class="content-body">
                        <section id="chartjs-bar-charts">
                        </section>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default App;
