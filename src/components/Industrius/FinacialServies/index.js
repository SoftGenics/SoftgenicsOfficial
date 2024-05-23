import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import serviesOper from '../../../Assets/serviesOper.jpg'

import finacial from '../../../Assets/finacial.png'
import bankimg from '../../../Assets/bankimg.png'
import costing from '../../../Assets/costing.jpg'
import devlopmentFlow from '../../../Assets/devlopmentFlow.jpg'
import colebretion from '../../../Assets/colebretion.jpg'
import qulityControl from '../../../Assets/qulityControl.jpg'
import securityMang from '../../../Assets/securityMang.jpg'


import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const FinacialServies = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Finacial Services</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Custom Finacial Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        In enterprise software development since 1989, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' style={{ width: "100px" }}> Talk to Us </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={finacial} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Custom ERP </strong>is designed to provide tailor-made functionality to address an enterprise’s
                                <br />unique operational and strategic needs. ScienceSoft's custom ERP software development is aimed to build a scalable business-tailored
                                <br />system that integrates all business management functions and facilitates data-driven decision-making.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Functional ERP Modules ScienceSoft Develops</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Depending on your business needs and budget, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:</p>
                        </div>
                        
                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={costing} alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Cost estimation</h1>
                                    <p className='erp-card-description'>
                                        Effective financial management is the cornerstone of business success. By strategically planning and analyzing finances, managing accounts payable, and optimizing accounts receivable tracking,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={devlopmentFlow} alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Development flow</h1>
                                    <p className='erp-card-description'>
                                        Strategic workforce planning, payroll administration, performance management, employee benefits tracking, and talent acquisition are essential functions within human resources
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={colebretion} alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Collaboration</h1>
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
                                    <img src={qulityControl} alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Quality control</h1>
                                    <p className='erp-card-description'>
                                        Sales and marketing efforts are bolstered by comprehensive financial planning and analysis, streamlined accounts payable and accounts receivable tracking, meticulous general ledger management,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={securityMang} alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Security management</h1>
                                    <p className='erp-card-description'>
                                        n supply chain management, it's imperative to conduct thorough financial planning and analysis. This includes managing accounts payable and tracking accounts receivable diligently.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper}alt='common' style={{ height: "170px", width: "100%"}}/>
                                    <h1 className='erp-card-heading'>Regulatory compliance</h1>
                                    <p className='erp-card-description'>
                                        For service management, effective financial planning and analysis are vital. This includes meticulous tracking of accounts payable and accounts receivable. Furthermore,
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
                                    <img src={bankimg} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>
                        <div className='table-container' style={{ alignItems: "center", paddingBottom: "20px" }}>
                            <Link to="/erp" className='table-item'>Industrius</Link>
                            <Link to="#" className='table-item'>Ecosystem</Link>
                            <Link to="#" className='table-item'>About Us</Link>
                            <Link to="#" className='table-item'>Resources</Link>
                            <Link to="#" className='table-item'>Careers</Link>
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
export default FinacialServies

