import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const scroll2Top = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            {/* main navbar */}
            <div className="navbar-fixed">
                <nav id="navbarAnim" className="black">
                    <div className="nav-wrapper container">
                        <NavLink to="/" className="brand-logo">
                            <div className="navbarTitle" style={{ whiteSpace: 'nowrap' }}>NNAJI OBINELO</div>
                        </NavLink>
                        <a href="#!" data-target="mobile-navlinks" className="sidenav-trigger">
                            <i className="material-icons">apps</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/" className="redHighlightText">GAMES</NavLink></li>
                            <li><NavLink to="/contact" className="redHighlightText">CONTACT</NavLink></li>
                            <li><NavLink to="/privacy" className="redHighlightText">PRIVACY</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav black" id="mobile-navlinks">
                <li><NavLink className="white-text sidenav-close" to="/"><h4 className="redHighlightText">GAMES</h4></NavLink></li>
                <li><NavLink className="white-text sidenav-close" to="/contact"><h4 className="redHighlightText">CONTACT</h4></NavLink></li>
                <li><NavLink className="white-text sidenav-close" to="/privacy"><h4 className="redHighlightText">PRIVACY</h4></NavLink></li>
            </ul>
            
            {/* scroll up button */}
            <div className="fixed-action-btn">
                <div id="scrollButton" className="crossFadeImages zoomImage zoomCenter" onClick={scroll2Top} style={{ height: '60px', width: '60px' }}>
                    <img src="/images/upBoxReversed.png" alt="social icon" className="bottom responsive-img" width="60" height="60" />
                    <img src="/images/upBox.png" alt="social icon" className="top responsive-img" width="60" height="60" />
                </div>
            </div>
        </div>
    )
}

export default Navbar