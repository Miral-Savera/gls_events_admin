import React from 'react'
import { Link,useLocation} from 'react-router-dom'

function Sidebar() {

    let location = useLocation();

    return (
        <div>
            <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mr-auto"><Link className="navbar-brand" to="/"><img className="brand-logo" alt="Chameleon admin logo" src="https://upload.wikimedia.org/wikipedia/en/6/6c/GLS_University_logo.png" />
                            <h3 className="brand-text">GLS University</h3></Link></li>
                        <li className="nav-item d-md-none"><a className="nav-link close-navbar" href="/"><i className="ft-x"></i></a></li>
                    </ul>
                </div>
                <div className="main-menu-content">
                    <ul className="navigation">
                        <li className={`nav-link ${location.pathname === "/admin/dashboard" ? "active" : ""} `}>
                            <Link to="/admin/dashboard"><i className="fas fa-home"></i><span className="menu-title" data-i18n="">Dashboard</span></Link>
                        </li>
                        <li className={`nav-link ${location.pathname === "/admin/department" ? "active" : ""} `}>
                            <Link to="/admin/department"><i className="fas fa-building"></i><span className="menu-title" data-i18n="">Department</span></Link>
                        </li>
                        <li className={`nav-link ${location.pathname === "/admin/course" ? "active" : ""} `}>
                            <Link to="/admin/course"><i className="fas fa-briefcase"></i><span className="menu-title" data-i18n="">Course</span></Link>
                        </li>
                        <li className={`nav-link ${location.pathname === "/admin/faculty" ? "active" : ""} `}>
                            <Link to="/admin/faculty"><i className="fas fa-chalkboard-teacher"></i><span className="menu-title" data-i18n="">Faculty</span></Link>
                        </li>
                        <li className={`nav-link ${location.pathname === "/admin/eventtype" ? "active" : ""} `}>
                            <Link to="/admin/eventtype"><i className="fas fa-th-large"></i><span className="menu-title" data-i18n="">Events Type</span></Link>
                        </li>

                        <li className={`nav-link ${location.pathname === "/admin/eventlocation" ? "active" : ""} `}>
                            <Link to="/admin/eventlocation"><i className="fas fa-map-marker-alt"></i><span className="menu-title" data-i18n="">Events Location</span></Link>
                        </li>
                        <li className={`nav-link ${location.pathname === "/admin/notification" ? "active" : ""} `}>
                            <Link to="/admin/notification"><i className="fas fa-bell"></i><span className="menu-title" data-i18n="">Notification</span></Link>
                        </li>

                        <li className={`nav-link ${location.pathname === "/admin/settings" ? "active" : ""} `}>
                            <Link to="/admin/settings"><i className="fas fa-cog"></i><span className="menu-title" data-i18n="">Settings</span></Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="navigation-background"></div>
            </div>
        </div>
    )
}

export default Sidebar
