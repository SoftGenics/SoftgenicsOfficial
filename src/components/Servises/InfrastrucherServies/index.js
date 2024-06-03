
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import IT_infrastructure_management from '../../../Assets/IT_infrastructure_management.png'
import Cloud_infrastructure_consultingt from '../../../Assets/Cloud_infrastructure_consultingt.png'
import Cloud_infrastructure_management from '../../../Assets/Cloud_infrastructure_management.png'
import Cloud_infrastructure_security from '../../../Assets/Cloud_infrastructure_security.png'
import Cloud_migration from '../../../Assets/Cloud_migration.png'
import It_infrastructure_support from '../../../Assets/It_infrastructure_support.png'
import It_infrasture_consulting from '../../../Assets/It_infrasture_consulting.png'
import Knowledge_management from '../../../Assets/Knowledge_management.png'
import Managed_infrastructure_services from '../../../Assets/Managed_infrastructure_services.png'

import it_infras from '../../../Assets/it_infras.png'

import Footer from '../../Footer';
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
                        <strong>Overview of IT Infrastructure Services</strong> <br />
                        Softgenics provides a comprehensive range of IT infrastructure services crucial for modern business operations.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
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
                            <p className='erp-description'><strong>Planning and Design </strong>Infrastructure
                                Softgenics assists clients in planning and designing IT infrastructure solutions tailored to their specific needs and objectives.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Infrastructure Setup and Management</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Network
                                Softgenics offers expertise in setting up and managing robust network infrastructures to ensure seamless connectivity and data flow.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Cloud_infrastructure_consultingt} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Storage Solutions Implementation</h1>
                                    <p className='erp-card-description'>
                                        Softgenics implements scalable and secure storage solutions to efficiently manage and store data assets.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={It_infrastructure_support} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Cloud Infrastructure Services</h1>
                                    <p className='erp-card-description'>
                                        Softgenics provides cloud infrastructure services, including migration, setup, and management of cloud environments for enhanced agility and scalability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IT_infrastructure_management} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Data Center Management</h1>
                                    <p className='erp-card-description'>

                                        Softgenics offers data center management services, ensuring the smooth operation and security of critical infrastructure components.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Managed_infrastructure_services} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Backup and Disaster Recovery Solutions</h1>
                                    <p className='erp-card-description'>

                                        Softgenics designs and implements backup and disaster recovery solutions to safeguard data and ensure business continuity.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={It_infrasture_consulting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Virtualization Technologies</h1>
                                    <p className='erp-card-description'>

                                        Softgenics leverages virtualization technologies to optimize resource utilization and streamline infrastructure management.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Cloud_infrastructure_management} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Security Infrastructure Implementation</h1>
                                    <p className='erp-card-description'>

                                        Softgenics implements robust security infrastructure solutions to protect against cyber threats and ensure compliance with regulatory requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Cloud_migration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Monitoring and Performance Optimization</h1>
                                    <p className='erp-card-description'>

                                        Softgenics provides monitoring and performance optimization services to proactively identify and address issues, ensuring optimal infrastructure performance.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Cloud_infrastructure_security} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> End-user Support and Helpdesk Services</h1>
                                    <p className='erp-card-description'>

                                        Softgenics offers end-user support and helpdesk services to ensure users have access to timely assistance and troubleshooting.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Knowledge_management} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT Infrastructure Consulting and Advisory</h1>
                                    <p className='erp-card-description'>

                                        Softgenics provides consulting and advisory services to help clients assess, plan, and optimize their IT infrastructure investments.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Server Infrastructure Deployment and Maintenance
                                        Softgenics handles the deployment and maintenance of server infrastructures, optimizing performance and reliability.
                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics implements automation and orchestration solutions to streamline repetitive tasks and improve operational efficiency.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Cloud_infrastructure_consultingt} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/application" className='table-item'>Application</Link>
                            <Link to="/application-and-server" className='table-item'>ApplicationAndServer</Link>
                            <Link to="/Infrastrucher-servies" className='table-item'>InfrastrucherServies</Link>
                            <Link to="/mobile-devlopment" className='table-item'>MobileDevlopment</Link>
                            <Link to="/testing-andQA" className='table-item'>TestingAndQA</Link>
                            <Link to="/ux-and-ui" className='table-item'>UIandUX</Link>
                            <Link to="/web-dev" className='table-item'>Web devlopment</Link>
                            <Link to="/word-press" className='table-item'>WordPress</Link>
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

