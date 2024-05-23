
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import documentMang from '../../../Assets/documentMang.jpg'

import Future_your_Java_applications from '../../../Assets/Future_your_Java_applications.png'
import Java_architects_behind_your_success from '../../../Assets/Java_architects_behind_your_success.png'
import Java_developmen from '../../../Assets/Java_developmen.png'
import Open_communication from '../../../Assets/Open_communication.png'
import Social_media_posts from '../../../Assets/Social_media_posts.png'
import Unleashing_Java_potential from '../../../Assets/Unleashing_Java_potential.png'
import Website_content from '../../../Assets/Website_content.png'
import Your_trusted_development from '../../../Assets/Your_trusted_development.png'

import java from '../../../Assets/java.png'


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
                <Link className='link-classes2'>Java</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Java Application Development Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Advanced Java Collections Framework for Softgenics Projects </strong>
                        <br />
                        Dive into collections' performance, thread-safety, and best practices for selecting the right collection types to optimize Softgenics' Java applications.

                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={java} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Functional Programming with Java</strong>  Lambda Expressions at Softgenics
                                Master lambda expressions, method references, and functional interfaces to enhance code readability and maintainability in Softgenics' Java development.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Processing with Stream API in Softgenics Applications</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Data
                                Utilize Stream API for efficient data manipulation, filtering, mapping, and reduction operations in Softgenics' Java projects.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Unleashing_Java_potential} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Building RESTful </h1>
                                    <p className='erp-card-description'>
                                        Building RESTful Web Services with Spring Boot at Softgenics
                                        Create robust and scalable REST APIs using Spring Boot, focusing on exception handling, validation, and Swagger documentation for Softgenics clients.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Java_architects_behind_your_success} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Concurrent Programming</h1>
                                    <p className='erp-card-description'>
                                        Multithreading and Concurrency in Softgenics
                                        Implement concurrent programming techniques, thread synchronization, and avoid pitfalls like deadlock and race conditions in Softgenics software solutions.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Future_your_Java_applications} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Securing Java Applications</h1>
                                    <p className='erp-card-description'>
                                        Securing Java Applications with Spring Security at Softgenics
                                        Secure web applications with Spring Security, focusing on authentication, authorization, and protection against common vulnerabilities for Softgenics projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Java_developmen} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Developing Microservices</h1>
                                    <p className='erp-card-description'>
                                        Developing Microservices with Spring Cloud for Softgenics
                                        Design and develop microservices using Spring Cloud components like Config, Eureka, Ribbon, and Zuul for scalable and resilient Softgenics applications.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Your_trusted_development} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>ORM with Hibernate</h1>
                                    <p className='erp-card-description'>
                                        ORM with Hibernate and JPA in Softgenics Projects
                                        Map Java objects to database tables using Hibernate and JPA, including querying and transaction management for Softgenics applications.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Open_communication} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Optimizing Performance</h1>
                                    <p className='erp-card-description'>
                                        Optimizing Performance Java Tuning at Softgenics
                                        Techniques for profiling and tuning Java applications, optimizing garbage collection, and improving performance for Softgenics software.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Website_content} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> CI/CD with Jenkins </h1>
                                    <p className='erp-card-description'>
                                        CI/CD with Jenkins for Softgenics Java Projects
                                        Automate the build, testing, and deployment pipeline for Java applications using Jenkins, Docker, and Kubernetes in Softgenics projects.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Serverless Java Development </h1>
                                    <p className='erp-card-description'>
                                        Serverless Java Development with AWS Lambda at Softgenics
                                        Build and deploy serverless functions using AWS Lambda, integrating with other AWS services for scalable, event-driven Softgenics applications.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Social_media_posts} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Reactive Programming</h1>
                                    <p className='erp-card-description'>
                                        Reactive Programming with Project Reactor at Softgenics
                                        Leverage reactive programming paradigms to build responsive and resilient applications using Project Reactor and Reactive Streams at Softgenics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        
                                        Apply classic and modern design patterns to solve common software design problems and improve code maintainability in Softgenics projects.
                                    </h1>
                                    <p className='erp-finacial-description'>
                                        Package Java applications into Docker containers for consistent development, testing, and deployment across different environments in Softgenics projects.
                                    </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Unleashing_Java_potential} alt='' style={{ width: "100%" }} />
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

