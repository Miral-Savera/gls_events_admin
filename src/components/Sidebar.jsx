import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item mr-auto"><a className="navbar-brand" href="index.html"><img className="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
                            <h3 className="brand-text">Chameleon</h3></a></li>
                        <li className="nav-item d-md-none"><a className="nav-link close-navbar"><i className="ft-x"></i></a></li>
                    </ul>
                </div>
                <div className="main-menu-content">
                    <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                        <li className=" nav-item"><a href="index.html"><i className="ft-home"></i><span className="menu-title" data-i18n="">Dashboard</span></a>
                        </li>
                    </ul>
                </div>
                <div className="navigation-background"></div>
            </div>
        </div>
    )
}

export default Sidebar
