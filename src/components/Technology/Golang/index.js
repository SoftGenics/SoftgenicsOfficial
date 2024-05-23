
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import product from '../../../Assets/product.png'
import serviesOper from '../../../Assets/serviesOper.jpg'

import Agile_Development3 from '../../../Assets/Agile_Development3.png'
import Clean_Readable_Code from '../../../Assets/Clean_Readable_Code.png'
import cloud_computing from '../../../Assets/cloud_computing.png'
import Command_Line_Interface from '../../../Assets/Command_Line_Interface.png'
import Comprehensive_Framework_Knowledge from '../../../Assets/Comprehensive_Framework_Knowledge.png'
import Concurrency_Microservices_Champions from '../../../Assets/Concurrency_Microservices_Champions.png'
import Performance_Optimization from '../../../Assets/Performance_Optimization.png'


import golang from '../../../Assets/golang.png'

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
                <Link className='link-classes2'>Golang</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Golang Web Development Services
                    </h1>
                    <p className='erp-main-description'>

                        Softgenics offers services by top Go developers who build robust cloud-native applications empowered by advanced techs – IoT, big data, AI, machine learning, blockchain.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={golang} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>also known as Golang,</strong> has surged in popularity due to its simplicity, speed, and concurrency capabilities. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Deep Dive into SoftGenics' Expertise: Mastering the Go for Performance and Efficiency</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>At SoftGenics, we harness the power of Go to build robust, scalable, and performant applications for diverse needs. Here's how our expertise translates into your success</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Comprehensive_Framework_Knowledge} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Comprehensive Framework Knowledge</h1>
                                    <p className='erp-card-description'>
                                        We excel in popular frameworks like Gin, Echo, and Gorilla, ensuring efficient development and optimal application structure.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Concurrency_Microservices_Champions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Concurrency and Microservices Champions</h1>
                                    <p className='erp-card-description'>
                                        We leverage Go's native concurrency features and design microservices architectures for unmatched scalability and responsiveness.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Command-Line Interface</h1>
                                    <p className='erp-card-description'>
                                        We craft powerful and user-friendly CLIs for automation, tool development, and efficient system interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={cloud_computing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud-Native</h1>
                                    <p className='erp-card-description'>
                                        We build applications tailored for cloud environments like AWS, Google Cloud Platform, and Azure, maximizing resource utilization and scalability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Agile_Development3} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Agile Development</h1>
                                    <p className='erp-card-description'>
                                        We prioritize iterative development and close collaboration, ensuring your Go application continuously reflects your evolving needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Performance Optimization</h1>
                                    <p className='erp-card-description'>
                                        We leverage Go's efficient nature and optimize code for lightning-fast execution times and improved user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Clean_Readable_Code} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Clean and Readable Code</h1>
                                    <p className='erp-card-description'>
                                        We prioritize clear and consistent code structure, facilitating collaboration, maintenance, and long-term project success.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Performance_Optimization} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Security-First Approach</h1>
                                    <p className='erp-card-description'>
                                        We emphasize secure coding practices and utilize industry-standard tools to protect your applications from vulnerabilities.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Command_Line_Interface} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge Sharing</h1>
                                    <p className='erp-card-description'>
                                        We empower your team through workshops, code reviews, and knowledge transfer initiatives, fostering a sustainable technical environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        High-performance web applications with lightning-fast response times
                                        Scalable microservices architectures for efficient resource utilization
                                    </h1>
                                    <p className='erp-finacial-description'>Partner with SoftGenics and unlock the true potential of this dynamic language. Our team of Go experts is committed to collaborating, innovating, and delivering solutions that optimize your business performance.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={cloud_computing} alt='' style={{ width: "100%" }} />
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

