
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import Agile_development1 from '../../../Assets/Agile_development1.png'
import API_integration_specialists from '../../../Assets/API_integration_specialists.png'
import CMS_proficiency from '../../../Assets/CMS_proficiency.png'
import E_commerce_expertise from '../../../Assets/E_commerce_expertise.png'
import Framework_fluency from '../../../Assets/Framework_fluency.png'
import Knowledge_sharing1 from '../../../Assets/Knowledge_sharing1.png'
import Ongoing_maintenance from '../../../Assets/Ongoing_maintenance.png'
import php2 from '../../../Assets/php2.png'
import Security_first_approach from '../../../Assets/Security_first_approach.png'

import php from '../../../Assets/php.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const PHP = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Technology</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>PHP</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        PHP Web Development Services
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics offers tailored PHP solutions for creating dynamic, responsive websites, enhancing user experience, and meeting specific business needs through custom features and seamless functionality.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={php} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Web Application Development</strong>  Softgenics builds robust, scalable web applications using PHP frameworks like Laravel and CodeIgniter, catering to diverse industries with high performance and user-friendly interfaces. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Softgenics builds custom PHP-based e-commerce platforms to support</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> online transactions, inventory management, and customer engagement, providing a secure and scalable solution for online businesses.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Framework_fluency} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>CMS Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics develops custom content management systems (CMS) with PHP, enabling easy content updates, website management, and scalability for businesses of all sizes.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={E_commerce_expertise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>API Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics builds secure, efficient APIs with PHP to enable smooth integration and communication between different software systems, enhancing overall functionality and interoperability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CMS_proficiency} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Portal Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics creates user-friendly web portals using PHP, offering streamlined access to information, services, and resources for businesses, communities, and organizations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={API_integration_specialists} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>CRM Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics develops custom CRM systems with PHP to help businesses manage customer interactions, sales processes, and data analytics, improving customer relationships and operational efficiency.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Agile_development1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Social Networking Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics builds social networking platforms using PHP, creating engaging, interactive, and scalable environments for users to connect and share content.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Security_first_approach} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Enterprise Solutions</h1>
                                    <p className='erp-card-description'>
                                        Softgenics develops PHP-based enterprise solutions to streamline business processes, improve collaboration, and enhance overall productivity through custom-built applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Knowledge_sharing1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>PHP Migration Services</h1>
                                    <p className='erp-card-description'>
                                        Softgenics provides PHP migration services, ensuring seamless transitions from legacy systems to modern PHP-based applications, improving performance and maintainability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Ongoing_maintenance} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Custom Plugin Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics creates custom PHP plugins to extend the functionality of existing websites and applications, offering tailored solutions to meet specific business needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={php2} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>PHP Performance Optimization</h1>
                                    <p className='erp-card-description'>
                                        Softgenics optimizes PHP applications for performance, ensuring fast load times, efficient resource usage, and a smooth user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics integrates PHP applications with third-party services and APIs, enhancing functionality and enabling seamless data exchange between systems.

                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics implements robust security measures in PHP applications to protect against vulnerabilities, ensuring data privacy and application integrity.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={E_commerce_expertise} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/asp-dot-net" className='table-item'>Asp .Net</Link>
                            <Link to="/c" className='table-item'>C++</Link>
                            <Link to="/golang" className='table-item'>Golang</Link>
                            <Link to="/java" className='table-item'>Java</Link>
                            <Link to="/javaScript" className='table-item'>JavaScript</Link>
                            <Link to="/node" className='table-item'>Node.js</Link>
                            <Link to="/php" className='table-item'>PHP</Link>
                            <Link to="/python" className='table-item'>Python</Link>
                            <Link to="/react-native" className='table-item'>ReactNative</Link>
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
export default PHP

