import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import Showcase_awards_recognition from '../../../Assets/Showcase_awards_recognition.png'
import Cross_platform_capabilities from '../../../Assets/Cross_platform_capabilities.png'
import Experienced_team from '../../../Assets/Experienced_team.png'
import Highlight_specific_tools from '../../../Assets/Highlight_specific_tools.png'
import Modern_C_practices from '../../../Assets/Modern_C_practices.png'
import Performance_optimization_experts from '../../../Assets/Performance_optimization_experts.png'
import Security_conscious_development from '../../../Assets/Security_conscious_development.png'
import Showcase_recognition from '../../../Assets/Showcase_recognition.png'
import Agile_Development3 from '../../../Assets/Agile_Development3.png'


import c from '../../../Assets/c.jpg'

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
                <Link className='link-classes2'>C++</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        C/C++ Development Services
                    </h1>
                    <p className='erp-main-description'>
                        In C++ development since 2018, Softgenics creates high-performing and resilient C++ libraries and apps, including advanced solutions for
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={c} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>C++ continues to be a</strong> powerhouse language for performance-critical applications, high-frequency trading systems, and demanding software across various industries. At SoftGenics,</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Deep Dive into SoftGenics' C++ Development Prowess</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> our seasoned C++ developers leverage their expertise and passion for this language to create robust, efficient, and future-proof solutions for your needs. Here's how we can benefit you</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Experienced_team} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Experienced team</h1>
                                    <p className='erp-card-description'>
                                        Our developers possess strong fundamentals and experience in diverse C++ libraries, frameworks, and design patterns.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Cross_platform_capabilities} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cross-platform capabilities</h1>
                                    <p className='erp-card-description'>
                                        We build applications that run seamlessly across various platforms, including Windows, Linux, macOS, and embedded systems.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Modern_C_practices} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Modern C++ practices</h1>
                                    <p className='erp-card-description'>
                                        We embrace modern C++ standards and best practices, ensuring code clarity, maintainability, and optimal performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Performance_optimization_experts} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Performance optimization experts</h1>
                                    <p className='erp-card-description'>
                                        We squeeze every ounce of performance from your C++ code, delivering lightning-fast applications,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Agile_Development3} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Agile development</h1>
                                    <p className='erp-card-description'>
                                        We collaborate closely with you throughout the development process, ensuring your C++ solution aligns with your evolving needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Security_conscious_development} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Security-conscious development</h1>
                                    <p className='erp-card-description'>
                                        We prioritize secure coding practices and utilize industry-standard security measures to protect your applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Showcase_recognition} alt='common' style={{ height: "170px", width: "100%" }}  />
                                    <h1 className='erp-card-heading'>Quantify your expertise</h1>
                                    <p className='erp-card-description'>
                                    Mention the number of years of experience your team has with each language.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Highlight_specific_tools} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Highlight specific tools and technologies</h1>
                                    <p className='erp-card-description'>
                                    Specify which frameworks, libraries, or methodologies you use within each language
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Showcase_awards_recognition} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Showcase awards or recognition</h1>
                                    <p className='erp-card-description'>
                                    Did your team win any awards or receive recognition for their work in specific languages
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Consider creating separate content for each language. This allows for deeper dives into their unique strengths and target different audiences.
                                    </h1>
                                    <p className='erp-finacial-description'>Unfortunately, I still lack the specific details about SoftGenics to provide truly impactful and personalized information. However, I can offer some additional points you can incorporate based on the existing content</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Modern_C_practices} alt='' style={{ width: "100%" }} />
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

