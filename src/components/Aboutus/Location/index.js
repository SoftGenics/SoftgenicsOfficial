//Updated by Saurav
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
// import erpfinacial from '../../../Assets/erpfinacial.jpg'

import map from '../../../Assets/map.jpg'
import globle_network from '../../../Assets/globle_network.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const Location = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>About Us</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Location </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Thinking Globally, Acting Locally
                    </h1>
                    <p className='erp-main-description'>
                        ScienceSoft is headquartered in <strong>McKinney, Texas</strong>  and has
                        <strong>7 representative offices in 3 continents</strong>
                        . We continuously expand our international presence to tap into local talents and efficiently cooperate with local industry leaders and startups.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Discuss your need </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={globle_network} alt="image_goes_here" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'>
                                Sofgenics India Pvt. Ltd., headquartered in <b>McKinney, Texas</b>, operates 7 representative offices across 3 continents.                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Thinking Globally, Acting Locally</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>
                                We continuously expand our <b>international presence</b> to tap into <b>local talent</b> and effectively collaborate with <b>local industry leaders</b> and startups.                            </p>
                        </div>



                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        At SoftGenics, we are proud to be a leading provider of <b>Sofgenics</b> in Patna. We are dedicated to serving our community and delivering <b>high-quality solutions</b> to our customers.                                    </h1>
                                    <p className='erp-finacial-description'>
                                        We are thrilled to announce the opening of our new location in <b>Patna</b>! We are excited to bring our <b>software and services</b> to the local community and look forward to meeting you. Please stop by and say hello!                                        </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={map} alt='' style={{ width: "100%" }} />
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
export default Location

