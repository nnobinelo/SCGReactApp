import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer grey darken-3 valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m9">
                            <div className="container">
                                <div className="row">
                                    <div className="col s12 center-align">
                                        <h5>CHECK OUT OUR SOCIALS</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s4">
                                        <div className="centerFlexbox">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SCGTweetMachine" className="crossFadeImages centerFlexbox zoomImage zoomCenter" style={{ height: '60px', width: '60px' }}>
                                                <img src="/images/twitterIcon.png" alt="social icon" className="bottom responsive-img" width="60" height="60" />
                                                <img src="/images/twitterIconBW.png" alt="social icon" className="top responsive-img" width="60" height="60" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col s4">
                                        <div className="centerFlexbox">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/simplyconnectedgames" className="crossFadeImages centerFlexbox zoomImage zoomCenter" style={{ height: '60px', width: '60px' }}>
                                                <img src="/images/instagramIcon.png" alt="social icon" className="bottom responsive-img" width="60" height="60" />
                                                <img src="/images/instagramIconBW.png" alt="social icon" className="top responsive-img" width="60" height="60" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col s4">
                                        <div className="centerFlexbox">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/simplyconnectedgames" className="crossFadeImages centerFlexbox zoomImage zoomCenter" style={{ height: '60px', width: '60px' }}>
                                                <img src="/images/facebookIcon.png" alt="social icon" className="bottom responsive-img" width="60" height="60" />
                                                <img src="/images/facebookIconBW.png" alt="social icon" className="top responsive-img" width="60" height="60" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m3 valign-wrapper" style={{ height: "153.23px" }}>
                            <ul>
                                <li><NavLink to="/" className="grey-text">GAMES</NavLink></li>
                                <li><NavLink to="/contact" className="grey-text">CONTACT</NavLink></li>
                                <li><NavLink to="/privacy" className="grey-text">PRIVACY</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="black">
                <div className="grey-text text-darken-2 center" style={{ minHeight: '50px', paddingTop: '12px' }}>
                    © 2018 Nnaji Obinelo
                </div>
            </div>
        </div>
    )
}

export default Footer