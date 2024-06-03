
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import salesMarketing from '../../../Assets/salesMarketing.png'
import AltaResources from '../../../Assets/AltaResources.png'
import bioAffinityTechnologies from '../../../Assets/bioAffinityTechnologies.png'
import CashewTechnologySoftware_LLC from '../../../Assets/CashewTechnologySoftware_LLC.png'
import GiveBackWireless from '../../../Assets/GiveBackWireless.png'
import ParamountWorkPlace from '../../../Assets/ParamountWorkPlace.png'
import SALSaudiLogisticsServices from '../../../Assets/SALSaudiLogisticsServices.png'
import ScribeAmericaLLC from '../../../Assets/ScribeAmericaLLC.png'
import Supponor from '../../../Assets/Supponor.png'


import contact_mang from '../../../Assets/contact_mang.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ClientReview = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>About Us</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Client Review </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Our Happy Clients
                    </h1>
                    <p className='erp-main-description'>
                    various projects where Softgenics
                        <strong> successfully turned client</strong>   ideas into fully functional and aesthetically pleasing websites.

                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Discuss your need </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={contact_mang} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Softgenics' commitment to</strong>  understanding and exceeding client expectations, resulting in high levels of client satisfaction.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>From Concept to Launch: Client Journeys with Softgenics' Web Development Services</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>detailed case studies of clients' journeys from initial concept to the successful launch of their websites with Softgenics.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={AltaResources} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Innovative Web Solutions</h1>
                                    <p className='erp-card-description'>
                                    Softgenics' innovative web solutions have helped clients differentiate themselves in competitive markets.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={GiveBackWireless} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Experiences with Softgenics</h1>
                                    <p className='erp-card-description'>
                                    client testimonials that emphasize the responsiveness and reliability of Softgenics' web development services.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={bioAffinityTechnologies} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>E-commerce Success Stories</h1>
                                    <p className='erp-card-description'>
                                    success stories of e-commerce clients who have seen significant growth in online sales after partnering with Softgenics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={salesMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Supports Client Objectives</h1>
                                    <p className='erp-card-description'>
                                    Softgenics aligns web development projects with clients' business goals, leading to measurable success and satisfaction.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SALSaudiLogisticsServices} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Feedback</h1>
                                    <p className='erp-card-description'>
                                    Present client feedback and testimonials explaining why businesses prefer Softgenics for their web development needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ScribeAmericaLLC} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Relationships with Softgenics</h1>
                                    <p className='erp-card-description'>
                                    stories of long-term client relationships and ongoing collaborations with Softgenics, emphasizing trust and satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ParamountWorkPlace} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Needs with Softgenics</h1>
                                    <p className='erp-card-description'>
                                    Softgenics has delivered customized web solutions to meet the unique requirements of diverse clients.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Supponor} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Experiences with Softgenics</h1>
                                    <p className='erp-card-description'>
                                    client experiences with Softgenics' ability to integrate new web solutions seamlessly with existing systems.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CashewTechnologySoftware_LLC} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Softgenics' SEO Services</h1>
                                    <p className='erp-card-description'>
                                    client success stories of improved online visibility and increased traffic through Softgenics' SEO-friendly web development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    client feedback on how Softgenics' focus on UX/UI design has led to enhanced user experiences and satisfaction.
                                    </h1>
                                    <p className='erp-finacial-description'>client testimonials about Softgenics' efficient project management and on-time delivery of web development projects.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={GiveBackWireless} alt='' style={{ width: "100%" }} />
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
export default ClientReview

