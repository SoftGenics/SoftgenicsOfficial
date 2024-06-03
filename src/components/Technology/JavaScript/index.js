import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import calculator from '../../../Assets/calculator.jpg'
import humanRes from '../../../Assets/humanRes.jpg'
import erpfinacial from '../../../Assets/erpfinacial.jpg'


import skills from '../../../Assets/skills.jpg'
import managment from '../../../Assets/managment.jpg'
import securityMang from '../../../Assets/securityMang.jpg'
import proccescost from '../../../Assets/proccescost.jpg'
import supplymange from '../../../Assets/supplymange.jpg'
import reortexample from '../../../Assets/reortexample.jpg'
import flexsiblecolabration from '../../../Assets/flexsiblecolabration.jpg'
import riskmange from '../../../Assets/riskmange.jpg'
import bussionMang from '../../../Assets/bussionMang.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const JavaScript = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Technology</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>JavaScript</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        JavaScript Development Services
                    </h1>
                    <p className='erp-main-description'>
                        In enterprise software development since 1989, Softgenics offers <strong>end-to-end ERP development </strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.
                    </p>
                    <div className='link-container-erp'>
                        <Link to="/new-roject" className='Request-ERP-development' style={{ width: "auto", paddingRight: "10px" }}> Discuss my needs </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={erpfinacial} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>JavaScript has become </strong> the lingua franca of the web, powering dynamic applications and user interfaces like never before. </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Unleashing the Future with JavaScript: SoftGenics' Expertise</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>At SoftGenics, we harness JavaScript's versatility and performance to craft transformative solutions that deliver exceptional user experiences and drive tangible business results. Let's delve into our expertise and how it benefits you</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={riskmange} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Full-stack proficiency</h1>
                                    <p className='erp-card-description'>
                                        Our developers navigate the entire JavaScript ecosystem, mastering frameworks like React, Angular, Vue.js, and libraries like Node.js for both front-end and back-end needs,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={humanRes} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Progressive Web App</h1>
                                    <p className='erp-card-description'>
                                        We craft PWAs that deliver native app-like experiences, engaging users offline and across devices.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={reortexample} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Single-Page Application </h1>
                                    <p className='erp-card-description'>
                                        We leverage SPAs to create seamless, high-performance web interfaces that minimize page loads and enhance user interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={flexsiblecolabration} alt='' style={{ height: "100px", width: "100px" }} />
                                    <h1 className='erp-card-heading'>Cross-platform capabilities</h1>
                                    <p className='erp-card-description'>
                                        We build applications that run flawlessly across various platforms, ensuring wider reach and accessibility.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={supplymange} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Agile development</h1>
                                    <p className='erp-card-description'>
                                        We prioritize iterative development and close collaboration, ensuring your JavaScript application reflects your evolving vision and business requirements.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={proccescost} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Performance optimization</h1>
                                    <p className='erp-card-description'>
                                        We optimize code and leverage web technologies for lightning-fast loading times and a smooth user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={managment} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Secure coding practices</h1>
                                    <p className='erp-card-description'>
                                        We prioritize security to protect user data and application integrity, mitigating potential vulnerabilities.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={securityMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Responsive design implementation</h1>
                                    <p className='erp-card-description'>
                                        We create applications that adapt beautifully across different screen sizes and devices, catering to diverse user needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={skills} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Knowledge sharing</h1>
                                    <p className='erp-card-description'>
                                        We empower your team through workshops, code reviews, and knowledge transfer initiatives, fostering continuous learning and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        High-performance PWAs that offer native app experiences regardless of internet connectivity
                                        Intuitive and responsive SPAs that streamline user journeys
                                    </h1>
                                    <p className='erp-finacial-description'>Partner with SoftGenics and unlock the potential of this dynamic technology. Our team of JavaScript experts is committed to collaborating, innovating, and delivering solutions that drive your business success.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={bussionMang} alt='' style={{ width: "100%" }} />
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
export default JavaScript

