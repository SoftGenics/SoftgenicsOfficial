import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import AIpoweredContentGeneration from '../../../Assets/AIpoweredContentGeneration.png'
import VoicetoTextAutomation from '../../../Assets/VoicetoTextAutomation.png'
import BlockchainIntegrati from '../../../Assets/BlockchainIntegrati.png'
import DataIntegrationComplexity from '../../../Assets/DataIntegrationComplexity.png'
import Footer9 from '../../../Assets/Footer9.png'
import MultilingualSupport from '../../../Assets/MultilingualSupport.png'
import QuantifyROI from '../../../Assets/QuantifyROI.png'
import SecurityandComplianceRisks from '../../../Assets/SecurityandComplianceRisks.png'
import StandardizationvsFlexibility from '../../../Assets/StandardizationvsFlexibility.png'
import UserAdoptionandTraining from '../../../Assets/UserAdoptionandTraining.png'

import data_managment from '../../../Assets/data_managment.jpg'

import Footer from '../../Footer'
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
                <Link className='link-classes2'>product</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> DocumentManagment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Data Management Services
                    </h1>
                    <p className='erp-main-description'>
                        Consulting, Support, Solutions
                        For over 5 years, we've been assisting businesses in managing their data effectively – ensuring its accuracy, security, accessibility, and compliance.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={data_managment} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Softgenics' document management </strong> system involves the secure, organized storage of company records, media, and data in centralized locations, ensuring safe and easy retrieval.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}> Integration It's considered a vital component of Softgenics' enterprise content management </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> (ECM) strategy, closely integrated with digital asset management, document imaging, workflow systems, and records management systems</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={StandardizationvsFlexibility} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Definition</h1>
                                    <p className='erp-card-description'>
                                        For TechSolve Innovations, a document management system entails the systematic and secure organization of company records, media, and data in centralized repositories, facilitating efficient storage and retrieval processes.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={DataIntegrationComplexity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Integration</h1>
                                    <p className='erp-card-description'>
                                        It's an integral part of TechSolve's broader information management strategy, seamlessly integrated with other systems like knowledge management, collaboration tools, and project management platforms.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SecurityandComplianceRisks} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Functionality</h1>
                                    <p className='erp-card-description'>
                                        TechSolve's document management system offers advanced functionalities tailored to its needs, including version control, document lifecycle management, document collaboration, and compliance management.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={UserAdoptionandTraining} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Service Provider</h1>
                                    <p className='erp-card-description'>
                                        TechSolve can partner with specialized vendors for document management services or invest in developing an in-house solution, depending on its resources and strategic objectives.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AIpoweredContentGeneration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Facilities</h1>
                                    <p className='erp-card-description'>
                                        TechSolve may opt for a combination of on-premises and cloud-based storage solutions, ensuring data accessibility while prioritizing security measures like encryption, access controls, and regular backups.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={MultilingualSupport} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Off-Site Storage Solution</h1>
                                    <p className='erp-card-description'>
                                        TechSolve might implement an off-site storage solution for disaster recovery and archival purposes, leveraging secure facilities equipped with environmental controls and stringent security protocols.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={VoicetoTextAutomation} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Access and Control</h1>
                                    <p className='erp-card-description'>
                                        TechSolve ensures seamless access to documents through user-friendly interfaces and robust search capabilities, while maintaining strict access controls to safeguard sensitive information.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={BlockchainIntegrati} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Custom Solution</h1>
                                    <p className='erp-card-description'>
                                        TechSolve may develop a custom document management solution tailored to its specific requirements, incorporating features such as artificial intelligence for document classification and natural language processing for content analysis.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={QuantifyROI} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Integration Platform</h1>
                                    <p className='erp-card-description'>
                                        TechSolve can explore the development of an integration platform to connect its document management system with other business applications, facilitating data exchange and workflow automation across the organization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        TechSolve places a strong emphasis on document security, implementing encryption, access controls, and user authentication mechanisms to protect sensitive information from unauthorized access or breaches.
                                    </h1>
                                    <p className='erp-finacial-description'>
                                        Mobile Access: Recognizing the need for flexibility and remote work, TechSolve enables employees to access documents securely from mobile devices, ensuring productivity even when working outside the office
                                    </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer9} alt='' style={{ width: "100%" }} />
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

