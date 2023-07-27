import React from 'react'

function Footer() {

    return (
        <div>
            <footer className="footer footer-static footer-light navbar-border navbar-shadow">
                <div className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2"><span className="float-md-left d-block d-md-inline-block">{new Date().getFullYear()} &copy; Copyright <a className="text-bold-800 grey darken-2" href="#" target="_blank">Team Coding-Sharks</a></span>
                </div>
            </footer>
        </div>
    )
}

export default Footer

