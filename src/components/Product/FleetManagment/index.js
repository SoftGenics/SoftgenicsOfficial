
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import Fleetsafetyenhancement from '../../../Assets/Fleetsafetyenhancement.png'
import Footer6 from '../../../Assets/Footer6.png'
import Fuelmanagement from '../../../Assets/Fuelmanagement.png'
import Integratedcompliance from '../../../Assets/Integratedcompliance.png'
import Collaborativeappoach from '../../../Assets/Collaborativeappoach.png'
import Predictivemaintenance from '../../../Assets/Predictivemaintenance.png'
import Realtimeinsights from '../../../Assets/Realtimeinsights.png'
import Routeoptimization from '../../../Assets/Routeoptimization.png'
import Scalableandadaptable from '../../../Assets/Scalableandadaptable.png'
import Ongoingsupportdexpertise from '../../../Assets/Ongoingsupportdexpertise.png'


import Fleet_mangm from '../../../Assets/Fleet_mangm.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const FleetManagment = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> FleetManagment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Fleet Management Software Development
                    </h1>
                    <p className='erp-main-description'>
                        Real-Time Fleet Tracking: SoftGenics' fleet management software offers real-time tracking capabilities, providing businesses with up-to-the-minute insights into their fleet's whereabouts. This enables proactive decision-making, ensuring timely responses to any unexpected events or emergencies.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Discuss my needs </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Fleet_mangm} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Custom Mobile Applications</strong>  Leveraging mobile applications tailored to clients' needs, SoftGenics enables GPS-based vehicle tracking and comprehensive fleet management on-the-go. These intuitive apps empower users to monitor and manage their fleet efficiently from their mobile devices, enhancing operational agility and flexibility.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Integrated OBD Tracking Systems SoftGenics integrates cutting-edge OBD </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> (On-Board Diagnostics) tracking systems into their fleet management software, allowing for real-time diagnostics and performance monitoring. By capturing vital data directly from the vehicle's onboard systems, businesses gain valuable insights into vehicle health and performance, enabling proactive maintenance and minimizing downtime.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Predictivemaintenance} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Efficient Maintenance</h1>
                                    <p className='erp-card-description'>
                                        Centralized maintenance tools streamline scheduling and tracking, ensuring optimal fleet performance and longevity.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Routeoptimization} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Fuel Optimization</h1>
                                    <p className='erp-card-description'>
                                        Advanced fuel management features analyze consumption patterns to minimize costs and environmental impact, enhancing sustainability efforts.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Integratedcompliance} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Driver Safety</h1>
                                    <p className='erp-card-description'>
                                        Driver monitoring capabilities track behavior and compliance, promoting safer driving practices and reducing risk for the fleet and drivers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Fuelmanagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Tailored Solutions</h1>
                                    <p className='erp-card-description'>
                                        Customized fleet management solutions tailored to specific business needs, ensuring seamless integration and maximum operational benefits.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Fleetsafetyenhancement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Expert Support</h1>
                                    <p className='erp-card-description'>
                                        Dedicated support services ensure smooth implementation and ongoing operation, maximizing the software's value for businesses.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Collaborativeappoach} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Understanding Needs</h1>
                                    <p className='erp-card-description'>
                                    We start by comprehensively understanding your fleet management requirements and objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Scalableandadaptable} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Customized Solutions</h1>
                                    <p className='erp-card-description'>
                                     Our team designs tailored fleet management software solutions to meet your specific needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Ongoingsupportdexpertise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Real-Time Tracking</h1>
                                    <p className='erp-card-description'>
                                     Implement real-time vehicle tracking to monitor fleet movement and optimize routes.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Realtimeinsights} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Testing and Deployment</h1>
                                    <p className='erp-card-description'>
                                     Thoroughly test the software and deploy it seamlessly across your fleet operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Training and Support Provide comprehensive training and ongoing support to ensure smooth adoption and utilization.
                                    </h1>
                                    <p className='erp-finacial-description'>Continuous Improvement: Continuously update and refine the software to adapt to evolving business needs and technological advancements.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer6} alt='' style={{ width: "100%" }} />
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
export default FleetManagment

