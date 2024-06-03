
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import AdvancedAutomation from '../../../Assets/AdvancedAutomation.png'
import AIpoweredCommunication from '../../../Assets/AIpoweredCommunication.png'
import CollaborationandTeam from '../../../Assets/CollaborationandTeam.png'
import ContactDataAccuracy from '../../../Assets/ContactDataAccuracy.png'
import Footer15 from '../../../Assets/Footer15.png'
import IntegrationwithExternalSystems from '../../../Assets/IntegrationwithExternalSystems.png'
import IntelligentSearchandFiltering from '../../../Assets/IntelligentSearchandFiltering.png'
import MobileAccessibility from '../../../Assets/MobileAccessibility.png'
import PersonalizationandSegmentation from '../../../Assets/PersonalizationandSegmentation.png'
import RelationshipIntelligence from '../../../Assets/RelationshipIntelligence.png'

import contact_mang from '../../../Assets/contact_mang.jpg'

import Footer from '../../Footer'
import Header from '../../Header'
import './index.css'

const ContactManagment = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Product</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> ContactManagment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Custom CMS Development Services
                    </h1>
                    <p className='erp-main-description'>
                        In CMS development since 2018, Softgenics competently delivers custom CMS solutions that combine responsive UI, rich functionality, strong data security, and high scalability.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Discuss your need </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
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
                            <p className='erp-description'><strong>Unified Content Management: </strong> Softgenics CMS integrates all aspects of content management into a unified platform, eliminating the need for disparate systems and manual processes. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>content creation and editing to publishing and distribution, </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> From everything is seamlessly managed within a single interface, reducing complexity and saving valuable time.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ContactDataAccuracy} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Automated Workflows</h1>
                                    <p className='erp-card-description'>
                                        With Softgenics CMS, manual tasks are automated to a large extent, reducing human error and speeding up content production cycles. Automated workflows can be configured to route content for review and approval, assign tasks to team members based on their roles and responsibilities, and trigger notifications to keep stakeholders informed throughout the process.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={PersonalizationandSegmentation} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Content Collaboration Tools</h1>
                                    <p className='erp-card-description'>
                                        Collaboration is key to effective content creation, and Softgenics CMS provides robust tools to facilitate collaboration among team members, regardless of their location. Features such as real-time editing, commenting, and version control enable seamless collaboration, fostering creativity and enhancing productivity.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IntelligentSearchandFiltering} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Content Personalization and Targeting</h1>
                                    <p className='erp-card-description'>
                                        Softgenics CMS empowers businesses to deliver personalized content experiences to their audiences. By leveraging data analytics and user segmentation capabilities, content can be tailored to individual preferences and behavior, resulting in higher engagement and conversion rates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={IntegrationwithExternalSystems} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Flexible Publishing Options</h1>
                                    <p className='erp-card-description'>
                                        Whether it's a website, mobile app, social media platform, or any other digital channel, Softgenics CMS offers flexible publishing options to ensure that content reaches the right audience at the right time. Content can be scheduled for publication, optimized for different devices, and automatically distributed across multiple channels, maximizing reach and impact.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={RelationshipIntelligence} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Scalability and Performance</h1>
                                    <p className='erp-card-description'>
                                        As businesses grow and their content management needs evolve, Softgenics CMS scales effortlessly to accommodate increasing demands. With its robust architecture and high-performance capabilities, the platform remains responsive and reliable even under heavy workloads, ensuring smooth operations at all times.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AdvancedAutomation} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Security and Compliance</h1>
                                    <p className='erp-card-description'>
                                        Protecting sensitive content and ensuring regulatory compliance are top priorities for businesses in every industry. Softgenics CMS incorporates advanced security features such as role-based access control, encryption, and audit trails to safeguard content against unauthorized access and data breaches. Additionally, the platform is designed to comply with industry standards and regulations, providing peace of mind to businesses and their stakeholders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={MobileAccessibility} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Continuous Innovation and Support</h1>
                                    <p className='erp-card-description'>
                                        Softgenics is committed to ongoing innovation and improvement, continually enhancing its CMS solutions with new features and capabilities to address the evolving needs of its customers. Moreover, the company provides dedicated support and training resources to help businesses maximize the value of their investment in Softgenics CMS, ensuring a positive user experience and long-term success.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CollaborationandTeam} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Unified Content Management</h1>
                                    <p className='erp-card-description'>
                                        Softgenics CMS not only consolidates content management tasks but also centralizes data storage and access. This means that all content assets, from text and images to videos and documents, are stored in a single repository. This unified approach simplifies content discovery, ensures consistency across channels, and facilitates effective content reuse and repurposing.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AIpoweredCommunication} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Automated Workflows</h1>
                                    <p className='erp-card-description'>
                                        Softgenics CMS enables businesses to create customized workflows tailored to their specific content management processes. These workflows can include sequential or parallel approval steps, automated notifications, and conditional actions based on predefined criteria. By automating routine tasks, such as content review and publishing, Softgenics CMS frees up valuable time for content creators and accelerates time-to-market for new content initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics CMS utilizes data analytics and machine learning to personalize content recommendations, enhancing user engagement and driving conversions.
                                    </h1>
                                    <p className='erp-finacial-description'> Whether on an e-commerce site or a mobile app, tailored product or content suggestions resonate with users, fostering deeper connections and increasing conversion rates.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer15} alt='' style={{ width: "100%", maxWidth: "180px" }} />
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
export default ContactManagment

