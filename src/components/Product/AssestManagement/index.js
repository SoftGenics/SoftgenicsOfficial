import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import Actionableintelligence from '../../../Assets/Actionableintelligence.png'
import PartnerwithSoftgenic from '../../../Assets/PartnerwithSoftgenic.png'
import Collaborativeapproach from '../../../Assets/Collaborativeapproach.png'
import Compliancemadeeasy from '../../../Assets/Compliancemadeeasy.png'
import Continuoussupport from '../../../Assets/Continuoussupport.png'
import Deepsectoralunderstanding from '../../../Assets/Deepsectoralunderstanding.png'

import Futureprooftechnology from '../../../Assets/Futureprooftechnology.png'
import PartnerwithSoftgenics from '../../../Assets/PartnerwithSoftgenics.png'
import Proventrackrecord from '../../../Assets/Proventrackrecord.png'

import it_infras from '../../../Assets/it_infras.png'

import Footer from '../../Footer'
import Header from '../../Header'

import './index.css'

const AssestManagement = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> AssestManagement </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        IT Asset Management Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Comprehensive Asset Tracking</strong> <br />
                        SoftGenics offers robust asset management solutions, ensuring the meticulous tracking and management of all organizational assets, including hardware, software, and information resources.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={it_infras} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>SoftGenics offers advanced IT </strong>asset management solutions designed to track and manage diverse assets across the IT infrastructure, including hardware, software licenses, virtual assets, and cloud resources.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>solutions streamline the deployment process</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Our  and ensure efficient utilization of IT assets, enabling organizations to maximize their value and minimize operational costs.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Collaborativeapproach} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Lifecycle Management</h1>
                                    <p className='erp-card-description'>
                                   SoftGenics facilitates comprehensive lifecycle management for IT assets, covering procurement, deployment, maintenance, upgrades, and retirement. This approach ensures that assets are effectively managed throughout their lifecycle.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Futureprooftechnology} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Cost Optimization</h1>
                                    <p className='erp-card-description'>
                                    We help organizations analyze the total cost of ownership (TCO) for IT assets, identifying cost-saving opportunities, optimizing procurement strategies, and minimizing unnecessary expenditures.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Continuoussupport} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Compliance and Risk Management</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics enables organizations to maintain compliance with regulatory requirements and mitigate risks associated with IT asset management, such as software license audits and security vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Actionableintelligence} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Integration and Interoperability</h1>
                                    <p className='erp-card-description'>
                                   Our solutions seamlessly integrate with existing IT systems and enterprise applications, ensuring interoperability and data consistency across the organization's IT ecosystem.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Deepsectoralunderstanding} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>User-Friendly Interface</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics prioritizes user experience with intuitive interfaces and customizable workflows, making it easy for IT professionals to track, manage, and report on IT assets effectively.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Proventrackrecord} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Automated Processes</h1>
                                    <p className='erp-card-description'>
                                    We leverage automation and AI-driven analytics to streamline asset management processes, reduce manual effort, and improve accuracy in asset tracking and reporting.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={PartnerwithSoftgenic} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Scalability and Flexibility</h1>
                                    <p className='erp-card-description'>
                                    SoftGenics solutions are scalable and flexible, capable of meeting the evolving needs of organizations of all sizes and industries, from startups to large enterprises.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={PartnerwithSoftgenics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Continuous Improvement</h1>
                                    <p className='erp-card-description'>
                                     We are committed to continuous improvement, regularly updating our solutions based on feedback from users, emerging technologies, and industry best practices to ensure they remain at the forefront of IT asset management.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Compliancemadeeasy} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Real-Time Visibility</h1>
                                    <p className='erp-card-description'>
                                     SoftGenics provides real-time visibility into the status and location of IT assets, allowing organizations to quickly identify unused or underutilized assets and reallocate resources as needed.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Automated Inventory Management Our solutions automate the inventory management process, eliminating manual data entry errors and ensuring that asset records are accurate and up to date.
                                    </h1>
                                    <p className='erp-finacial-description'>Asset Performance Monitoring SoftGenics offers tools for monitoring the performance and health of IT assets, enabling proactive maintenance and reducing the risk of unexpected downtime.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={PartnerwithSoftgenics} alt='' style={{ width: "100%" }} />
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
export default AssestManagement

