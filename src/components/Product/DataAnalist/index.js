
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

// import erpfinacial from '../../../Assets/erpfinacial.jpg'
import serviesOper from '../../../Assets/serviesOper.jpg'


import Customeranalytics from '../../../Assets/Customeranalytics.png'
import DavidMcCloskey from '../../../Assets/DavidMcCloskey.png'
import FrankBaader from '../../../Assets/FrankBaader.png'
import Healthcareanalytics from '../../../Assets/Healthcareanalytics.png'
import Manufacturinganalytics from '../../../Assets/Manufacturinganalytics.png'
import PierreGrieger from '../../../Assets/PierreGrieger.png'
import Retailanalytics from '../../../Assets/Retailanalytics.png'
import Supplychainmanagement from '../../../Assets/Supplychainmanagement.png'


import data_analist from '../../../Assets/data_analist.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const DataAnalist = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Data Analist </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Data Analytics Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>
                            Even the most abundant and rapidly flowing data will be systematically arranged.
                        </strong><br /> <br />
                        Data analytics involves creating an infrastructure for data collection, examination, and reporting. With 5 years of experience in data analytics services, SoftGenics provides customized business analytics solutions and assists companies in planning future actions based on historical insights.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Share your needs </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={data_analist} alt="imageGoesHere" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Harnessing the power of data across 30+ industries, </strong>
                                SoftGenics enables enterprises to derive transformative insights, driving success at both departmental and organizational levels. Their data analytics solutions empower businesses to fully leverage their data, fostering informed decision-making and strategic growth.
                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Building Data Analytics Solutions for Different Domains</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Tailored data analytics solutions for diverse industries: Softgenics helps businesses in retail, healthcare, finance, and more turn data into actionable intelligence across departments and the entire organization.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Manufacturinganalytics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Comprehensive Analysis</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics conducts in-depth analysis of website traffic sources and user behavior using advanced web analytics tools like Google Analytics.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Healthcareanalytics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Understanding User Behavior</h1>
                                    <p className='erp-card-description'>
                                        We analyze user behavior patterns to pinpoint areas for enhancement and optimize the online experience, ensuring maximum engagement and conversion rates.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Retailanalytics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Quality Assurance</h1>
                                    <p className='erp-card-description'>
                                        We ensure the accuracy, completeness, and reliability of data through rigorous quality assurance processes, enabling confident decision-making based on trustworthy information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Supplychainmanagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Custom Analytical Solutions</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics tailors analytical solutions to meet the unique needs and objectives of each client, providing customized dashboards, reports, and visualizations for intuitive data interpretation.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Customeranalytics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Business Intelligence Integration</h1>
                                    <p className='erp-card-description'>
                                        We integrate data analysis findings with business intelligence tools to facilitate data-driven decision-making, enabling organizations to gain a competitive edge and drive strategic growth initiatives.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Real-Time Data Monitoring</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics offers real-time data monitoring capabilities, allowing clients to track key performance indicators and respond promptly to emerging trends and market dynamics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={DavidMcCloskey} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cross-Functional Collaboration</h1>
                                    <p className='erp-card-description'>
                                        Our data analysts collaborate closely with stakeholders across departments to ensure alignment between analytical insights and organizational objectives, fostering a culture of data-driven decision-making.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={PierreGrieger} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Continuous Improvement</h1>
                                    <p className='erp-card-description'>
                                        We are committed to continuous improvement, regularly refining analytical methodologies and exploring innovative approaches to enhance the value delivered through data analysis.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={FrankBaader} alt='common' style={{ height: "140px", width: "70%", marginTop: "3%" }} />
                                    <h1 className='erp-card-heading'> Training and Support</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics provides comprehensive training and support to empower clients in leveraging data analysis tools and techniques effectively, enabling them to harness the full potential of their data assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Strategic Guidance: With our expertise in data analysis and industry best practices, SoftGenics offers
                                    </h1>
                                    <p className='erp-finacial-description'>
                                        Strategic guidance to help clients capitalize on emerging opportunities, mitigate risks, and achieve their business objectives through informed decision-making.
                                    </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Customeranalytics} alt='' style={{ width: "100%" }} />
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
export default DataAnalist

