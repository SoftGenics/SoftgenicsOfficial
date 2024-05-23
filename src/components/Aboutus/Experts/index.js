
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
                        <strong>Do you have a tech question or would like to schedule an interview?</strong>
                        ScienceSoft's people will gladly share their knowledge.
                    </p>

                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'>
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
                                    <h1 className='erp-card-heading'>Experts in QA and Testing</h1>
                                    <p className='erp-card-description'>
                                        With QA and testing services, ScienceSoft covers all types of testing, integrates testing activities into the CI/CD pipeline, builds and implements test automation strategies for projects of any complexity.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={expertSupply} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in Data Analytics and AI</h1>
                                    <p className='erp-card-description'>
                                        Being in data analytics and AI since 1989, in BI since 2005, and in big data since 2013, ScienceSoft provides services from data analytics consulting and implementation to managed analytics.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Experts_Blockchain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in Blockchain</h1>
                                    <p className='erp-card-description'>
                                        Staying at the forefront of cryptotech innovations, ScienceSoft provides comprehensive blockchain consulting and development services to create efficient, secure, and legally compliant Web3 solutions.
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
                                    <h1 className='erp-card-heading'>Experts in IoT</h1>
                                    <p className='erp-card-description'>
                                    In IoT since 2018, SoftGenics delivers robust IoT solutions that provide business processes automation and improve operations’ efficiency.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Experts_Infrastructure} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in IT Infrastructure</h1>
                                    <p className='erp-card-description'>
                                    Sofgenics helps businesses operate sustainably with on-going infrastructure administration, continuous monitoring and troubleshooting, while their DevOps practices help accelerate overall infrastructure management.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in CRM</h1>
                                    <p className='erp-card-description'>
                                    SoftGenics helps B2C and B2B companies from various industries to converse and retain customers with the help of leading CRM solutions: 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Experts_SharePoint} alt='common' style={{ height: "170px", width: "100%" }}  />
                                    <h1 className='erp-card-heading'>Experts in SharePoint</h1>
                                    <p className='erp-card-description'>
                                    SoftGenics has 20+ Microsoft certified SharePoint experts who can implement and customize cloud and on-premises SharePoint solutions, creating efficient content management, communication and collaboration solutions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ExpertsServicePlatform} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in ServiceNow® Platform</h1>
                                    <p className='erp-card-description'>
                                    Being a ServiceNow partner with 13 years of experience and 24 ServiceNow certificates in the team, ScienceSoft offers a holistic set of services related to the development and customization of ServiceNow solutions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ExpertsInformationSecurity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experts in Information Security</h1>
                                    <p className='erp-card-description'>
                                    With a team of certified security experts, ScienceSoft uses the power of IBM QRadar Platform to protect businesses from security threats and data breaches.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Our team of highly qualified professionals are available to provide media with insights and commentary on all aspects of IT
                                    </h1>
                                    <p className='erp-finacial-description'>Reach out to our experts today to schedule an interview or discuss collaboration opportunities.
                                        Let's create impactful IT content together! Contact us to connect with our knowledge powerhouses.</p>
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

