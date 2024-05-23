
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


import CustomContentDevelopment from '../../../Assets/CustomContentDevelopment.png'
import Footer8 from '../../../Assets/Footer8.png'
import LearningAnalyticsandMeasurement from '../../../Assets/LearningAnalyticsandMeasurement.png'
import LearningExperiencePlatforms from '../../../Assets/LearningExperiencePlatforms.png'
import MicrolearningandIntegration from '../../../Assets/MicrolearningandIntegration.png'
import MicrolearningPlatformIntegration from '../../../Assets/MicrolearningPlatformIntegration.png'
import PerformanceSupportTools from '../../../Assets/PerformanceSupportTools.png'
import PersonalizationandAdaptability from '../../../Assets/PersonalizationandAdaptability.png'
import SocialandCollaborative from '../../../Assets/SocialandCollaborative.png'
import VRARIntegration from '../../../Assets/VRARIntegration.png'

import Elearning from '../../../Assets/Elearning.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ELearning = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> ELearning </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        eLearning Software Development Services
                    </h1>
                    <p className='erp-main-description'>
                        Since 2018, SoftGenics has been building eLearning solutions that
                        <strong> drive digital transformation of corporate learning resulting in human capital ROI growth.</strong> <br />
                        SoftGenics team is ready to streamline your corporate learning with technology or modernize your current eLearning software.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Elearning Solutions </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Elearning} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Personalization and Adaptability:</strong> Cater to diverse learning styles and preferences with personalized pathways, microlearning modules, and adaptive learning techniques. Facilitate continuous learning through bite-sized content easily </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>accessible on mobile devices and integrated with workflows</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Social and Collaborative Learning: Foster engagement and knowledge sharing through gamification, social learning platforms, and collaborative projects.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={PersonalizationandAdaptability} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Custom E-learning Solutions</h1>
                                    <p className='erp-card-description'>
                                        Softgenics specializes in creating tailored e-learning software to meet diverse educational needs, fostering effective remote learning experiences for learners worldwide.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={MicrolearningandIntegration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Node.js Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics harnesses the power of Node.js to build robust and scalable e-learning platforms, ensuring seamless performance and reliability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SocialandCollaborative} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>React.js Expertise</h1>
                                    <p className='erp-card-description'>
                                        Softgenics utilizes React.js to develop interactive and user-friendly interfaces for e-learning applications, enhancing engagement and usability for learners.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={LearningAnalyticsandMeasurement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Vue.js Integration</h1>
                                    <p className='erp-card-description'>
                                        Softgenics seamlessly integrates Vue.js into e-learning solutions, delivering intuitive and responsive user interfaces for enhanced learning experiences.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={VRARIntegration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>TypeScript Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics leverages TypeScript to build scalable and maintainable e-learning applications, ensuring code quality and reliability for long-term success.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CustomContentDevelopment} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Remote Learning Tools</h1>
                                    <p className='erp-card-description'>
                                        Softgenics develops innovative tools and platforms for remote learning, enabling seamless knowledge sharing and collaboration among educators and learners.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={PerformanceSupportTools} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Personalized Learning Platforms</h1>
                                    <p className='erp-card-description'>
                                        Softgenics creates personalized e-learning platforms tailored to individual learning styles and preferences, optimizing engagement and knowledge retention.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={LearningExperiencePlatforms} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Adaptive Learning Systems</h1>
                                    <p className='erp-card-description'>
                                        Softgenics implements adaptive algorithms in e-learning systems to personalize learning experiences based on learners' progress and performance.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={MicrolearningPlatformIntegration} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Gamified Learning Environments</h1>
                                    <p className='erp-card-description'>
                                        Softgenics designs gamified e-learning platforms to enhance learner motivation and engagement, fostering a fun and immersive learning experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Interactive Courseware Development: Softgenics develops interactive course materials, including multimedia content and simulations, to provide engaging and effective learning experiences.
                                    </h1>
                                    <p className='erp-finacial-description'>Cloud-Based E-learning Solutions: Softgenics offers cloud-based e-learning platforms, enabling easy access to educational resources anytime, anywhere, and on any device.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer8} alt='' style={{ width: "100%" }} />
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
export default ELearning

