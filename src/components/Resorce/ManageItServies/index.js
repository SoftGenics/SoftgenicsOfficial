import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import serviesOper from '../../../Assets/serviesOper.jpg'

import qulityControl from '../../../Assets/qulityControl.jpg'
import securityMang from '../../../Assets/securityMang.jpg'


import applicationservis from '../../../Assets/applicationservis.png'
import cloudmanag from '../../../Assets/cloudmanag.jpg'
import elpdext from '../../../Assets/elpdext.jpg'
import administator from '../../../Assets/administator.png'
import infrastuchor from '../../../Assets/infrastuchor.jpg'
import ItInfra from '../../../Assets/ItInfra.jpg'
import oldMan from '../../../Assets/oldMan.png'
import ItManagement from '../../../Assets/ItManagement.jpg'


import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ManageItServies = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Manage It Servies</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Custom Manage It Servies Software
                    </h1>
                    <p className='erp-main-description'>
                        In enterprise software development since 1989, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'>
                            Request Managed IT services
                        </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={ItManagement} />
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
                                    <img src={ItInfra} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT infrastructure assessment</h1>
                                    <p className='erp-card-description'>
                                        Analysis of the IT infrastructure state with the focus on scalability, operational efficiency, and security.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={infrastuchor} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT infrastructure monitoring 24/7</h1>
                                    <p className='erp-card-description'>
                                        Configuration of tools for infrastructure monitoring and alerting (we commonly opt for Prometheus or Nagios).
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={administator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT infrastructure administration</h1>
                                    <p className='erp-card-description'>
                                        User administration, regular software configuration and updates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={elpdext} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT help desk</h1>
                                    <p className='erp-card-description'>
                                        L3 help desk – resolution of app issues on the code level, advanced infrastructure-related problems and requests.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={cloudmanag} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud management</h1>
                                    <p className='erp-card-description'>
                                        and multi-cloud infrastructure management.<br />Deployment of cloud infrastructures.
                                        <br />Applications and data migration to the cloud.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={applicationservis} alt='' style={{ height: "90px", width: "100px" }} />
                                    <h1 className='erp-card-heading'>Managed application services</h1>
                                    <p className='erp-card-description'>
                                        Application evolution with continuous delivery of new features and design experiments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={qulityControl} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Managed DevOps</h1>
                                    <p className='erp-card-description'>
                                        Implementation of a containerization strategy (based on Kubernetes or Apache Mesos).
                                        Design of an automated monitoring solution.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={securityMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Managed security</h1>
                                    <p className='erp-card-description'>

                                        For nine months, SoftGenics provided white-label L1 help desk services to Delap LLP, an established US financial services firm and MSP. By promptly resolving 60% of all the tickets from five of Delap's clients with a 7-minute FTR, we freed up its in-house L2 and L3 support teams.

                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cost savings</h1>
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
                                        along with strategic planning and consultation to support your long-term goals.
                                    </h1>
                                    <p className='erp-finacial-description'>Our team of experienced professionals is dedicated to delivering high-quality services and exceptional customer support. With SoftGenics as your MSP, you can trust that your IT infrastructure is in capable hands, allowing you to focus on your core business objectives with confidence.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={oldMan} alt='' style={{ width: "100%" }} />
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
export default ManageItServies

