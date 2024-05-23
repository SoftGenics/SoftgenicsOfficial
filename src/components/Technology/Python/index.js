
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import product from '../../../Assets/product.png'

import Across_Python_lndscape from '../../../Assets/Across_Python_lndscape.webp'
import Agile_development from '../../../Assets/Agile_development.png'
import Communication_transparency from '../../../Assets/Communication_transparency.png'
import Data_science_mastery from '../../../Assets/Data_science_mastery.png'
import development from '../../../Assets/development.png'
import Industry_specific_solutions from '../../../Assets/Industry_specific_solutions.png'
import Knowledge_sharing from '../../../Assets/Knowledge_sharing.png'
import Security_scalability from '../../../Assets/Security_scalability.png'


import python from '../../../Assets/python.jpg'

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
                <Link className='link-classes2'>Python</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Top-Tier Python Developers for Hire
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics offers the services of
                        <strong> Python developers and data scientists with 5 years of experience</strong>
                        and support to help companies boost the efficiency of their unique business workflows, minimize operational risks, and optimize costs.<br />
                        who ensure first-time-right code, on-time delivery, and high productivity. Our flexible services stretch
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={python} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>At SoftGenics</strong> we believe in the power of Python to deliver innovation and efficiency across a wide range of applications.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Custom Web Development: Softgenics offers tailored Python solutions for creating dynamic</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> responsive websites, enhancing user experience, and meeting specific business needs through custom features and seamless functionality.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Across_Python_lndscape} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Web Application Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics builds robust, scalable web applications using Python frameworks like Django and Flask, catering to diverse industries with high performance and user-friendly interfaces.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Data_science_mastery} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Data Analytics</h1>
                                    <p className='erp-card-description'>
                                        Softgenics utilizes Python libraries like Pandas and NumPy for data manipulation, analysis, and visualization, helping businesses extract actionable insights and make data-driven decisions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Machine Learning</h1>
                                    <p className='erp-card-description'>
                                        Softgenics implements machine learning algorithms using Python libraries like Scikit-learn and TensorFlow, providing predictive analytics and intelligent applications to enhance business processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Agile_development} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IoT Solutions</h1>
                                    <p className='erp-card-description'>
                                        Softgenics creates Python-based Internet of Things applications to connect and control smart devices seamlessly, enabling efficient data exchange and device management.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Security_scalability} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>API Development</h1>
                                    <p className='erp-card-description'>
                                        Softgenics builds secure, efficient APIs with Python to enable smooth integration and communication between different software systems, enhancing overall functionality and interoperability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Communication_transparency} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Automation Scripts</h1>
                                    <p className='erp-card-description'>
                                        Softgenics writes Python scripts to automate repetitive tasks, increasing operational efficiency, reducing manual effort, and minimizing the risk of errors in daily processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Knowledge_sharing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud Integration</h1>
                                    <p className='erp-card-description'>
                                        Softgenics integrates Python applications with cloud platforms like AWS, Google Cloud, and Azure, providing scalable and flexible cloud solutions to meet growing business needs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Industry_specific_solutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>DevOps Automation</h1>
                                    <p className='erp-card-description'>
                                        Softgenics uses Python for automating DevOps processes, ensuring continuous integration and delivery, streamlining the software development lifecycle, and promoting collaboration between development and operations teams.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={development} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cybersecurity Solutions</h1>
                                    <p className='erp-card-description'>
                                        Softgenics develops Python-based tools to enhance cybersecurity measures, protect against digital threats, and ensure data privacy and security across applications and networks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        E-commerce Development Softgenics builds custom Python-based e-commerce platforms to support online transactions, 
                                    </h1>
                                    <p className='erp-finacial-description'>inventory management, and customer engagement, providing a secure and scalable solution for online businesses.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={development} alt='' style={{ width: "100%" }} />
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

