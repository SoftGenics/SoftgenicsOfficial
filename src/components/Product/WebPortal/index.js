
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import AdvancedSecurity1 from '../../../Assets/AdvancedSecurity1.png'
import AIpoweredInteractions1 from '../../../Assets/AIpoweredInteractions1.png'
import AugmentedReality1 from '../../../Assets/AugmentedReality1.png'
import DataCollectionandAnalysis1 from '../../../Assets/DataCollectionandAnalysis1.png'
import footer181 from '../../../Assets/footer181.png'
import IntegrationwithExistingSystems1 from '../../../Assets/IntegrationwithExistingSystems1.png'
import InteractiveElements1 from '../../../Assets/InteractiveElements1.png'
import IoTIntegration1 from '../../../Assets/IoTIntegration1.png'
import MultilingualSupport2 from '../../../Assets/MultilingualSupport2.png'
import Personalization1 from '../../../Assets/Personalization1.png'


import web_portal from '../../../Assets/web_portal.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const WebPortal = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Web Portal </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Web Portal Development Services
                    </h1>
                    <p className='erp-main-description'>
                        Expertise and Experience: Since 2018, Softgenics has been dedicated to mastering the craft of web portal development. Our seasoned developers leverage their extensive experience to create solutions that exceed business objectives.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request Web Portal server </Link>
                        <Link className='Get-a-cost-estimate'> Get a quote </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={web_portal} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Revolutionary Product Development </strong> At Softgenics, we are not just about creating functional web portals; we focus on innovation that drives business growth. Our aim is to develop revolutionary products that set new benchmarks in the industry.</p>

                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}> We understand that every business is unique.</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> Softgenics specializes in developing bespoke web portals that cater to the specific needs of each client, ensuring a perfect fit for their operational requirements.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={IntegrationwithExistingSystems1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Scalability and Customization</h1>
                                    <p className='erp-card-description'>
                                        Whether you are an international brand or a local business, Softgenics provides scalable and customizable web portal solutions that adapt to your growth and changing needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AugmentedReality1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Ease of Maintenance</h1>
                                    <p className='erp-card-description'>
                                        Our web portals are designed with ease of maintenance in mind. Softgenics ensures that your web portal is simple to manage, reducing downtime and maintenance costs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={DataCollectionandAnalysis1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Top-Notch Security</h1>
                                    <p className='erp-card-description'>
                                        Security is a top priority for Softgenics. We implement robust security measures to protect sensitive data and ensure that your web portals are resilient against potential threats.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={InteractiveElements1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Integration with External </h1>
                                    <p className='erp-card-description'>
                                        Integrate seamlessly with CRM, ERP, and other business systems for streamlined data flow and efficient operations
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IoTIntegration1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> High Performance</h1>
                                    <p className='erp-card-description'>
                                        Speed and reliability are crucial for web portals. Softgenics builds fast and efficient portals that guarantee optimal performance, even during peak usage times.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={MultilingualSupport2} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Advanced Technology Stacks</h1>
                                    <p className='erp-card-description'>
                                        Softgenics employs cutting-edge technology stacks in the development of web portals. This ensures that our solutions are modern, efficient, and future-proof.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Personalization1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Comprehensive Support</h1>
                                    <p className='erp-card-description'>
                                        From initial consultation to ongoing support, Softgenics provides comprehensive services throughout the entire lifecycle of your web portal, ensuring sustained performance and reliability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AdvancedSecurity1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client-Centric Approach</h1>
                                    <p className='erp-card-description'>
                                        Softgenics prioritizes client satisfaction. We work closely with our clients to understand their needs and deliver solutions that not only meet but exceed their expectations.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AIpoweredInteractions1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Innovative Features</h1>
                                    <p className='erp-card-description'>
                                        Softgenics integrates innovative features into our web portals, enhancing user experience and ensuring that your business stands out in the competitive market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Our solutions adhere to industry standards and compliance requirements, ensuring that your web portal meets all necessary regulations and guidelines.
                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics provides tools for collecting and analyzing data from your web portals, offering valuable insights that can inform business strategies and decisions.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={footer181} alt='' style={{ width: "100%" }} />
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
                            <Link to="/document-managment" className='table-item'> Document Management</Link>
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
export default WebPortal

