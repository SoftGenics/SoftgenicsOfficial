
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


import it_infras from '../../../Assets/it_infras.png'

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
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> InfrastrucherServies </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        IT Infrastructure Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>CRM software is a technology </strong> <br />
                        designed to manage all of Softgenics' company relationships and interactions with customers and potential customers. The primary goal is to enhance business relationships and improve overall profitability.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
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
                            <p className='erp-description'><strong>CRM software </strong> serves as a platform or system that aids Softgenics in contact management, sales management, productivity enhancement,
                                and more. It helps streamline processes and keep the company connected to its customers.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Functional ERP Modules ScienceSoft Develops</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>CRM software enables Softgenics to focus on its relationships with individual stakeholders, including customers, service users, colleagues, and suppliers. It supports the entire lifecycle of these relationships, from initial contact to ongoing support and additional services.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={calculator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Sales and Marketing</h1>
                                    <p className='erp-card-description'>
                                        Sales and Marketing Integration With CRM software, Softgenics' sales and marketing teams can track and follow a customer's interaction journey with the company. This allows for better understanding and refinement of each customer touchpoint, enhancing the overall customer journey and experience.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Enhancing Customer </h1>
                                    <p className='erp-card-description'>
                                        Enhancing Customer Experience By leveraging CRM software, Softgenics can improve the customer experience by providing personalized interactions, targeted marketing campaigns, and efficient support services tailored to individual customer needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Salesforce as a CRM Solution</h1>
                                    <p className='erp-card-description'>
                                        Softgenics can explore using Salesforce, known as the world's #1 CRM, to manage its customer relationships and interactions. Salesforce offers a comprehensive suite of CRM tools and features designed to meet the specific needs of businesses like Softgenics.
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
                                    <h1 className='erp-card-heading'>Data Centralization</h1>
                                    <p className='erp-card-description'>
                                        Data Centralization and Organization CRM software centralizes all customer-related data, including contact information, communication history, purchase history, and preferences. Softgenics can organize this data efficiently, allowing for quick access and informed decision-making.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Automation and Workflow</h1>
                                    <p className='erp-card-description'>
                                        Automation and Workflow Optimization CRM software automates repetitive tasks and workflows, such as email follow-ups, lead nurturing, and sales pipeline management. Softgenics can optimize its processes, reduce manual effort, and ensure consistency in customer interactions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Customization and Personalization</h1>
                                    <p className='erp-card-description'>
                                        CRM software offers customization options to tailor the system to Softgenics' specific requirements and workflows. Softgenics can personalize customer interactions by segmenting audiences, sending targeted messages, and delivering relevant content based on individual preferences.
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
                                    <h1 className='erp-card-heading'> Forecasting and Analytics</h1>
                                    <p className='erp-card-description'>
                                        CRM software provides insights into sales forecasts, performance metrics, and customer behavior trends. Softgenics can analyze data to identify opportunities, anticipate customer needs, and make data-driven decisions to drive business growth.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Mobile Accessibility </h1>
                                    <p className='erp-card-description'>
                                        Mobile Accessibility and Remote Work Support Many CRM software solutions offer mobile applications or cloud-based platforms, enabling access to customer data and tools from anywhere, at any time. Softgenics can empower its teams to work remotely, collaborate effectively, and stay connected with customers on the go.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Integration with Other Systems</h1>
                                    <p className='erp-card-description'>
                                        Integration with Other Systems CRM software integrates seamlessly with other business systems, such as marketing automation platforms, ERP systems, and customer support tools. Softgenics can consolidate data across departments, break down silos, and create a unified view of customer interactions and engagements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Scalability and Flexibility CRM software is scalable and flexible, allowing Softgenics to adapt and grow along with its business needs.
                                    </h1>
                                    <p className='erp-finacial-description'>Whether expanding operations, adding new products or services, or entering new markets, Softgenics can rely on CRM software to support its growth and evolution.</p>
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
export default InfrastrucherServies

