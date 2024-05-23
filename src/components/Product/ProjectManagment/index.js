
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import AutomatedWorkflows from '../../../Assets/AutomatedWorkflows.png'
import CentralizedPlatform from '../../../Assets/CentralizedPlatform.png'
import footer10 from '../../../Assets/footer10.png'
import CustomizableDashboard from '../../../Assets/CustomizableDashboard.png'
import IntegratedCommunicationTools from '../../../Assets/IntegratedCommunicationTools.png'
import RealTimeVisibilit from '../../../Assets/RealTimeVisibilit.png'
import ReportingandAnalytics from '../../../Assets/ReportingandAnalytics.png'
import ResourceManagement from '../../../Assets/ResourceManagement.png'
import RiskManagemen from '../../../Assets/RiskManagemen.png'
import TaskManagementandCollaboration from '../../../Assets/TaskManagementandCollaboration.png'

import project_managment from '../../../Assets/project_managment.jpg'

import Footer from '../../Footer'
import Header from '../../Header'
import './index.css'

const ProjectManagment = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Project Managment </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Custom Project Management Software
                    </h1>
                    <p className='erp-main-description'>
                        Versatility Across Industries: Softgenics utilizes project management software across various industries, adapting its features to orchestrate projects ranging from software development to consultancy services.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Project Management </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={project_managment} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Nonprofit Projects Coordination</strong> Softgenics employs project management software to coordinate volunteer efforts efficiently, ensuring effective communication and task allocation for charitable projects it supports.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Educational Initiatives Management: Softgenics leverages project management</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> tools to develop new academic programs, manage campus beautification projects, and streamline administrative tasks within educational institutions it collaborates with.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={CentralizedPlatform} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Support for Freelancers</h1>
                                    <p className='erp-card-description'>
                                        Support for Freelancers and Small Business Owners Softgenics recognizes the value of project management software for freelancers and small business owners, enabling them to manage multiple clients effectively and efficiently.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IntegratedCommunicationTools} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client-Centric Approach</h1>
                                    <p className='erp-card-description'>
                                        Client-Centric Approach in Professional Services Softgenics prioritizes client satisfaction by utilizing project management software to keep clients informed about project progress, milestones, and deliverables, fostering transparency and trust in professional service engagements.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={TaskManagementandCollaboration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Internal Efficiency</h1>
                                    <p className='erp-card-description'>
                                        Internal Efficiency and Productivity Softgenics enhances internal operations by using project management software to streamline workflows, assign tasks, track deadlines, and monitor project budgets, ensuring optimal efficiency and productivity within the organization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={RealTimeVisibilit} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Collaboration and Communication</h1>
                                    <p className='erp-card-description'>
                                        Collaboration and Communication Softgenics promotes collaboration and communication among team members and stakeholders through project management software, facilitating real-time updates, file sharing, and feedback exchange to drive project success.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AutomatedWorkflows} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Resource Allocation </h1>
                                    <p className='erp-card-description'>
                                        Resource Allocation and Planning Softgenics optimizes resource allocation and project planning by utilizing features such as resource scheduling, capacity planning, and workload management within project management software, ensuring optimal utilization of human and material resources.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CustomizableDashboard} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Data-driven Decision-making </h1>
                                    <p className='erp-card-description'>
                                        Data-driven Decision-making Softgenics harnesses the analytical capabilities of project management software to gather insights and metrics on project performance, enabling data-driven decision-making and continuous improvement in project execution and delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ReportingandAnalytics} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Documentation and Knowledge Management</h1>

                                    <p className='erp-card-description'>
                                        Documentation and Knowledge Management Softgenics utilizes project management software to centralize project documentation and knowledge management. This includes storing project plans, meeting notes, and documentation templates in a centralized repository, ensuring easy access and knowledge sharing among team members.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ResourceManagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Time Tracking and Reporting</h1>
                                    <p className='erp-card-description'>
                                        Time Tracking and Reporting Softgenics implements time tracking features within project management software to accurately record time spent on project tasks. This enables better project costing, resource allocation, and client billing. Additionally, Softgenics generates detailed reports on project progress, budget utilization, and team productivity to provide stakeholders with transparent insights into project performance.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={RiskManagemen} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Collaboration Portals</h1>
                                    <p className='erp-card-description'>
                                        Client Collaboration Portals Softgenics leverages project management software to create client collaboration portals, providing clients with real-time visibility into project progress, deliverables, and milestones. This fosters transparency, trust, and collaboration between Softgenics and its clients, leading to improved client satisfaction and retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>

                                    <h1 className='erp-finacial-heading'>
                                        Scalability and Adaptability Softgenics ensures that the project management software it uses is scalable and adaptable to accommodate evolving project requirements and organizational growth.
                                    </h1>

                                    <p className='erp-finacial-description'> This includes selecting software solutions that offer customizable workflows, integrations with other tools, and scalability to support projects of varying sizes and complexities.
                                    </p>

                                </div>

                                <div className='erp-finacial-rigth'>
                                    <img src={footer10} alt='' style={{ width: "100%" }} />
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
export default ProjectManagment

