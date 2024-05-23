
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import ComplianceConfidence from '../../../Assets/ComplianceConfidence.png'
import EmployeeEngagementBoost from '../../../Assets/EmployeeEngagementBoost.png'
import Footer7 from '../../../Assets/Footer7.png'
import improvedcommunication from '../../../Assets/improvedcommunication.png'
import Meaningfulrecognition from '../../../Assets/Meaningfulrecognition.png'
import Personalizedlearning from '../../../Assets/Personalizedlearning.png'
import ROIRevolution from '../../../Assets/ROIRevolution.png'
import Youraudience from '../../../Assets/Youraudience.png'
import Yourpurpose from '../../../Assets/Yourpurpose.png'
import Yourspecificinterests from '../../../Assets/Yourspecificinterests.png'

import human_resorce from '../../../Assets/human_resorce.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const HumanResorce = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> HumanResorce </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Human Resorce Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Having 3 years of experience in Human Resorce</strong> <br />
                        software development, SoftGenics provides technical product management consulting, product development, UX and UI design, QA, maintenance and support services to create powerful HR systems that help you
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={human_resorce} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Increased efficiency</strong> and productivity: HR software automates manual tasks, saving time and allowing HR professionals to focus on strategic initiatives.
                                Reduced costs Streamlining processes eliminates redundancies and errors, saving money on administrative costs and compliance fines</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Improved data management Centralized data storage </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Enhanced employee experience: Self-service portals and mobile access empower employees to manage their information and HR needs effectively.
                                Better talent acquisition and retention: Streamlined recruiting and onboarding processes attract and retain top talent.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Youraudience} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Requirement Gathering</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics starts by understanding the specific needs and objectives of the client regarding HR management.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Yourpurpose} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>System Design</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics designs the HRM software solution architecture, considering factors like scalability, security, and user experience.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Yourspecificinterests} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Core HR Functionality Development</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics develops modules for core HR functions such as employee records management, payroll processing, benefits administration, and attendance tracking.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ROIRevolution} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Performance Management System</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics designs modules to manage employee performance evaluations, goal setting, feedback mechanisms, and performance improvement plans.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={EmployeeEngagementBoost} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Recruitment and Applicant Tracking System (ATS)</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics creates features for job posting, candidate screening, interview scheduling, and applicant tracking to streamline the recruitment process.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ComplianceConfidence} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Learning and Development Platform</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics develops tools for employee training, skill development, course management, and certification tracking to support continuous learning initiatives
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={improvedcommunication} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Employee Self-Service Portal</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics implements a user-friendly portal where employees can access and update their personal information, view pay stubs, request time off, and participate in company-wide surveys.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Meaningfulrecognition} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Manager Self-Service Features</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics creates functionalities that enable managers to approve leave requests, access performance reports, conduct performance reviews, and make data-driven decisions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Personalizedlearning} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Analytics and Reporting</h1>
                                    <p className='erp-card-description'>
                                        SoftGenics integrates robust analytics and reporting tools into the HRM software to provide insights into key metrics such as employee turnover, training effectiveness, diversity metrics, and workforce demographics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        SoftGenics ensures that the HRM software complies with relevant labor laws, regulations, and industry standards by incorporating features for tracking compliance requirements, 
                                    </h1>
                                    <p className='erp-finacial-description'>SoftGenics develops integration capabilities to connect the HRM software with other enterprise systems such as accounting software, time and attendance systems, and ERP systems for seamless data exchange.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer7} alt='' style={{ width: "100%" }} />
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
export default HumanResorce

