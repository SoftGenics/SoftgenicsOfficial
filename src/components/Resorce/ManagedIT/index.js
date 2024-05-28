
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
                    <img className='banner-image-responsiv' src={data_analist} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>A Managed IT Services Provider </strong> (MSP) is a trusted partner that oversees your IT infrastructure and software, operating under a Service Level Agreement (SLA). At ScienceSoft, we specialize in supporting companies with intricate and ever-changing infrastructures, offering comprehensive services that span from daily monitoring and management to ongoing optimization and evolution.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>As an MSP, SoftGenics offers a wide range of solutions tailored to meet </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>the unique needs of each client. We provide proactive monitoring and maintenance to ensure the smooth operation of your IT environment, </p>
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
                                    <img src={projectMang} alt='' style={{ height: "100px", width: "100px" }} />
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
                                        along with strategic planning and consultation to support your long-term goals.
                                    </h1>
                                    <p className='erp-finacial-description'>Our team of experienced professionals is dedicated to delivering high-quality services and exceptional customer support. With SoftGenics as your MSP, you can trust that your IT infrastructure is in capable hands, allowing you to focus on your core business objectives with confidence.</p>
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

