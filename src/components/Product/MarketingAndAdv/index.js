
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"

import BrandStrategyandPositioning from '../../../Assets/BrandStrategyandPositioning.png'
import ContentMarketings from '../../../Assets/ContentMarketings.png'
import DataDrivenDecisionMaking from '../../../Assets/DataDrivenDecisionMaking.png'
import Footer13 from '../../../Assets/Footer13.png'
import InfluencerMarketing from '../../../Assets/InfluencerMarketing.png'
import OmnichannelMarketing from '../../../Assets/OmnichannelMarketing.png'
import PerformanceMarketing from '../../../Assets/PerformanceMarketing.png'
import RelationshipManagement from '../../../Assets/RelationshipManagement.png'
import SocialMediaMarketing from '../../../Assets/SocialMediaMarketing.png'
import VideoMarketing from '../../../Assets/VideoMarketing.png'


import advisment from '../../../Assets/advisment.png'

import Footer from '../../Footer'
import Header from '../../Header'
import './index.css'

const MarketingAndAdv = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Marketing And Advertising </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Custom Marketing Software Development
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics specializes in custom marketing software development, leveraging 5 years of experience to enhance marketing initiatives for enterprises. Our solutions improve efficiency and empower businesses with tailored software to optimize their marketing plans.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request Assistance</Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={advisment} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>At Softgenics, we understand</strong>  the importance of optimizing marketing plans to achieve business success. With our custom marketing software development services, </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>we work closely with our clients to analyze their marketing strategies and identify areas for improvement. By </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>leveraging our expertise in software development, we help businesses enhance their marketing initiatives and achieve their goals.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={BrandStrategyandPositioning} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Our team of experienced</h1>
                                    <p className='erp-card-description'>
                                        Our team of experienced developers at Softgenics specializes in developing custom marketing software solutions that are designed to improve performance and efficiency. By utilizing the latest technologies and methodologies, we create software solutions that enable businesses to streamline their marketing processes, automate repetitive tasks, and achieve better results.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ContentMarketings} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Softgenics offers tailored</h1>
                                    <p className='erp-card-description'>
                                        Softgenics offers tailored marketing software solutions that are specifically designed to meet the unique needs of each client. Whether you're looking to optimize your email marketing campaigns, improve lead generation efforts, or enhance customer engagement, our team can develop a custom software solution that addresses your specific requirements and delivers tangible results.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={RelationshipManagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Softgenics' expertise</h1>
                                    <p className='erp-card-description'>
                                        With Softgenics' expertise in marketing software development, businesses can gain access to powerful tools and features that enable them to execute more effective marketing strategies. From advanced analytics and reporting capabilities to automated campaign management and personalized messaging, our custom software solutions are designed to drive success in today's competitive marketplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={OmnichannelMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Softgenics' custom marketing</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' custom marketing software development services are backed by our team of skilled developers who possess in-depth knowledge of marketing principles and best practices. We combine this expertise with cutting-edge technology to deliver innovative software solutions that help businesses achieve their marketing goals and stay ahead of the competition.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={PerformanceMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>custom marketing software</h1>
                                    <p className='erp-card-description'>
                                        Our approach to custom marketing software development begins with a thorough analysis of our clients' marketing objectives, target audience, and competitive landscape. By gaining a deep understanding of their unique needs and challenges, we are able to design and develop software solutions that are tailored to address their specific requirements and deliver maximum value.


                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={DataDrivenDecisionMaking} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>marketing software</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' custom marketing software solutions are designed to provide businesses with the flexibility and scalability they need to adapt to changing market conditions and evolving customer preferences. Whether you're a small startup or a large enterprise, our software solutions can be customized to grow with your business and support your long-term success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={SocialMediaMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>every business is unique</h1>
                                    <p className='erp-card-description'>
                                        At Softgenics, we understand that every business is unique, and that's why we take a personalized approach to custom marketing software development. We work closely with our clients to understand their specific needs and objectives, and then tailor our solutions to meet those requirements effectively.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={VideoMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>marketing goals </h1>
                                    <p className='erp-card-description'>
                                        Softgenics' custom marketing software development services are backed by our commitment to quality, reliability, and customer satisfaction. We take pride in delivering solutions that exceed our clients' expectations and help them achieve their marketing goals effectively.


                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={InfluencerMarketing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Softgenics is dedicated </h1>
                                    <p className='erp-card-description'>
                                        Our team of experienced developers at Softgenics is dedicated to providing exceptional custom marketing software development services that deliver real value for our clients. With a focus on innovation and excellence, we strive to create software solutions that empower businesses to succeed in today's competitive marketplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics' custom marketing software solutions are designed to help businesses overcome their marketing challenges and achieve their goals more effectively.
                                    </h1>
                                    <p className='erp-finacial-description'>Whether you're looking to improve lead generation, increase sales, or enhance customer engagement, our software solutions can help you get there faster and with better results.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer13} alt='' style={{ width: "100%" }} />
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
export default MarketingAndAdv

