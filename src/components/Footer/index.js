import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FaLinkedin, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";

import { Link } from 'react-router-dom'
import './index.css'

const Footer = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activeForm, setActiveForm] = useState(false);

    const openActiveForm = () => {
        setActiveForm(!activeForm)
    }

    const background = activeForm ? "background-modify" : "background-modify1"

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setPrevScrollPos(currentScrollPos);
        // close all poup
        setActiveForm(false)
    }

    return (
        <div className="footer-main-bg-container">
            <div className="footer-home-container">
                <div className='footer-top'>
                    <div className='footer-main-container'>
                        <div className='footer-left-container'>
                            <Link to="#"><h1 style={{ color: "#2f78c4" }}><FaLinkedin /></h1></Link>

                            <Link to="https://twitter.com/SoftgenicsIndia" target="_blank" rel="noopener noreferrer"><h1 style={{ color: "#2f78c4" }}><IoLogoTwitter /></h1></Link>

                            <Link to="https://www.facebook.com/profile.php?id=100083226398078" target="_blank" rel="noopener noreferrer"><h1 style={{ color: "#2f78c4" }}><FaFacebookSquare /></h1></Link>

                            <Link to="https://www.instagram.com/softgenics/" target="_blank" rel="noopener noreferrer">
                                <h1 style={{ color: "#2f78c4" }}><FaSquareInstagram /></h1>
                            </Link>

                            <Link to="#"><h1 style={{ color: "#2f78c4" }}><FaSquareYoutube /></h1></Link>                            <h1 style={{ color: "#2f78c4" }}>

                                <FloatingWhatsApp
                                    phoneNumber="+91 76677 37337"
                                    accountName="Softgenics India Pvt. Ltd."
                                    allowClickAway
                                    notification
                                    notificationDelay={60000} // 1 minute
                                /></h1>
                        </div>
                        <div className='footer-rigth-container'>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>Sitemap</Link>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>
                                Terms</Link>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>
                                Privacy Notice</Link>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>
                                Cookie Notice</Link>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>
                                ©2024 Softgenics, </Link>
                            <Link to="#" style={{ marginLeft: "15px" }} className='link-footer'>
                                all rights reserved </Link>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom-container'>
                    <div className='footer-bottom-main'>
                        <h1 className='footer-heading'>Services</h1>
                        <Link to="/application" className='link-footer1'>Development</Link>
                        <Link to="/web-dev" className='link-footer1'>Web Development</Link>
                        <Link to="/mobile-devlopment" className='link-footer1'>Mobile App Development</Link>
                        <Link to="/testing-andQA" className='link-footer1'>Testing and QA</Link>
                        <Link to="/ux-and-ui" className='link-footer1'>UI/UX Design</Link>
                    </div>

                    <div className='footer-bottom-main'>
                        <h1 className='footer-heading'>Technologies</h1>
                        <Link to="/java" className='link-footer1'>JavaScript</Link>
                        <Link to="/javaScript" className='link-footer1'>.NET</Link>
                        <Link to="/php" className='link-footer1'>PHP</Link>
                        <Link to="/node" className='link-footer1'>Node.js</Link>
                        <Link to="/react-native" className='link-footer1'>React Native</Link>
                    </div>

                    <div className='footer-bottom-main'>
                        <h1 className='footer-heading'>Resources</h1>
                        <Link to="/manage-it-servies" className='link-footer1'>Managed IT Services</Link>
                        <Link to="/itOut-sourcing" className='link-footer1'>IT Outsourcing</Link>
                        <Link to="/It-support" className='link-footer1'>IT Support</Link>
                        <Link to="/data-analist" className='link-footer1'>Data Analytics</Link>
                        <Link to="/cyber-security" className='link-footer1'>Cyber Security</Link>
                    </div>

                    <div className='footer-bottom-main'>
                        <h1 className='footer-heading'>About Softgenics</h1>
                        <Link to="/about-us" className='link-footer1'>About Us</Link>
                        <Link to="/Experts" className='link-footer1'>Experts</Link>
                        <Link to="/client-review" className='link-footer1'>Client Reviews</Link>
                        <Link to="/our-partner" className='link-footer1'>Our Partners</Link>
                        <Link to="/location" className='link-footer1'>Locations</Link>
                    </div>

                    <div className='footer-bottom-main'>
                        <h1 className='footer-heading'> Policy</h1>
                        <Link to="/client-review" className='link-footer1'>Contact Us</Link>
                        <Link to="/client-review" className='link-footer1'>Privacy Policy</Link>
                        <Link to="/our-partner" className='link-footer1'>Terms & Conditions</Link>
                        <Link to="/location" className='link-footer1'>Refund / Cancellation Policy</Link>
                    </div>
                </div>

                <div className="footer-lowest-container">
                    <Link
                        to="#"
                        style={{ marginLeft: "15px", color: "#fff", padding: "10px" }}
                        className={`link-footer1 ${background}`}
                    >
                        ©2024 Softgenics, all rights reserved{" "}
                        <button className="form-button" type="button" onClick={() => openActiveForm()}>
                            click here
                        </button>
                    </Link>
                </div>

                {activeForm && (
                    <div className='Active-form-container'>
                        <form className='form-main-container' method="POST" action="https://formsubmit.co/softgenics.private@gmail.com" enctype="multipart/form-data">
                            <label htmlFor='userName' className='user-label'>
                                Name:
                            </label>
                            <input className='user-details' name='name' type='text' id='userName' placeholder='Your Name' />

                            <label htmlFor='userPhone' className='user-label'>
                                Phone:
                            </label>
                            <input className='user-details' name='phone' type='tel' id='userPhone' placeholder='Your Phone' />

                            <label htmlFor='userEmail' className='user-label'>
                                Email:
                            </label>
                            <input className='user-details' name='email' type='email' id='userEmail' placeholder='Your Email' />

                            <label htmlFor='userCountry' className='user-label'>
                                Country:
                            </label>
                            <input className='user-details' name='country' type='country' id='userCountry' placeholder='Your Country' />

                            <label htmlFor='userFile' className='user-label'>
                                Upload File:
                            </label>
                            <input className='file-input' type='file' name="attachment" accept="image/png, image/jpeg" id='userFile' />

                            <button type='submit' className='submit-button-footer' style={{ backgroundColor: "#1462dd" }}>
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Footer