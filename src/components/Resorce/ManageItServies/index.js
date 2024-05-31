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
                        {/* In enterprise software development since 1989, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs. */}
                        Since 1989, Softgenics has specialized in <b>enterprise software development</b>, providing comprehensive ERP solutions and support to <strong>"increase"</strong> business <strong>workflow efficiency</strong>, <strong>reduce operational risks</strong>, and <strong>optimize costs</strong>.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'>
                            Request Managed IT services
                        </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={ItManagement} alt="image_goes_here" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>A Managed IT Services Provider </strong> (MSP)
                                is a reliable partner responsible for overseeing your IT infrastructure and software through a <b>Service Level Agreement (SLA)</b>. At <b>SoftGenics</b>, we are experts in assisting businesses with sophisticated and <b>evolving infrastructures</b>, delivering a full suite of services that includes <b>daily monitoring</b>, <b>proactive management</b>, and <b>continuous optimization</b> and innovation.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>
                                As an MSP, SoftGenics offers tailored solutions to meet diverse IT needs.
                            </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>
                                As an Service Provider, <b>SoftGenics</b> delivers bespoke solutions to address the unique requirements of each client. We provide <b>rigorous monitoring</b> and <b>maintenance</b> to ensure <b>seamless operation</b> and <b>optimal performance</b> of your IT environment.</p>
                        </div>
                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ItInfra} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Assessment</h1>
                                    <p className='erp-card-description'>
                                        Evaluation of the IT infrastructure focusing on scalability, operational efficiency, and security.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={infrastuchor} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>24/7 Monitoring </h1>
                                    <p className='erp-card-description'>
                                        Setup of infrastructure monitoring and alerting tools, typically using Prometheus or Nagios.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={administator} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Administration</h1>
                                    <p className='erp-card-description'>
                                        Management of user administration, routine software configuration, and updates.
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
                                    <h1 className='erp-card-heading'>Help Desk</h1>
                                    <p className='erp-card-description'>
                                        Providing L3 help desk support for resolving code-level application issues and addressing advanced infrastructure-related problems and requests.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={cloudmanag} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud management</h1>
                                    <p className='erp-card-description'>
                                        Managing multi-cloud infrastructures, deploying cloud solutions, and migrating applications and data seamlessly to the cloud.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={applicationservis} alt='' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Application services</h1>
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
                                    <img src={qulityControl} alt='common' style={{ height: "180px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>DevOps Management</h1>
                                    <p className='erp-card-description'>
                                        Implementation of a containerization strategy (based on Kubernetes or Apache Mesos).
                                        Design of an automated monitoring solution.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={securityMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Managed security</h1>
                                    <p className='erp-card-description'>
                                        For nine months, SoftGenics provided white-label L1 help desk services to Delap LLP, a leading US financial services firm and MSP. Swiftly resolving 60% of tickets from five clients with a 7-minute FTR, we freed Delap's in-house L2 and L3 support teams.
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
                                        Offering strategic planning and consultation to help achieve your long-term objectives.                                    </h1>
                                    <p className='erp-finacial-description'>
                                        At SoftGenics, our seasoned professionals are committed to providing top-notch services and outstanding customer support. Entrusting your IT infrastructure to us as your MSP ensures it's managed with expertise, enabling you to concentrate on your core business objectives with unwavering confidence.                                        </p>
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

