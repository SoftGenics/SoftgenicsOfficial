
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"
import documentMang from '../../../Assets/documentMang.jpg'
import knowegeMang from '../../../Assets/knowegeMang.png'

import audit from '../../../Assets/audit.png'
import finance_and_accounting from '../../../Assets/finance_and_accounting.png'
import Finance_nd_accounting from '../../../Assets/Finance_nd_accounting.png'
import focus_business_objective from '../../../Assets/focus_business_objective.png'
import Human_resources from '../../../Assets/Human_resources.png'
import money from '../../../Assets/money.png'
import online from '../../../Assets/online.png'
import wordpress1 from '../../../Assets/wordpress1.png'

import wordpress from '../../../Assets/wordpress.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const WordPress = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Wordpress</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Introduction to Softgenics' WordPress Theme:
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics presents a modern, stylish, and feature-rich WordPress theme tailored specifically for information technology companies and related ventures.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={wordpress} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Target Audience:</strong>
                                This theme caters to IT startups, app launchers, mobile game launches, e-commerce websites, corporates, digital agencies, content marketing firms, startups, IT solutions providers, consulting firms, and more.</p>

                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Softgenics' theme boasts a plethora of features, including support for app development,</h1>

                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> video marketing, networking, banking, data handling, cybersecurity, blockchain, software testing, security audits, cryptocurrency, web hosting services, and technical businesses.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={finance_and_accounting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Professional Look and Precision</h1>
                                    <p className='erp-card-description'>
                                        The theme is designed to maintain a professional appearance while showcasing products and services with precision.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Human_resources} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Ease of Content Management</h1>
                                    <p className='erp-card-description'>

                                        Softgenics' theme offers ease of content management through visual composer and elementor page builder plugins, enabling effortless creation and editing of web pages.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={online} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Compatibility and Integration:</h1>
                                    <p className='erp-card-description'>

                                        It is compatible with popular plugins such as WooCommerce and social media plugins, ensuring seamless integration and functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Finance_nd_accounting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Responsive Design</h1>
                                    <p className='erp-card-description'>

                                        The theme features a responsive layout and cross-browser compatibility, ensuring a stunning look across various screen sizes and browsers.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={focus_business_objective} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Multilingual Support</h1>
                                    <p className='erp-card-description'>

                                        Softgenics' theme is translatable into different languages, catering to a global audience.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={audit} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Clean and Optimized Coding</h1>
                                    <p className='erp-card-description'>

                                        The theme is built on clean and bug-free Bootstrap-based coding, ensuring security and optimization for search engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={money} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Lightweight and Fast Loading</h1>
                                    <p className='erp-card-description'>

                                        Softgenics' theme is lightweight and boasts lightning-fast loading speeds, enhancing user experience and performance.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={documentMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Customizability</h1>
                                    <p className='erp-card-description'>

                                        Softgenics' theme is deeply customizable, offering theme customizer options for easy customization to achieve desired looks and functionalities.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={knowegeMang} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Social Media Integration</h1>
                                    <p className='erp-card-description'>

                                        The theme facilitates easy publicity through social media icons integration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Softgenics' theme seamlessly integrates different media types like images, videos, audios, and links to enrich website content.
                                    </h1>
                                    <p className='erp-finacial-description'>
                                        Softgenics ensures continuous updates and provides dedicated support for its WordPress theme, guaranteeing compatibility with the latest WordPress versions and addressing any queries or issues promptly to maintain a seamless user experience.
                                    </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={wordpress1} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/application" className='table-item'>Application</Link>
                            <Link to="/application-and-server" className='table-item'>ApplicationAndServer</Link>
                            <Link to="/Infrastrucher-servies" className='table-item'>InfrastrucherServies</Link>
                            <Link to="/mobile-devlopment" className='table-item'>MobileDevlopment</Link>
                            <Link to="/testing-andQA" className='table-item'>TestingAndQA</Link>
                            <Link to="/ux-and-ui" className='table-item'>UIandUX</Link>
                            <Link to="/web-dev" className='table-item'>Web devlopment</Link>
                            <Link to="/word-press" className='table-item'>WordPress</Link>
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
export default WordPress

