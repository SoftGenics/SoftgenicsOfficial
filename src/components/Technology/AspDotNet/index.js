
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import product from '../../../Assets/product.png'
import serviesOper from '../../../Assets/serviesOper.jpg'

import unique_selling from '../../../Assets/unique_selling.png'
import strengths from '../../../Assets/strengths.png'
import strengths_NET_development from '../../../Assets/strengths_NET_development.png'
import Streamlined_NET from '../../../Assets/Streamlined_NET.png'
import Incorporate from '../../../Assets/Incorporate.png'
import Highlight_specifi_expertise from '../../../Assets/Highlight_specifi_expertise.png'
import Expert_NET_team from '../../../Assets/Expert_NET_team.png'


import asp_net from '../../../Assets/asp_net.jpg'

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
                <Link className='link-classes2'>Asp.Net</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        ASP.NET Development Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>
                            We support businesses of all types
                        </strong><br />
                        from startups to small-sized companies & large enterprises.
                        Softgenics assists a diverse range of businesses, from startups to small companies and large enterprises.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={asp_net} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>With our ASP.NET web development services</strong> we deliver robust, user-centric software applications.
                                Softgenics provides ASP.NET web development services to create robust, user-focused software solutions.
                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>It includes web applications, IoT apps,</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> cloud applications & cross-platform apps.
                                Softgenics develops various applications, including web, IoT, cloud, and cross-platform apps.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={unique_selling} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Technology Stack</h1>
                                    <p className='erp-card-description'>
                                        Our dot net web development services include industry-recognized platforms & frameworks, including ASP.NET, .NET Core, Xamarin, SharePoint & other Microsoft products.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={strengths} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>utilizes platforms</h1>
                                    <p className='erp-card-description'>
                                        Softgenics utilizes platforms and frameworks like ASP.NET, .NET Core, Xamarin, SharePoint, and other Microsoft products.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Project Experience</h1>
                                    <p className='erp-card-description'>
                                        We have helped develop software products of varied complexities.
                                        Softgenics has experience in developing complex software products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={strengths_NET_development} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>include applications</h1>
                                    <p className='erp-card-description'>
                                        Some of them include applications that needed multiple integrations, data-intensive applications & more.
                                        Projects include multi-integration apps and data-intensive applications, showcasing Softgenics' versatility.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Streamlined_NET} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Best Practices</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' .NET development team incorporates Microsoft’s coding best practices & adheres to .NET guidelines for code documentation & code portability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={serviesOper} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Microsoft’s best practices</h1>
                                    <p className='erp-card-description'>
                                        Adhering to Microsoft’s best practices, Softgenics ensures code documentation and portability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Incorporate} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Application Development Expertise</h1>
                                    <p className='erp-card-description'>
                                        Softgenics specializes in building robust applications with experienced ASP.NET developers.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Highlight_specifi_expertise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Backend Architecture</h1>
                                    <p className='erp-card-description'>
                                        Expertise in backend architecture patterns: microservices, multi-tenancy, headless (Decoupled), and serverless.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Expert_NET_team} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Frontend Architecture</h1>
                                    <p className='erp-card-description'>
                                        Frontend expertise includes PWA, SPA, MVC, and MVVM architecture patterns.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics offers multi-tier, microservices, and cloud-based architectures tailored to business requirements.
                                    </h1>
                                    <p className='erp-finacial-description'>Softgenics' .NET developers are skilled in various industries, including Healthcare, Media & Entertainment, Fintech, Retail, and more.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Expert_NET_team} alt='' style={{ width: "100%" }} />
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

