
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import Agile_development6 from '../../../Assets/Agile_development6.png'
import ux_ui2 from '../../../Assets/ux_ui2.png'
import Full_stack_fluency from '../../../Assets/Full_stack_fluency.png'
import Hot_reloading from '../../../Assets/Hot_reloading.png'
import Knowledge2_sharing from '../../../Assets/Knowledge2_sharing.png'
import Modular_architectur from '../../../Assets/Modular_architectur.png'
import Native_performance from '../../../Assets/Native_performance.png'
import Testing_quality_assurance from '../../../Assets/Testing_quality_assurance.png'
import UI_UX_excellence from '../../../Assets/UI_UX_excellence.png'

import native from '../../../Assets/native.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const ERP = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Technology</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>ReactNative</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        React Native Developers for Hire
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics offers services of React Native programmers, who create clean cross-platform code that runs on Android, iOS, and web, thus reducing up to 50% time and costs of projects targeting multiple platforms. We have been accumulating <strong>expertise in React Native since its initial release in 2018 </strong>
                        and heavily invest in our developers’ growth to provide only top-notch React Native talents.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
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
                            <p className='erp-description'><strong>React Native has </strong>revolutionized mobile app development with its ability to create native-looking apps using JavaScript. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Bridging the Gap SoftGenics' Expertise in React Native Development</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>At SoftGenics, we leverage this groundbreaking technology to deliver cross-platform solutions that are efficient, scalable, and user-centric. Let's explore how our React Native expertise translates into your success</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Full_stack_fluency} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Full-stack fluency</h1>
                                    <p className='erp-card-description'>
                                        Our developers possess in-depth knowledge of the React Native ecosystem, including core architecture, popular libraries, and third-party integrations
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Native_performance} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Native performance</h1>
                                    <p className='erp-card-description'>
                                        We optimize code and leverage platform-specific APIs to deliver apps that feel and perform like true native applications.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={UI_UX_excellence} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cross-platform efficiency</h1>
                                    <p className='erp-card-description'>
                                        We develop once and deploy across iOS and Android, saving you time and resources
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ux_ui2} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>UI/UX excellence</h1>
                                    <p className='erp-card-description'>
                                        We understand the importance of great design and create aesthetically pleasing, intuitive user interfaces.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Agile_development6} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Agile development</h1>
                                    <p className='erp-card-description'>
                                        We prioritize flexibility and collaboration, ensuring your app evolves seamlessly with your changing needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Modular_architectur} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Modular architecture</h1>
                                    <p className='erp-card-description'>
                                        We build maintainable and reusable components, simplifying future updates and feature additions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Hot_reloading} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Hot reloading</h1>
                                    <p className='erp-card-description'>
                                        We facilitate rapid development cycles with hot reloading, allowing you to see changes instantly without restarting the app
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Testing_quality_assurance} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Testing and quality assurance</h1>
                                    <p className='erp-card-description'>
                                        We employ rigorous testing practices to deliver bug-free, high-quality apps.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Knowledge2_sharing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge sharing</h1>
                                    <p className='erp-card-description'>
                                        We empower your team through workshops, code reviews, and knowledge transfer initiatives, fostering a collaborative environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Engaging social media applications for seamless user interaction
                                        Efficient e-commerce apps with intuitive interfaces and smooth shopping experiences
                                    </h1>
                                    <p className='erp-finacial-description'>Partner with SoftGenics and unlock the potential of this transformative technology. Our team of React Native experts is committed to collaborating, innovating, and delivering solutions that drive your app's success</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={UI_UX_excellence} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/asp-dot-net" className='table-item'>Asp .Net</Link>
                            <Link to="/c" className='table-item'>C++</Link>
                            <Link to="/golang" className='table-item'>Golang</Link>
                            <Link to="/java" className='table-item'>Java</Link>
                            <Link to="/javaScript" className='table-item'>JavaScript</Link>
                            <Link to="/node" className='table-item'>Node.js</Link>
                            <Link to="/php" className='table-item'>PHP</Link>
                            <Link to="/python" className='table-item'>Python</Link>
                            <Link to="/react-native" className='table-item'>ReactNative</Link>
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
export default ERP

