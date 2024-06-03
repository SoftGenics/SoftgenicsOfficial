
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import knowegeMang from '../../../Assets/knowegeMang.png'

import Continuousimprovement from '../../../Assets/Continuousimprovement.png'
import Demystifyingyourdata from '../../../Assets/Demystifyingyourdata.png'
import financ from '../../../Assets/financ.png'
import Leveragecuttingedge from '../../../Assets/Leveragecuttingedge.png'
import Modernizefinancefunction from '../../../Assets/Modernizefinancefunction.png'
import Optimizeworkflows from '../../../Assets/Optimizeworkflows.png'
import Targetambitiousgoals from '../../../Assets/Targetambitiousgoals.png'
import Transformativetechnology from '../../../Assets/Transformativetechnology.png'
import Wedontjustimplement from '../../../Assets/Wedontjustimplement.png'

import Finacial_mangment from '../../../Assets/Finacial_mangment.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const FinacialManagment = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> FinacialManagment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Financial Software Consulting Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Bring corporate financial management to new heights</strong> <br />
                        Since 2018, Softgenics provides companies in 20+ industries with consulting and practical assistance on the design and implementation of reliable financial management software.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Talk to Us </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Finacial_mangment} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Unleashing Financial Agility:</strong> How SoftGenics Empowers You with Next-Gen Solutions
                                Beyond managing finances, Softgenics helps you master them.
                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Streamlining Processes, Supercharging Results</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>We partner with companies like yours to unlock the full potential of your financial operations, driving growth, efficiency, and innovation. Here's how:</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Modernizefinancefunction} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Modernize your finance function</h1>
                                    <p className='erp-card-description'>
                                        We implement robust financial software solutions, seamlessly integrating with existing systems to automate tasks, eliminate manual errors, and free up valuable resources.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Optimizeworkflows} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Optimize workflows</h1>
                                    <p className='erp-card-description'>
                                        Our experts analyze your processes, identifying bottlenecks and streamlining them for maximum efficiency. Data-driven insights guide optimizations, ensuring your finance function operates at peak performance.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Leveragecuttingedge} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Financial Analysis</h1>
                                    <p className='erp-card-description'>
                                        At SoftGenics, financial analysis involves a thorough examination of financial data to understand the costs, benefits, and risks associated with IT investments. This process enables informed, data-driven decisions regarding IT spending,
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Targetambitiousgoals} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Target ambitious goals</h1>
                                    <p className='erp-card-description'>
                                        Our team empowers you to pursue ambitious business innovations. We analyze your financial model, identify opportunities, and guide you towards sustainable growth trajectories.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Wedontjustimplement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>We don't just implement</h1>
                                    <p className='erp-card-description'>
                                        From initial requirements gathering to ongoing support, we work closely with you to understand your unique needs and goals
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Continuousimprovement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Continuous improvement</h1>
                                    <p className='erp-card-description'>
                                        We believe in fostering a culture of continuous improvement. We offer ongoing support, training, and expertise to ensure your finance function remains optimized and future-proof.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Transformativetechnology} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Transformative technology</h1>
                                    <p className='erp-card-description'>
                                        We go beyond basic automation. We implement robust finance software that integrates seamlessly with your existing systems. But we don't stop there. We leverage AI, machine learning
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Demystifyingyourdata} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Beyond optimization</h1>
                                    <p className='erp-card-description'>
                                        We don't just make your current processes faster. We analyze them from the ground up, identifying bottlenecks and reimagining
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Finance Mang. Strategy</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics' financial management strategy ensures alignment between ITFM objectives and the overall business strategy. It involves understanding the organization's financial goals, creating financial policies and procedures
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Financial Reporting and Analysis
                                        SoftGenics emphasizes timely and accurate financial reporting to provide
                                    </h1>
                                    <p className='erp-finacial-description'>stakeholders with insights into the company's financial performance. This includes generating financial statements, variance analysis, and performance metrics to track key financial indicators and trends. </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={financ} alt='' style={{ width: "100%" }} />
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
export default FinacialManagment

