
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
                        In enterprise software development since 1989, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
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
                                    <h1 className='erp-card-heading'>Finance and accounting</h1>
                                    <p className='erp-card-description'>
                                        Effective financial management is the cornerstone of business success. By strategically planning and analyzing finances, managing accounts payable, and optimizing accounts receivable tracking,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Human resources</h1>
                                    <p className='erp-card-description'>
                                        Strategic workforce planning, payroll administration, performance management, employee benefits tracking, and talent acquisition are essential functions within human resources
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Production management</h1>
                                    <p className='erp-card-description'>
                                        Product management involves market analysis, feature prioritization, user feedback integration, roadmap planning, and agile development coordination. Additionally,
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
                                    <h1 className='erp-card-heading'>Sales and marketing</h1>
                                    <p className='erp-card-description'>
                                        Sales and marketing efforts are bolstered by comprehensive financial planning and analysis, streamlined accounts payable and accounts receivable tracking, meticulous general ledger management,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Supply chain management</h1>
                                    <p className='erp-card-description'>
                                        n supply chain management, it's imperative to conduct thorough financial planning and analysis. This includes managing accounts payable and tracking accounts receivable diligently.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Service operations management</h1>
                                    <p className='erp-card-description'>
                                        For service management, effective financial planning and analysis are vital. This includes meticulous tracking of accounts payable and accounts receivable. Furthermore,
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
                                    <h1 className='erp-card-heading'>Project management</h1>
                                    <p className='erp-card-description'>
                                        In product management, it's crucial to incorporate financial planning and analysis into decision-making processes. This involves managing accounts payable and diligently tracking accounts receivable.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Document management</h1>
                                    <p className='erp-card-description'>
                                        In document management, it's important to incorporate financial planning and analysis to ensure efficient operations. This includes meticulous tracking of accounts payable and accounts receivable.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge management</h1>
                                    <p className='erp-card-description'>
                                        In Knowledge management, integrating financial planning and analysis is crucial for operational efficiency. This encompasses meticulous monitoring of accounts payable and accounts receivable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        The Financial Times Includes SOFTGENICS USA Corporation in the List of the Americas’ Fastest-Growing Companies 2023
                                    </h1>
                                    <p className='erp-finacial-description'>For the second year in a row, SOFTGENICS USA Corporation ranks among 500 American companies with the highest revenue growth. This achievement is the result of our unfailing commitment to provide high-quality IT services and create best-value solutions that meet and even exceed our clients’ expectations.</p>
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

