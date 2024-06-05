//Updated Saurav 1
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
import knowledgeImage from '../../../Assets/knowledgeImage.svg'


import out_sorce from '../../../Assets/out_sorce.jpg'

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
                <Link className='link-classes2'> IT Outsourcing </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        IT Outsourcing Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Streamline Operations and Initiate New Ventures</strong><br /> <br />  <br />
                        IT outsourcing services include application development, infrastructure and software support and maintenance, data center management, and other initiatives.                        <br />
                        With 5 years in IT, ScienceSoft can manage any IT tasks you want to outsource or work alongside your vendors to deliver these services.                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'>Request Out Sourcing </Link>
                        <Link className='Get-a-cost-estimate'> Get a quote </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={out_sorce} alt="Image_Goes_Here" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'>
                                <strong>Partnering with a dependable provider </strong>
                                for your IT needs can optimize operations and boost efficiency. SoftGenics delivers tailored IT outsourcing services to meet your specific business requirements.                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>
                                From software development to infrastructure management,</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>
                                our skilled team guarantees seamless integration and optimal performance. With SoftGenics as your reliable IT outsourcing partner, you can trust in exceptional service delivery.                            </p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={calculator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Staff augmentation</h1>
                                    <p className='erp-card-description'>
                                        Bridge resource or skill gaps in your in-house IT team with our experts, managed directly by you.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Self-managed team</h1>
                                    <p className='erp-card-description'>
                                        Leverage a self-managed team, led by a Softgenics Project Manager or Team Lead, to execute your IT initiatives efficiently.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Full outsourcing</h1>
                                    <p className='erp-card-description'>
                                        We take care of your specific IT function(s) with full responsibility for their quality and related risks.
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
                                    <h1 className='erp-card-heading'>
                                        Application support and evolution
                                    </h1>
                                    <p className='erp-card-description'>
                                        Boost your sales and marketing teams' efficiency by optimizing essential workflows through seamless application integration. Minimize processing time and enhance productivity with streamlined accounts solutions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "150px", width: "60%", marginTop: "4%" }} />
                                    <h1 className='erp-card-heading'>
                                        Navigating Digital Crisis
                                    </h1>
                                    <p className='erp-card-description'>
                                        Empower your organization to navigate digital crises seamlessly with our expert guidance and strategic solutions.                                                                            </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Cloud application development
                                    </h1>
                                    <p className='erp-card-description'>
                                        Elevate your business with cutting-edge cloud application development tailored to your unique needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={projectMang} alt='' style={{ height: "150px", width: "60%", marginTop: "20px" }} />
                                    <h1 className='erp-card-heading'>Project management</h1>
                                    <p className='erp-card-description'>
                                        Drive success with efficient project management solutions, designed to optimize workflow and deliver exceptional results.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "160px", width: "80%" }} />
                                    <h1 className='erp-card-heading'>Document Manage</h1>
                                    <p className='erp-card-description'>
                                        Streamline your operations with robust document management solutions, ensuring secure and efficient handling of your critical information.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowledgeImage} alt='common' style={{ height: "120px", width: "60%", paddingTop: "20px" }} />
                                    <h1 className='erp-card-heading'>Knowledge management</h1>
                                    <p className='erp-card-description'>
                                        Enhance your organization’s efficiency with comprehensive knowledge management solutions, facilitating seamless information sharing and retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Streamlined IT Solutions for Business Efficiency                                    </h1>
                                    <p className='erp-finacial-description'>
                                        For the second consecutive year, SOFTGENICS USA Corporation ranks among the top 500 American companies for highest revenue growth. This accomplishment reflects our unwavering dedication to delivering superior IT services and crafting best-value solutions that consistently surpass our clients' expectations.                                        </p>
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
                            <Link to="/cyber-security" className='table-item'>Cyber Security</Link>
                            <Link to="/itOut-sourcing" className='table-item'>IT Out Sourceing</Link>
                            <Link to="/It-support" className='table-item'>IT Support</Link>
                            <Link to="/data-analist" className='table-item'>Data Analytics</Link>
                            <Link to="/manage-it-servies" className='table-item'>Managed IT Service</Link>
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

