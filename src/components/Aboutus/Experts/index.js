
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import erpfinacial from '../../../Assets/erpfinacial.jpg'
import serviesOper from '../../../Assets/serviesOper.jpg'

import Experts_Blockchain from '../../../Assets/Experts_Blockchain.png'
import Experts_Infrastructure from '../../../Assets/Experts_Infrastructure.png'
import Experts_IoT from '../../../Assets/Experts_IoT.png'
import Experts_SharePoint from '../../../Assets/Experts_SharePoint.png'
import Experts_Testing from '../../../Assets/Experts_Testing.png'
import ExpertsInformationSecurity from '../../../Assets/ExpertsInformationSecurity.png'
import ExpertsServicePlatform from '../../../Assets/ExpertsServicePlatform.png'
import expertSupply from '../../../Assets/expertSupply.png'

import Exparties from '../../../Assets/Exparties.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const Experts = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>About Us</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Experts </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Our Experts
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Softgenics' approach to responsive web design and devlopment ensuring websites </strong>
                        function flawlessly on mobile, tablet, and desktop devices.
                        full-stack web development capabilities, including the use of modern front-end and back-end technologies to build powerful, scalable web applications.
                    </p>

                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject">
                            Reach Out to an Expert
                        </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Exparties} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>SoftGenics is a global IT</strong>
                                consulting and software development company with experience in multiple industries, including healthcare, retail, manufacturing, banking, and telecoms. Key domains of our expertise are AI, big data, IoT, information security,</p>

                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>mobile and web development, blockchain, collaboration and knowledge management, and more.</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Our team of highly qualified professionals are available to provide media with insights and commentary on all aspects of IT</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Experts_Testing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Responsive Web Design</h1>
                                    <p className='erp-card-description'>
                                        Softgenics creates responsive websites that adapt to any device, providing users with a consistent and engaging experience on mobile, tablet, and desktop.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={expertSupply} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Custom Web Development </h1>
                                    <p className='erp-card-description'>
                                        bespoke web development services offered by Softgenics, highlighting how customized features and functionalities meet specific client requirements and drive business success.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Experts_Blockchain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>E-commerce Excellence</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' expertise in developing robust e-commerce platforms that enhance user experience, secure payment processes, and optimize online sales.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Experts_IoT} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Importance of UX/UI Design</h1>
                                    <p className='erp-card-description'>
                                        Softgenics prioritizes user experience and interface design to create intuitive, visually appealing websites that engage and retain visitors.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Experts_Infrastructure} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>SEO-Friendly</h1>
                                    <p className='erp-card-description'>
                                        Softgenics incorporates SEO best practices into web development to improve search engine rankings and increase organic traffic.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Content Management</h1>
                                    <p className='erp-card-description'>
                                        CMS solutions provided by Softgenics, such as WordPress, Drupal, and Joomla, which allow clients to easily manage and update their website content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Experts_SharePoint} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>API Integration</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' expertise in integrating third-party APIs, such as payment gateways, social media platforms, and CRMs, to enhance website functionality.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ExpertsServicePlatform} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Performance Optimization</h1>
                                    <p className='erp-card-description'>
                                        techniques used by Softgenics to optimize website performance, including image optimization, code minification, and leveraging browser caching.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ExpertsInformationSecurity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Robust Security Measures</h1>
                                    <p className='erp-card-description'>
                                        comprehensive security strategies employed by Softgenics to protect websites from cyber threats, including encryption, secure hosting, and regular security audits.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics develops Progressive Web Apps (PWAs) that offer offline access, push notifications, and enhanced performance, providing a superior user experience.
                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics develops Progressive Web Apps (PWAs) that offer offline access, push notifications, and enhanced performance, providing a superior user experience.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={erpfinacial} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/about-us" className='table-item'>About</Link>
                            <Link to="/client-review" className='table-item'>Client Review</Link>
                            <Link to="/Experts" className='table-item'>Experts</Link>
                            <Link to="/location" className='table-item'>Location</Link>
                            <Link to="/our-partner" className='table-item'>Our Partner</Link>
                        </div>


                    </div>
                    {/* table container */}
                </div>
            </div>

            {/* write your code here */}
        </div>
        <Footer />
    </>
)
export default Experts

