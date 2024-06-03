
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import Addcompellingheadline from '../../../Assets/Addcompellingheadline.png'
import BeyondTechnology from '../../../Assets/BeyondTechnology.png'
import Developawinningstrategy from '../../../Assets/Developawinningstrategy.png'
import Focuscustomerpainpoints from '../../../Assets/Focuscustomerpainpoints.png'
import Footer11 from '../../../Assets/Footer11.png'
import Highlightsocialproof from '../../../Assets/Highlightsocialproof.png'
import Includeacalltoaction from '../../../Assets/Includeacalltoaction.png'
import ProvenResults from '../../../Assets/ProvenResults.png'
import StreamlinedOperations from '../../../Assets/StreamlinedOperations.png'
import UnifiedOmnichannelExperiences from '../../../Assets/UnifiedOmnichannelExperiences.png'

import ecommerce from '../../../Assets/ecommerce.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const InfrastrucherServies = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Ecommerce </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Enterprise Ecommerce Solutions & Technology Consulting
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Introduction to E-commerce Development:</strong> <br />
                        Softgenics presents an overview of e-commerce development, highlighting its significance in modern business landscapes.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={ecommerce} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Beyond Technology</strong> We don't just build software we partner with you to achieve your unique business goals. Our team of ecommerce experts and strategic consultants collaborate with you to </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}> Clarify your target audience, market position, and growth aspirations</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Develop a winning strategy: Create a roadmap for success, from platform selection to customer acquisition and retention tactics.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Addcompellingheadline} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Add a compelling headline</h1>
                                    <p className='erp-card-description'>
                                        Unlock Agile & Seamless Ecommerce Partner with Softgenics 5 Years of Expertise
                                        Streamline Operations, Empower Customers Your Ecommerce Solution Starts Here
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Focuscustomerpainpoints} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Focus on customer pain points</h1>
                                    <p className='erp-card-description'>
                                        Struggling with complex logistics and fragmented customer journeys? We build smooth omnichannel experiences that convert Feeling overwhelmed by managing multiple platforms and integrations
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Highlightsocialproof} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Highlight social proof</h1>
                                    <p className='erp-card-description'>
                                        Empowered 100+ businesses with tailored ecommerce solutions, driving an average 20% revenue increase Trusted by leading brands in B2B, fashion, and healthcare, delivering seamless customer experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Includeacalltoaction} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Include a call to action</h1>
                                    <p className='erp-card-description'>
                                        Ready to unleash the power of ecommerce? Schedule a free consultation today
                                        Download our guide: 5 Secrets to Building High-Converting Ecommerce Stores
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={UnifiedOmnichannelExperiences} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Unified Omnichannel Experiences</h1>
                                    <p className='erp-card-description'>
                                        We design and implement solutions that connect your online and offline channels, creating a smooth journey for customers across every touchpoint.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={StreamlinedOperations} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Streamlined Operations</h1>
                                    <p className='erp-card-description'>
                                        Our experts integrate your ecommerce platform with other enterprise systems (ERP, CRM, etc.) for efficient order management, inventory control, and data analysis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ProvenResults} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Proven Results</h1>
                                    <p className='erp-card-description'>
                                        We've empowered 100+ businesses with tailored solutions, driving an average 20% revenue increase. Our clients include leading brands in B2B, fashion, and healthcare.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={BeyondTechnology} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Beyond Technology</h1>
                                    <p className='erp-card-description'>
                                        We go beyond just building software. We provide strategic consulting, helping you define your ecommerce goals,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Developawinningstrategy} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Develop a winning strategy</h1>
                                    <p className='erp-card-description'>
                                        Create a roadmap for success, from platform selection to customer acquisition and retention tactics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Solution Softgenics with 5 years of experience building custom ecommerce solutions, empowers businesses like yours to thrive in this dynamic environment. We help you
                                    </h1>
                                    <p className='erp-finacial-description'>Deliver unforgettable customer journeys: Craft omnichannel experiences that seamlessly connect online and offline channels, from personalized product recommendations to convenient click-and-collect options.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer11} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/erp" className='table-item'>ERP</Link>
                            <Link to="/opration-managment" className='table-item'>Operations Management</Link>
                            <Link to="/finacial-managment" className='table-item'>Financial Management</Link>
                            <Link to="/payment-managment" className='table-item'>Payment Management</Link>
                            <Link to="/supply-chainMang" className='table-item'>Supply Chain Management</Link>
                            <Link to="/data-analist" className='table-item'>Data Analytics</Link>
                            <Link to="/assest-management" className='table-item'>Asset Management</Link>
                            <Link to="/fleet-managment" className='table-item'>Fleet Management</Link>
                            <Link to="/human-resorce" className='table-item'>Human Resources</Link>
                            <Link to="/e-learning" className='table-item'>eLearning</Link>
                            <Link to="/document-managment" className='table-item'>Document Management</Link>
                            <Link to="/project-managment" className='table-item'>Project Management</Link>
                            <Link to="/crm" className='table-item'>CRM</Link>
                            <Link to="/ecommerce" className='table-item'>Ecommerce</Link>
                            <Link to="/marketing-and-adv" className='table-item'>Marketing & Advertising</Link>
                            <Link to="/contact-managment" className='table-item'>Content Management</Link>
                            <Link to="/kiosk-software" className='table-item'>Kiosk Software</Link>
                            <Link to="/web-portal" className='table-item'>Web Portals</Link>
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
export default InfrastrucherServies

