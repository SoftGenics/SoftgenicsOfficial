
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import supplyChain from '../../../Assets/supplyChain.png'

import agile_Delivary from '../../../Assets/agile_Delivary.png'
import application_nd_server from '../../../Assets/application_nd_server.png'
import design_nd_implimenting from '../../../Assets/design_nd_implimenting.png'
import help_desk from '../../../Assets/help_desk.png'
import higth_qulity from '../../../Assets/higth_qulity.png'
import desin_implimenting from '../../../Assets/desin_implimenting.png'
import remote_application from '../../../Assets/remote_application.png'
import stable_work from '../../../Assets/stable_work.png'

import native from '../../../Assets/native.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ApplicationAndServer = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Services</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Application Services</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        End-to-End Application Services
                    </h1>
                    <p className='erp-main-description'>
                        Application Services Overview:
                        Softgenics offers a comprehensive suite of Application Services crucial for optimal
                        <strong> application deployment and management.</strong>
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={native} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Application Server: </strong>
                                An application server is a specialized software platform designed to host and manage applications, providing a robust environment for their execution and delivery</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>you can trust that your application server environment</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>At Softgenics, our application server solutions are engineered to support the unique operational and strategic requirements of enterprises. We focus on building scalable, </p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={higth_qulity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Load Balancing
                                    </h1>
                                    <p className='erp-card-description'>
                                        Softgenics ensures even distribution of traffic across servers to enhance application performance and reliability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={stable_work} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Application Performance Monitoring
                                    </h1>
                                    <p className='erp-card-description'>
                                        We provide robust monitoring tools to track application performance metrics and identify areas for improvement.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={desin_implimenting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Application Acceleration
                                    </h1>
                                    <p className='erp-card-description'>

                                        Softgenics implements techniques to enhance application speed and responsiveness for improved user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={agile_Delivary} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Autoscaling
                                    </h1>
                                    <p className='erp-card-description'>

                                        Our solutions dynamically adjust resources based on demand to maintain optimal application performance and cost-efficiency.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplyChain} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Micro-Segmentation</h1>
                                    <p className='erp-card-description'>

                                        Softgenics employs micro-segmentation techniques to enhance security by isolating application components and data.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={remote_application} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Service Proxy:
                                    </h1>
                                    <p className='erp-card-description'>

                                        We facilitate seamless communication between services by managing proxy configurations efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={application_nd_server} alt='' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Service Discovery
                                    </h1>
                                    <p className='erp-card-description'>

                                        Softgenics ensures efficient service discovery mechanisms for seamless integration and communication between application components.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={help_desk} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Application Services Management
                                    </h1>
                                    <p className='erp-card-description'>

                                        Our team meticulously configures, monitors, optimizes, and orchestrates various application services for smooth operation and continual improvement.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={design_nd_implimenting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Data Center Solutions
                                    </h1>
                                    <p className='erp-card-description'>

                                        Softgenics offers tailored application service solutions for organizations managing their own data centers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Cloud Integration Services:
                                        We assist clients in seamlessly integrating application services with public cloud environments for enhanced scalability and flexibility.
                                    </h1>
                                    <p className='erp-finacial-description'>Continuous Optimization:
                                        Softgenics continuously optimizes application services to adapt to evolving requirements and maximize performance.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={stable_work} alt='' style={{ width: "100%" }} />
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
export default ApplicationAndServer

