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
                        <li className={`nav-link ${location.pathname === "/" ? "active" : ""} `}>
                            <Link to="/home"><i className="ft-home"></i><span className="menu-title" data-i18n="">Dashboard</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="navigation-background"></div>
            </div>
        </div>
    )
}

export default Sidebar