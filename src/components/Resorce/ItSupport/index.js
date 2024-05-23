
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


import it_support from '../../../Assets/it_support.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ItSupport = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> It Support </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        IT Support Services
                    </h1>
                    <p className='erp-main-description'>
                        Information technology (IT) support comprises procedures intended to maintain failsafe IT workflows and reduce IT costs. Softgenics IT support services are backed with
                        <strong> 5 years of experience in help desk and application support</strong><br /> <br />
                        and include IT help desk, Network Operations Center (NOC) and software support to guarantee superior user experience and on-the-go improvement of your IT processes.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request It Support </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={it_support} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Forge a lasting partnership,</strong> unlock enduring success. SoftGenics isn't just your custom ERP developer, we're your journey partner. Our comprehensive support extends beyond initial implementation, providing continuous updates, maintenance,</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Turn data into actionable insights, power your progress. </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>and expert advice to ensure your system evolves in tandem with your business. Let us be your trusted technology advisor, driving your success from day one.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={calculator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Feasibility analysis of IT support projects</h1>
                                    <p className='erp-card-description'>
                                        Before we jump in, we like to crunch some numbers! We analyze the total cost of running your apps and infrastructure, as well as the potential return you'll see from our support.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Result-oriented service and transparent reporting</h1>
                                    <p className='erp-card-description'>
                                        We don't just say yes blindly. We dig deep into the costs and benefits of supporting your systems.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Focus on long-term collaboration</h1>
                                    <p className='erp-card-description'>
                                        By analyzing your TCO and ROI upfront, we can identify areas for optimization and cost reduction with our support. This upfront analysis ensures you reap the maximum return on your investment.
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
                                    <h1 className='erp-card-heading'>Network Operations Center</h1>
                                    <p className='erp-card-description'>
                                        Preventive monitoring of IT network with L2, L3 support.
                                        NOC setup and introduction of efficient workflows and policies.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Application Support</h1>
                                    <p className='erp-card-description'>
                                        L1, L2, L3 support and proactive improvement of your cloud or on-premises application, including: Monitoring, testing, code reviews.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Full IT Support</h1>
                                    <p className='erp-card-description'>
                                        Comprehensive support of your IT infrastructure, including:
                                        <br />IT help desk.
                                        <br />Network Operations Center.
                                        <br />Software support.
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
                                    <h1 className='erp-card-heading'>Multi-tier incident resolution pipeline:</h1>
                                    <p className='erp-card-description'>
                                        Are they IT-related, customer service-related, or something else entirely?
                                        will help suggest alternatives or improvements.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Focus on efficiency:</h1>
                                    <p className='erp-card-description'>
                                        Streamlined escalation process: Instead of having multiple layers of support, consider a more direct path to reach specialized assistance when needed.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Focus on user satisfaction:</h1>
                                    <p className='erp-card-description'>
                                        Empathetic first-line support: Train your initial support team to actively listen, provide timely updates, and show genuine concern for user needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Forge a lasting partnership, unlock enduring success. Sftgenics isn't just your custom ERP developer, we're your journey partner.
                                    </h1>
                                    <p className='erp-finacial-description'>FOur comprehensive support extends beyond initial implementation, providing continuous updates, maintenance, and expert advice to ensure your system evolves in tandem with your business. Let us be your trusted technology advisor, driving your success from day one.</p>
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
export default ItSupport

