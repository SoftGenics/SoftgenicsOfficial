import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { CiGlobe } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoReorderThreeSharp } from "react-icons/io5";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

import './index.css'

const Header = () => {
    // web header
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [servicesClicked, setServicesClicked] = useState(false);
    const [industriusClicked, setIndustriusClicked] = useState(false);
    const [ecosystemClicked, setEcosystemClicked] = useState(false);
    const [aboutusClicked, setAboutusClicked] = useState(false);
    const [resourcesClicked, setResourcesClicked] = useState(false);
    const [careersClicked, setCareersClicked] = useState(false);
    const [digitalClicked, setDigitalClicked] = useState(false);
    const [engineeringClicked, setEngineeringClicked] = useState(false);
    const [cloudClicked, setCloudClicked] = useState(false);
    const [aiClicked, setAiClicked] = useState(false);
    // mobile header
    const [mobileHeader, setMobileHeader] = useState(false);
    const [mobServies, setMobServies] = useState(false)
    const [mobIndustrius, setMobIndustrius] = useState(false)
    const [mobEcosystem, setMobEcosystem] = useState(false)
    const [mobAbout, setMobAbout] = useState(false)
    const [mobResources, setMobResources] = useState(false)
    const [mobCareers, setMobCareers] = useState(false)


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
        setAiClicked(false)
        setCloudClicked(false)
        setEngineeringClicked(false)
        setDigitalClicked(false)
        setServicesClicked(false);
        setIndustriusClicked(false)
        setEcosystemClicked(false)
        setAboutusClicked(false)
        setResourcesClicked(false)
        setCareersClicked(false)
        setMobileHeader(false)
    };

    const handleServicesClick = (type) => {
        switch (type) {
            case 'services':
                setServicesClicked(!servicesClicked);
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setIndustriusClicked(false)
                setEcosystemClicked(false)
                setAboutusClicked(false)
                setResourcesClicked(false)
                setCareersClicked(false)
                break;
            case 'industrius':
                setIndustriusClicked(!industriusClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setServicesClicked(false)
                setEcosystemClicked(false)
                setAboutusClicked(false)
                setResourcesClicked(false)
                setCareersClicked(false)
                break;
            case 'ecosystemClicked':
                setEcosystemClicked(!ecosystemClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                setAboutusClicked(false)
                setResourcesClicked(false)
                setCareersClicked(false)
                break;
            case 'aboutusClicked':
                setAboutusClicked(!aboutusClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                setResourcesClicked(false)
                setCareersClicked(false)
                break;
            case 'resourcesClicked':
                setResourcesClicked(!resourcesClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                setCareersClicked(false)
                break;

            case 'careersClicked':
                setCareersClicked(!careersClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setResourcesClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                break;

            case 'digitalClicked':
                setDigitalClicked(!digitalClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setCareersClicked(false)
                setResourcesClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                break;

            case 'engineeringClicked':
                setEngineeringClicked(!engineeringClicked)
                setAiClicked(false)
                setCloudClicked(false)
                setDigitalClicked(false)
                setCareersClicked(false)
                setResourcesClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                break;

            case 'cloudClicked':
                setCloudClicked(!cloudClicked)
                setAiClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setCareersClicked(false)
                setResourcesClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                break;

            case 'aiClicked':
                setAiClicked(!aiClicked)
                setCloudClicked(false)
                setEngineeringClicked(false)
                setDigitalClicked(false)
                setCareersClicked(false)
                setResourcesClicked(false)
                setAboutusClicked(false)
                setEcosystemClicked(false)
                setIndustriusClicked(false)
                setServicesClicked(false)
                break;

            default:
                // Default case
                break;
        }
    };

    // mobile function
    const openMobilePopup = (type) => {
        switch (type) {
            case 'onMobServies':
                setMobServies(!mobServies)
                setMobIndustrius(false)
                setMobEcosystem(false)
                setMobAbout(false)
                setMobResources(false)
                setMobCareers(false)
                break;
            case 'onMobIndustrius':
                setMobIndustrius(!mobIndustrius)
                setMobServies(false)
                setMobEcosystem(false)
                setMobAbout(false)
                setMobResources(false)
                setMobCareers(false)
                break;
            case 'onMobEcosystem':
                setMobEcosystem(!mobEcosystem)
                setMobIndustrius(false)
                setMobServies(false)
                setMobAbout(false)
                setMobResources(false)
                setMobCareers(false)
                break;
            case 'onMobAbout':
                setMobAbout(!mobAbout)
                setMobEcosystem(false)
                setMobIndustrius(false)
                setMobServies(false)
                setMobResources(false)
                setMobCareers(false)
                break;
            case 'onMobResources':
                setMobResources(!mobResources)
                setMobAbout(false)
                setMobEcosystem(false)
                setMobIndustrius(false)
                setMobServies(false)
                setMobCareers(false)
                break;
            case 'onMobCareers':
                setMobCareers(!mobCareers)
                setMobAbout(false)
                setMobEcosystem(false)
                setMobIndustrius(false)
                setMobServies(false)
                setMobResources(false)
                break;

            default:
                break;
        }
    }

    const openMobileHeader = () => {
        setMobileHeader(!mobileHeader)
    }

    return (
        <div className='header-main-container'>
            {/* mobile */}
            <div className='header-mobile-container'>
                <div className='mobile-top-nav'>
                    <h1 onClick={() => { openMobileHeader() }}><IoReorderThreeSharp color='#fff' /></h1>
                    {mobileHeader && (
                        <div className='popup popup-digital mobileHeader'>
                            <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobServies')}>
                                Services
                            </Link>
                            {mobServies && (<div className='mobile-popup'>
                                <Link to="/application" className='link-classes3 color-change'>Development</Link>
                                <Link to="/web-dev" className='link-classes3 color-change'>Web Development</Link>
                                <Link to="/mobile-devlopment" className='link-classes3 color-change'>Mobile App Development</Link>
                                <Link to="/testing-andQA" className='link-classes3 color-change'>Testing and QA</ Link>
                                <Link to="/application-and-server" className='link-classes3 color-change'>Application Services</Link>
                                <Link to="/ux-and-ui" className='link-classes3 color-change'>UI/UX Design</Link>
                                <Link to="/Infrastrucher-servies" className='link-classes3 color-change'>Infrastructure Services</Link>
                                <Link to="/word-press" className='link-classes3 color-change'>Wordpress </Link>
                            </div>)}


                            <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobIndustrius')}>
                                Product
                            </Link>
                            {mobIndustrius && (
                                <div className='mobile-popup'>
                                    <Link to="/erp" className='link-classes3 color-change'>ERP</Link>
                                    <Link to="/opration-managment" className='link-classes3 color-change'>Operations Management</Link>
                                    <Link to="/finacial-managment" className='link-classes3 color-change'>Financial Management</Link>
                                    <Link to="/payment-managment" className='link-classes3 color-change'>Payment Management</Link>
                                    <Link to="/supply-chainMang" className='link-classes3 color-change'>Supply Chain Management</Link>
                                    <Link to="/data-analist" className='link-classes3 color-change'>Data Analytics</Link>
                                    <Link to="/assest-management" className='link-classes3 color-change'>Asset Management</Link>
                                    <Link to="/fleet-managment" className='link-classes3 color-change'>Fleet Management</Link>
                                    <Link to="/human-resorce" className='link-classes3 color-change'>Human Resources</Link>
                                    <Link to="/e-learning" className='link-classes3 color-change'>eLearning</Link>
                                    <Link to="/document-managment" className='link-classes3 color-change'>Document Management</Link>
                                    <Link to="/project-managment" className='link-classes3 color-change'>Project Management</Link>
                                    <Link to="/crm" className='link-classes3 color-change'>CRM</Link>

                                    <Link to="/ecommerce" className='link-classes3 color-change'>Ecommerce</Link>
                                    <Link to="/marketing-and-adv" className='link-classes3 color-change'>Marketing & Advertising</Link>
                                    <Link to="/contact-managment" className='link-classes3 color-change'>Content Management</Link>
                                    <Link to="/kiosk-software" className='link-classes3 color-change'>Web Portals</Link>
                                    <Link to="/web-portal" className='link-classes3 color-change'>Kiosk Software</Link>

                                </div>
                            )}

                            {/* <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobEcosystem')}>
                                Ecosystem
                            </Link>
                            {mobEcosystem && (
                                <div className='mobile-popup'>
                                    <Link to="#" className='link-classes3 color-change'>Industrius</Link>
                                    <Link to="#" className='link-classes3 color-change'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3 color-change'>About Us</Link>
                                    <Link to="#" className='link-classes3 color-change'>Resources</Link>
                                    <Link to="#" className='link-classes3 color-change'>Careers</Link>
                                </div>
                            )} */}

                            <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobAbout')}>
                                About Us
                            </Link>
                            {mobAbout && (
                                <div className='mobile-popup'>
                                    <Link to="/about-us" className='link-classes3 color-change'>About Company</Link>
                                    <Link to="/Experts" className='link-classes3 color-change'>Experts</Link>
                                    <Link to="/client-review" className='link-classes3 color-change'>Client Reviews</Link>
                                    <Link to="/our-partner" className='link-classes3 color-change'>Our Partners</Link>
                                    <Link to="/location" className='link-classes3 color-change'>Locations</Link>
                                </div>
                            )}

                            <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobResources')}>
                                Resources
                            </Link>
                            {mobResources && (
                                <div className='mobile-popup'>
                                    <Link to="/manage-it-servies" className='link-classes3 color-change'>Managed IT Services</Link>
                                    <Link to="/itOut-sourcing" className='link-classes3 color-change'>IT Outsourcing</Link>
                                    <Link to="/It-support" className='link-classes3 color-change'>IT Support</Link>
                                    <Link to="/data-analist" className='link-classes3 color-change'>Data Analytics</Link>
                                    <Link to="/cyber-security" className='link-classes3 color-change'>Cyber Security</Link>
                                </div>
                            )}

                            <Link to="#"
                                className="link-classes3 Link-background"
                                onClick={() => openMobilePopup('onMobCareers')}>
                                Technologies
                            </Link>
                            {mobCareers && (
                                <div className='mobile-popup'>
                                    <Link to="/asp-dot-net" className='link-classes3 color-change'>Asp .Net</Link>
                                    <Link to="/c" className='link-classes3 color-change'>C++</Link>
                                    <Link to="/golang" className='link-classes3 color-change'>Golang</Link>
                                    <Link to="/java" className='link-classes3 color-change'>Java</Link>
                                    <Link to="/javaScript" className='link-classes3 color-change'>JavaScript</Link>
                                    <Link to="/node" className='link-classes3 color-change'>Node.js</Link>
                                    <Link to="/php" className='link-classes3 color-change'>PHP</Link>
                                    <Link to="/python" className='link-classes3 color-change'>Python</Link>
                                    <Link to="/react-native" className='link-classes3 color-change'>ReactNative</Link>
                                </div>
                            )}
                        </div>
                    )}


                    <Link className='link-classes' style={{ color: "#2f78c4", fontSize: "23px", fontWeight: "900", paddingBottom: "8px" }} to="/">SOFTGENICS</Link>
                    <div>
                        <Link className='link-classes' style={{ color: "#fff" }} to="#"><CiGlobe size={22} /></Link>
                        <Link className='link-classes' style={{ color: "#fff" }} to="#"><FiSearch size={22} /></Link>
                    </div>

                </div>
            </div>
            {/* mobile */}
            
            {/* //web */}
            <div className='header-home-container'>
                <div className='header-top-nav'>
                    <div style={{ width: "55%" }}>
                        <marquee className="link-classes" style={{ fontSize: "13px", color: "#fff", paddingTop: "3px" }}>
                        Unlocking Infinite Possibilities with Softgenics India Pvt Ltd: Crafting Tailored Websites and Apps for Every Industry</marquee>
                    </div>

                    <div className='header-top-item'>
                        {/* <Link className='link-classes' style={{ fontSize: "28px", fontWeight: "900" }} to="#">SOFTGENICS</Link> */}
                        {/* <Link className='link-classes' to="#">SOFTGENICSSoftware</Link> */}
                        {/* <Link className='link-classes' to="#">Investor Relations</Link> */}
                        <button>
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text" style={{fontSize:"13px"}}><Link className='hire-devloper' to="/contact-us"> Contact Us</Link>
                            </span>
                        </button>

                        <button>
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text" style={{fontSize:"13px"}}> <Link className='hire-devloper' to="/email">Hire Devloper</Link>
                            </span>
                        </button>

                        <Link className='link-classes' style={{ paddingTop: "6px" }} to="https://www.google.com/" target='_blank'><CiGlobe size={22} /></Link>
                        {/* <Link className='link-classes' style={{ paddingTop: "6px" }} to="#"><FiSearch size={22} /></Link> */}
                    </div>
                </div>

                <div className='header-bottom-item'>
                    <div className='header-bottom-main'>
                        <div className='header-bottom-first'>
                            <Link to="/" className='link-classes2 glow-on-hover' style={{ color: "#1462dd", fontSize: "20px", fontWeight: "800", padding: "10px", backgroundColor: "#fff"}}>SOFTGENICS</Link>

                            {/* <Link
                                className={`link-classes2 glow-on-hover ${digitalClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('digitalClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {digitalClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Digital
                            </Link> */}
                            {/* {digitalClicked && (
                                <div className='popup popup-digital'>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Industrius</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>About Us</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Resources</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Careers</Link>
                                </div>
                            )} */}

                            {/* <Link
                                className={`link-classes2 ${engineeringClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('engineeringClicked')}
                                to="#"
                            >
                                {engineeringClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Engineering
                            </Link>
                            {engineeringClicked && (
                                <div className='popup popup-engineering'>
                                    <Link to="#" className='link-classes3'>Industrius</Link>
                                    <Link to="#" className='link-classes3'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3'>About Us</Link>
                                    <Link to="#" className='link-classes3'>Resources</Link>
                                    <Link to="#" className='link-classes3'>Careers</Link>
                                </div>
                            )} */}

                            {/* <Link
                                className={`link-classes2 glow-on-hover ${cloudClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('cloudClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {cloudClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Cloud
                            </Link> */}
                            {/* {cloudClicked && (
                                <div className='popup popup-cloud'>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Industrius</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>About Us</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Resources</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Careers</Link>
                                </div>
                            )} */}

                            {/* <Link
                                className={`link-classes2 ${aiClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('aiClicked')}
                                to="#"
                            >
                                {aiClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Ai
                            </Link>
                            {aiClicked && (
                                <div className='popup popup-ai'>
                                    <Link to="#" className='link-classes3'>Industrius</Link>
                                    <Link to="#" className='link-classes3'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3'>About Us</Link>
                                    <Link to="#" className='link-classes3'>Resources</Link>
                                    <Link to="#" className='link-classes3'>Careers</Link>
                                </div>
                            )} */}
                        </div>

                        <div className='header-bottom-first1'>
                            <Link
                                className={`link-classes2 glow-on-hover ${servicesClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('services')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {servicesClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Services
                            </Link>
                            {servicesClicked && (
                                <div className='popup popup-servises'>
                                    <Link to="/application" className='link-classes3 glow-on-hover'>Development</Link>
                                    <Link to="/web-dev" className='link-classes3 glow-on-hover'>Web Development</Link>
                                    <Link to="/mobile-devlopment" className='link-classes3 glow-on-hover'>Mobile App Development</Link>
                                    <Link to="/testing-andQA" className='link-classes3 glow-on-hover'>Testing and QA</ Link>
                                    <Link to="/application-and-server" className='link-classes3 glow-on-hover'>Application Services</Link>
                                    <Link to="/ux-and-ui" className='link-classes3 glow-on-hover'>UI/UX Design</Link>
                                    <Link to="/Infrastrucher-servies" className='link-classes3 glow-on-hover'>Infrastructure Services</Link>
                                    <Link to="/word-press" className='link-classes3 glow-on-hover'>Wordpress </Link>
                                </div>
                            )}

                            <Link
                                className={`link-classes2 glow-on-hover ${careersClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('careersClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {careersClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Product
                            </Link>
                            {careersClicked && (
                                <div className='popup popup-careers'>
                                    <Link to="/erp" className='link-classes3 glow-on-hover'>ERP</Link>
                                    <Link to="/opration-managment" className='link-classes3 glow-on-hover'>Operations Management</Link>
                                    <Link to="/finacial-managment" className='link-classes3 glow-on-hover'>Financial Management</Link>
                                    <Link to="/payment-managment" className='link-classes3 glow-on-hover'>Payment Management</Link>
                                    <Link to="/supply-chainMang" className='link-classes3 glow-on-hover'>Supply Chain Management</Link>
                                    <Link to="/data-analist" className='link-classes3 glow-on-hover'>Data Analytics</Link>
                                    <Link to="/assest-management" className='link-classes3 glow-on-hover'>Asset Management</Link>
                                    <Link to="/fleet-managment" className='link-classes3 glow-on-hover'>Fleet Management</Link>
                                    <Link to="/human-resorce" className='link-classes3 glow-on-hover'>Human Resources</Link>
                                    <Link to="/e-learning" className='link-classes3 glow-on-hover'>eLearning</Link>
                                    <Link to="/document-managment" className='link-classes3 glow-on-hover'>Document Management</Link>
                                    <Link to="/project-managment" className='link-classes3 glow-on-hover'>Project Management</Link>
                                    <Link to="/crm" className='link-classes3 glow-on-hover'>CRM</Link>
                                    <Link to="/ecommerce" className='link-classes3 glow-on-hover'>Ecommerce</Link>
                                    <Link to="/marketing-and-adv" className='link-classes3 glow-on-hover'>Marketing & Advertising</Link>
                                    <Link to="/contact-managment" className='link-classes3 glow-on-hover'>Content Management</Link>
                                    <Link to="/kiosk-software" className='link-classes3 glow-on-hover'>Kiosk Software</Link>
                                    <Link to="/web-portal" className='link-classes3 glow-on-hover'>Web Portals</Link>
                                </div>
                            )}

                            {/* <Link
                                className={`link-classes2 glow-on-hover ${industriusClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('industrius')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {industriusClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Industrius
                            </Link> */}
                            {/* {industriusClicked && (
                                <div className='popup popup-industrius'>
                                    <Link to="/finacial-servies" className='link-classes3 glow-on-hover'>Industrius</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Ecosystem</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>About Us</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Resources</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Careers</Link>
                                </div>
                            )} */}

                            <Link
                                className={`link-classes2 glow-on-hover ${ecosystemClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('ecosystemClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {ecosystemClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Technology
                            </Link>
                            {ecosystemClicked && (
                                <div className='popup popup-Ecosystem'>
                                    <Link to="/java" className='link-classes3 glow-on-hover'>Java</Link>
                                    <Link to="/asp-dot-net" className='link-classes3 glow-on-hover'>.NET</Link>
                                    <Link to="/python" className='link-classes3 glow-on-hover'>Python</Link>
                                    <Link to="/php" className='link-classes3 glow-on-hover'>PHP</Link>
                                    <Link to="/golang" className='link-classes3 glow-on-hover'>Golang</Link>
                                    <Link to="/c" className='link-classes3 glow-on-hover'>C++</Link>
                                    <Link to="/node" className='link-classes3 glow-on-hover'>Node.js</Link>
                                    <Link to="/javaScript" className='link-classes3 glow-on-hover'>JavaScript </Link>
                                    <Link to="/react-native" className='link-classes3 glow-on-hover'>React Native</Link>
                                    <Link to="#" className='link-classes3 glow-on-hover'>Mobile</Link>
                                </div>
                            )}

                            <Link
                                className={`link-classes2 glow-on-hover ${resourcesClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('resourcesClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {resourcesClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                Resources
                            </Link>
                            {resourcesClicked && (
                                <div className='popup popup-resources'>
                                    <Link to="/manage-it-servies" className='link-classes3 glow-on-hover'>Managed IT Services</Link>
                                    <Link to="/itOut-sourcing" className='link-classes3 glow-on-hover'>IT Outsourcing</Link>
                                    <Link to="/It-support" className='link-classes3 glow-on-hover'>IT Support</Link>
                                    <Link to="/data-analist" className='link-classes3 glow-on-hover'>Data Analytics</Link>
                                    <Link to="/cyber-security" className='link-classes3 glow-on-hover'>Cyber Security</Link>
                                </div>
                            )}

                            <Link
                                className={`link-classes2 glow-on-hover ${aboutusClicked ? 'services-clicked' : ''}`}
                                onMouseEnter={() => handleServicesClick('aboutusClicked')}
                                to="#"
                                style={{ backgroundColor: "#fff", color: "#000" }}
                            >
                                {aboutusClicked ? <AiFillCaretDown className='icons' style={{ color: "red" }} /> : <AiFillCaretRight className='icons' style={{ color: "red" }} />}
                                AboutUs
                            </Link>
                            {aboutusClicked && (
                                <div className='popup popup-aboutus'>
                                    <Link to="/about-us" className='link-classes3 glow-on-hover'>About Company</Link>
                                    <Link to="/Experts" className='link-classes3 glow-on-hover'>Experts</Link>
                                    <Link to="/client-review" className='link-classes3 glow-on-hover'>Client Reviews</Link>
                                    <Link to="/our-partner" className='link-classes3 glow-on-hover'>Our Partners</Link>
                                    <Link to="/location" className='link-classes3 glow-on-hover'>Locations</Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {/* <div className='header-third-main'>
                    <div className='header-botton-third'>
                        <Link to="/" className='link-classes2' style={{ paddingRight: "10px" }}>Home</Link>
                        <Link className='link-classes2'>Engineering</Link>
                    </div>
                </div> */}

            </div>
            {/* //endweb */}
        </div>
    )
}

export default Header
