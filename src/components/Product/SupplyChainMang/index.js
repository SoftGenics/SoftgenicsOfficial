
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import Blockchainintegration from '../../../Assets/Blockchainintegration.png'
import Custombuiltsolutions from '../../../Assets/Custombuiltsolutions.png'
import Demandforecasting from '../../../Assets/Demandforecasting.png'
import Footer1 from '../../../Assets/Footer1.png'
import Futureproofarchitecture from '../../../Assets/Futureproofarchitecture.png'
import IoTpoweredsolutions from '../../../Assets/IoTpoweredsolutions.png'
import Ongoingsupportandexpertise from '../../../Assets/Ongoingsupportandexpertise.png'
import Projectmanageme from '../../../Assets/Projectmanageme.png'
import Realtimevisibility from '../../../Assets/Realtimevisibility.png'
import Streamlineworkflows from '../../../Assets/Streamlineworkflows.png'


import Supply_chain_mang from '../../../Assets/Supply_chain_mang.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const SupplyChainMang = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Supply Chain Managment</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Supply Chain Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        Supply chain software development services are a way for any company to get a robust supply chain solution bound to its unique needs while ensuring optimized project costs and minimized implementation risks. <br />
                        <strong>Since 2018, Softgenics helps companies from </strong><br />
                        5 industries design and implement reliable supply chain management software.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Contact the Team </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Supply_chain_mang} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>SoftGenics drives digital </strong> transformation within the supply chain industry through the deployment of innovative supply chain management software and product engineering solutions.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>SoftGenics' efficient supply chain management software </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>streamlines transportation management, automates key supply chain processes, facilitates collaboration and communication, and offers tailored retail solutions.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Streamlineworkflows} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Established Expertise</h1>
                                    <p className='erp-card-description'>
                                     With roots dating back to 2018, SoftGenics has cemented its position as a leader in supply chain management solutions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Realtimevisibility} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Comprehensive Services:</h1>
                                    <p className='erp-card-description'>
                                     Our suite of services extends beyond conventional boundaries, encompassing web app development, m E commerce website, big data analytics, and more.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Demandforecasting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Industry Reach</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics caters to a diverse clientele spanning logistics, FinTech, eCommerce, and industries, showcasing our versatility and industry knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Blockchainintegration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>End-to-End Solutions</h1>
                                    <p className='erp-card-description'>
                                     From inception to implementation, SoftGenics offers end-to-end supply chain software development, covering everything from requirements gathering to architecture design and testing.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IoTpoweredsolutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Optimization Focus</h1>
                                    <p className='erp-card-description'>
                                     We specialize in crafting tailored solutions that optimize supply chain processes and enhance workplace safety standards, ensuring efficiency and reliability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Custombuiltsolutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Tailored Offerings</h1>
                                    <p className='erp-card-description'>
                                     Our solutions are customized to meet the unique needs of each client, with services ranging from seamless cloud integration to regulatory compliance and system integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Projectmanageme} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Dedicated Support</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics provides round-the-clock support, ensuring uninterrupted operations and peace of mind for our clients.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Futureproofarchitecture} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cutting-Edge Solutions</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics pioneers innovative supply chain management solutions, leveraging the latest technologies to drive efficiency and agility in operations.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Ongoingsupportandexpertise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Scalability and Flexibility</h1>
                                    <p className='erp-card-description'>
                                     Our solutions are designed to scale seamlessly with your business growth and adapt to evolving market dynamics, ensuring long-term success and sustainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Ready to transform your supply chain for greater agility, efficiency, and innovation?
                                        Partner with Softgenics We're more than just developers; we're your trusted
                                    </h1>
                                    <p className='erp-finacial-description'>Supply Chain Visibility We prioritize supply chain visibility, providing real-time tracking and monitoring capabilities to enhance transparency and mitigate risks across the entire supply chain network.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer1} alt='' style={{ width: "100%" }} />
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
export default SupplyChainMang

