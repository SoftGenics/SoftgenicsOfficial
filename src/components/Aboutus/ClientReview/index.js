
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
                        We collaborate with companies from
                        <strong>70+ countries</strong> and <strong>30+ industries</strong>
                        . Our project portfolio contains <strong>over 3,600 </strong> success stories
                        , including projects for Walmart, eBay, NASA JPL, PerkinElmer, Baxter, IBM, Leo Burnett.
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
                            <p className='erp-description'><strong>SoftGenics truly</strong> understood our vision and translated it into a user-friendly, robust software solution. They were flexible, communicative, and delivered an amazing final product on time and budget. We wouldn't hesitate to recommend their services!" </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Working with SoftGenics was a breath of fresh air.</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> Their team was incredibly skilled, efficient, and always kept us informed throughout the development process. The final product exceeded our expectations and has helped us streamline our operations significantly.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={AltaResources} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Alta Resources</h1>
                                    <p className='erp-card-description'>
                                        ScienceSoft proved to be flexible and responsive during end-to-end implementation of an enterprise analytics solution.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={GiveBackWireless} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Give Back Wireless</h1>
                                    <p className='erp-card-description'>
                                        We engaged ScienceSoft as our development partner. We recommend them as a trustworthy partner with skilled technical specialists on board.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={bioAffinityTechnologies} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>bioAffinity Technologies</h1>
                                    <p className='erp-card-description'>
                                        In addition to the solid technical expertise shown by ScienceSoft, its developers demonstrated a profound understanding of laboratory software specifics and integrations.
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
                                    <h1 className='erp-card-heading'>SAL Saudi Logistics Services</h1>
                                    <p className='erp-card-description'>
                                        The B2B customer portal fully meets our business needs of enhanced pricing invoicing and contracting and overall client communication.,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SALSaudiLogisticsServices} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Supponor</h1>
                                    <p className='erp-card-description'>
                                        ScienceSoft’s C++ developers have been assisting Supponor in the ongoing development of the software for the past 11 years. […] We know we can rely on ScienceSoft’s experts.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ScribeAmericaLLC} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>ScribeAmerica LLC</h1>
                                    <p className='erp-card-description'>
                                        ScienceSoft’s L1 team has already become a valuable asset to ScribeAmerica.
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
                                    <h1 className='erp-card-heading'>Paramount WorkPlace</h1>
                                    <p className='erp-card-description'>
                                        After product evolution performed by Sofgenics, the new software module performs stably even under heavy load
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Supponor} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>InfoMentor Ltd</h1>
                                    <p className='erp-card-description'>
                                        We’ve cooperated with Sofgenics on two projects involving apps for the education industry. We are fully satisfied with the current results, and we are going to continue our cooperation with Sofgenics
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CashewTechnologySoftware_LLC} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cashew Technology Software L.L.C.</h1>
                                    <p className='erp-card-description'>
                                        We highly recommend Sofgenics as a trustworthy partner for web and mobile development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        We were initially apprehensive about migrating to the cloud, but SoftGenics made the process seamless and stress-free.
                                    </h1>
                                    <p className='erp-finacial-description'>SoftGenics provided end-to-end support for our cloud migration, including planning, execution, and ongoing optimization. Their team was professional, responsive, and helped us achieve a smooth transition with minimal downtime.</p>
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

