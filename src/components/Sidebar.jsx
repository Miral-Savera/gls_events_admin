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
                        <li className="active"><a href="charts.html"><i className="ft-pie-chart"></i><span className="menu-title" data-i18n="">Charts</span></a>
                        </li>
                        <li className=" nav-item"><a href="icons.html"><i className="ft-droplet"></i><span className="menu-title" data-i18n="">Icons</span></a>
                        </li>
                        <li className=" nav-item"><a href="cards.html"><i className="ft-layers"></i><span className="menu-title" data-i18n="">Cards</span></a>
                        </li>
                        <li className=" nav-item"><a href="buttons.html"><i className="ft-box"></i><span className="menu-title" data-i18n="">Buttons</span></a>
                        </li>
                        <li className=" nav-item"><a href="typography.html"><i className="ft-bold"></i><span className="menu-title" data-i18n="">Typography</span></a>
                        </li>
                        <li className=" nav-item"><a href="tables.html"><i className="ft-credit-card"></i><span className="menu-title" data-i18n="">Tables</span></a>
                        </li>
                        <li className=" nav-item"><a href="form-elements.html"><i className="ft-layout"></i><span className="menu-title" data-i18n="">Form Elements</span></a>
                        </li>
                        <li className=" nav-item"><a href="https://themeselection.com/demo/chameleon-admin-template/documentation"><i className="ft-book"></i><span className="menu-title" data-i18n="">Documentation</span></a>
                        </li>
                    </ul>
                </div>
                <div className="navigation-background"></div>
            </div>
        </div>
    )
}

export default Sidebar
