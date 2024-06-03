
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import Agile_development5 from '../../../Assets/Agile_development5.png'
import API_building_specialists from '../../../Assets/API_building_specialists.png'
import Cloud_native_solutions from '../../../Assets/Cloud_native_solutions.png'
import Full_stack_proficiency from '../../../Assets/Full_stack_proficiency.png'
import Microservices_architecture from '../../../Assets/Microservices_architecture.png'
import Real_time_expertise from '../../../Assets/Real_time_expertise.png'
import Knowledge1_sharing from '../../../Assets/Knowledge1_sharing.png'
import Performance1_optimization from '../../../Assets/Performance1_optimization.png'
import Security1_first_approach from '../../../Assets/Security1_first_approach.png'


import node from '../../../Assets/node.png'

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
                <Link className='link-classes2'>Node.js</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Node.js Development Services
                    </h1>
                    <p className='erp-main-description'>
                        Node.js is a JavaScript runtime used for server-side development of software that can efficiently <strong>operate in a  real-time, data-intensive environment.</strong>
                        for 30 industries, including healthcare, retail, and financial services.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={node} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Node.js has revolutionized</strong> web development with its lightning-fast speed, scalability, and real-time capabilities. At SoftGenics, we harness this transformative technology to create dynamic, </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Unveiling the Powerhouse: SoftGenics' Expertise in Node.js Development</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>user-centric applications that empower your business. Let's explore how our Node.js expertise translates into your success</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Full_stack_proficiency} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Full-stack proficiency</h1>
                                    <p className='erp-card-description'>
                                        Our developers command every aspect of the Node.js ecosystem, from front-end frameworks like React and Vue.js to back-end libraries like Express and NestJS.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={API_building_specialists} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>API building specialists</h1>
                                    <p className='erp-card-description'>
                                        We design and develop robust, secure APIs that seamlessly integrate with various services and applications.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Real_time_expertise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Real-time expertise</h1>
                                    <p className='erp-card-description'>
                                        We leverage Node.js's inherent strengths to build real-time applications like chat systems, collaborative tools, and data streaming platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Cloud_native_solutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud-native solutions</h1>
                                    <p className='erp-card-description'>
                                        We implement best practices for deploying and managing Node.js applications on cloud platforms like AWS, Azure, and Google Cloud.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Agile_development5} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Agile development</h1>
                                    <p className='erp-card-description'>
                                        We prioritize continuous iteration and close collaboration, ensuring your Node.js application aligns perfectly with your evolving needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Microservices_architecture} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Microservices architecture</h1>
                                    <p className='erp-card-description'>
                                        We leverage microservices principles for improved scalability, maintainability, and fault tolerance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Performance1_optimization} alt='common' style={{ height: "170px", width: "100%" }}/>
                                    <h1 className='erp-card-heading'>Performance optimization</h1>
                                    <p className='erp-card-description'>
                                        We optimize your Node.js code for exceptional speed and responsiveness, enhancing user experience
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Security1_first_approach} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Security-first approach</h1>
                                    <p className='erp-card-description'>
                                        We prioritize secure coding practices and integrate robust security measures to protect your applications from vulnerabilities.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Knowledge1_sharing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge sharing</h1>
                                    <p className='erp-card-description'>
                                        We empower your team through workshops, code reviews, and knowledge transfer initiatives, fostering long-term technical partnerships.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        High-performance web applications with exceptional user experience
                                        Real-time data dashboards for actionable insights
                                    </h1>
                                    <p className='erp-finacial-description'>For the second year in a row, SOFTGENICS USA Partner with SoftGenics and unlock the true potential of this transformative technology. Our team of Node.js experts is committed to collaborating, innovating, and delivering solutions that propel your business forward.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Security1_first_approach} alt='commen' style={{ width: "100%" }} />
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

