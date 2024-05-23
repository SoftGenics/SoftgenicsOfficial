import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import product from '../../../Assets/product.png'
import Automatedprocessing from '../../../Assets/Automatedprocessing.png'
import bill from '../../../Assets/bill.png'
import Customizabledashboards from '../../../Assets/Customizabledashboards.png'
import Flexibleintegrations from '../../../Assets/Flexibleintegrations.png'
import Futureproofscalability from '../../../Assets/Futureproofscalability.png'
import Globalreach from '../../../Assets/Globalreach.png'
import Omnichannelpayments from '../../../Assets/Omnichannelpayments.png'
import Riskmanagement from '../../../Assets/Riskmanagement.png'
import Transparencyandcontrol from '../../../Assets/Transparencyandcontrol.png'


import it_infras from '../../../Assets/it_infras.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const PaymentManagment = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Payment Managment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Payment Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        SoftGenics combines
                        <strong> 5 years</strong> <br />
                        of experience in payment software development with deep practical knowledge of 30+ industries
                        to deliver reliable and effective payment solutions tailored to our customers’ unique needs
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Take to Us </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
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
                            <p className='erp-description'><strong>In today's digital</strong> landscape, seamless and secure payment experiences are crucial for business success. SoftGenics we're not just developers </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>SoftGenics: Streamlining Payments, Empowering Businesses</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>we're payment solutions architects. We design and build user-friendly, high-performing payment software that empowers businesses to</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Automatedprocessing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Automated processing</h1>
                                    <p className='erp-card-description'>
                                    Eliminate manual tasks and errors with secure, automated payment workflows. Streamline processes like recurring billing, invoicing, and refunds, freeing up resources for strategic initiatives.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Omnichannelpayments} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>online payments</h1>
                                    <p className='erp-card-description'>
                                    Cater to diverse customer preferences with seamless payment options across online, mobile, and in-store environments. Whether it's a tap-to-pay solution or an integrated shopping cart checkout,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Global reach</h1>
                                    <p className='erp-card-description'>
                                    Expand your customer base without borders. We integrate with international payment gateways, ensuring secure and compliant transactions across various currencies and regulations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Globalreach} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Data encryption</h1>
                                    <p className='erp-card-description'>
                                    Prioritize security with robust data encryption and fraud prevention measures. Protect sensitive financial information throughout the entire payment process, fostering trust and compliance with industry standards.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Riskmanagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Risk management</h1>
                                    <p className='erp-card-description'>
                                    Implement multi-layered security protocols to identify and mitigate potential threats. Our solutions safeguard your business and your customers' financial data.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Transparencyandcontrol} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Transparency and control</h1>
                                    <p className='erp-card-description'>
                                    Grant granular access control and detailed transaction logs, providing clear visibility and auditability, fostering transparency and building trust with customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Flexibleintegrations} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Flexible integrations</h1>
                                    <p className='erp-card-description'>
                                    Our solutions integrate seamlessly with your existing systems, including ERP, CRM, and accounting software. Streamline data flow and eliminate manual data entry for frictionless operations.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Customizabledashboards} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Customizable dashboards</h1>
                                    <p className='erp-card-description'>
                                    Visualize key payment metrics and gain valuable insights with customizable dashboards. Track performance, identify trends, and make informed decisions to optimize your payment processes.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Futureproofscalability} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Future-proof scalability</h1>
                                    <p className='erp-card-description'>
                                    We build with scalability in mind. Our solutions adapt to your growing business needs, supporting increased transaction volume and diverse payment methods as you expand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Expert consultation: Our dedicated team of payment specialists works closely with you to understand your unique needs and challenges. 
                                    </h1>
                                    <p className='erp-finacial-description'>Ongoing support: We offer comprehensive support and maintenance to ensure your payment software continues to operate optimally and adapts to evolving security standards and regulations.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={bill} alt='' style={{ width: "100%" }} />
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
export default PaymentManagment

