
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
                <Link className='link-classes2'> ItOut Sourcing </Link>
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
                        <strong>Optimize Current Operations. Launch New Projects.</strong><br /> <br />  <br />
                        IT outsourcing services include application development, infrastructure and software support and maintenance, data center management, and other initiatives. With 5 years in It <br />
                        ScienceSoft takes over any IT tasks you want to outsource or cooperates with your vendors to provide the services.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'>Request ItOut Sourcing </Link>
                        <Link className='Get-a-cost-estimate'> Get a quote </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={out_sorce} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Outsourcing your IT </strong> needs to a reliable partner can streamline operations and enhance efficiency. SoftGenics offers comprehensive IT outsourcing services tailored to your business requirements. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>From software development to infrastructure management,</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>our experienced team ensures seamless integration and optimal performance. With ScienceSoft as your trusted IT outsourcing partner,</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={calculator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Staff augmentation</h1>
                                    <p className='erp-card-description'>
                                        Cover resource or skill gaps of your in-house IT team with our experts managed by you directly.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Self-managed team</h1>
                                    <p className='erp-card-description'>
                                        Get a self-managed team led by Softgenics PM or Team Lead to carry out your IT initiative.
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
                                        "Empower your sales and marketing teams by streamlining key workflows with seamless application support."
                                        "Reduce processing time and boost productivity with efficient accounts
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Digital crisis management and response
                                    </h1>
                                    <p className='erp-card-description'>
                                        "Minimize data entry errors and ensure accurate financial reporting through meticulous general ledger management backed by reliable application support."
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Cloud application development
                                    </h1>
                                    <p className='erp-card-description'>
                                        Prevent costly downtime and ensure uninterrupted business operations with proactive application support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={projectMang} alt='' style={{ height: "100px", width: "100px" }} />
                                    <h1 className='erp-card-heading'>Project management</h1>
                                    <p className='erp-card-description'>
                                        Reduce the risk of data breaches and security vulnerabilities through ongoing application maintenance and updates."
                                        "Maximize software ROI by extending the lifespan of your applications
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Document management</h1>
                                    <p className='erp-card-description'>
                                        Increase user satisfaction and adoption rates with responsive and helpful application support."
                                        "Empower users with the knowledge and resources they need to get the
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge management</h1>
                                    <p className='erp-card-description'>
                                        most out of your applications."
                                        "Improve communication and collaboration across teams with integrated application support services."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        you can focus on core business activities while we take care of your IT needs, providing cost-effective solutions and reliable support.
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

