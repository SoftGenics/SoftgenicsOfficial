
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import calculator from '../../../Assets/calculator.jpg'
import humanRes from '../../../Assets/humanRes.jpg'
import product from '../../../Assets/product.png'
import erpfinacial from '../../../Assets/erpfinacial.jpg'
import salesMarketing from '../../../Assets/salesMarketing.png'
import supplyChain from '../../../Assets/supplyChain.png'
import serviesOper from '../../../Assets/serviesOper.jpg'
import projectMang from '../../../Assets/projectMang.png'
import documentMang from '../../../Assets/documentMang.jpg'
import knowegeMang from '../../../Assets/knowegeMang.png'


import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ERP = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>ERP</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Custom ERP Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        In enterprise software development since 2019, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={erpfinacial} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Custom ERP </strong>is designed to provide tailor-made functionality to address an enterprise’s
                                <br />unique operational and strategic needs. Softgenics custom ERP software development is aimed to build a scalable business-tailored
                                <br />system that integrates all business management functions and facilitates data-driven decision-making.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Functional ERP Modules Softgenics Develops</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Depending on your business needs and budget, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={calculator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Excels in ERP Software </h1>
                                    <p className='erp-card-description'>
                                        Softgenics is dedicated to delivering top-notch ERP solutions tailored to meet the unique needs of businesses across various industries. Our approach is comprehensive, innovative, and customer-centric, ensuring exceptional results for every project.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Understanding Client Needs</h1>
                                    <p className='erp-card-description'>
                                        We start by deeply understanding our clients' business processes and specific requirements through consultations and workshops. This ensures that our ERP solutions are perfectly aligned with their operational needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Tailored Solutions</h1>
                                    <p className='erp-card-description'>
                                        Softgenics offers both customization and configuration options, tailoring ERP systems to the precise requirements of each business. Our solutions are scalable and flexible, ideal for both SMEs and large corporations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={salesMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Seamless Integration</h1>
                                    <p className='erp-card-description'>
                                    We excel at integrating new ERP systems with existing business systems, ensuring smooth data flow and interoperability. This minimizes disruption and maximizes efficiency.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Best Practices</h1>
                                    <p className='erp-card-description'>
                                    Following industry best practices, our ERP implementation includes meticulous planning, data migration, system configuration, and extensive user training. We provide continuous support to ensure a successful transition.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Data Security</h1>
                                    <p className='erp-card-description'>
                                    Softgenics prioritizes data security with robust features like encryption, access controls, and regular security audits to protect sensitive business data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={projectMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Training and Support</h1>
                                    <p className='erp-card-description'>
                                    We offer extensive training programs and ongoing support to ensure successful ERP adoption. Our dedicated support team is always available to assist users.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Measuring Success</h1>
                                    <p className='erp-card-description'>
                                    We track critical KPIs such as operational efficiency, cost savings, and user satisfaction to measure the success of our ERP solutions and provide detailed reports for continuous improvement.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>ERP solutions</h1>
                                    <p className='erp-card-description'>
                                    Softgenics' ERP solutions for financial management, including automated accounting processes, improved accuracy, and detailed financial reporting.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Softgenics' ERP solutions enhance supply chain management through real-time data, inventory control, and optimized logistics.
                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics' ERP systems improve HR functions, including recruitment, payroll, performance management, and employee self-service portals.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={erpfinacial} alt='' style={{ width: "100%" }} />
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
export default ERP

