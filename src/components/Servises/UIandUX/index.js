
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import calculator from '../../../Assets/calculator.jpg'
import humanRes from '../../../Assets/humanRes.jpg'
import product from '../../../Assets/product.png'
import erpfinacial from '../../../Assets/erpfinacial.jpg'
import salesMarketing from '../../../Assets/salesMarketing.png'
import supplyChain from '../../../Assets/supplyChain.png'
import serviesOper from '../../../Assets/serviesOper.jpg'
import projectMang from '../../../Assets/projectMang.png'
import documentMang from '../../../Assets/documentMang.jpg'
import knowegeMang from '../../../Assets/knowegeMang.png'

import b2c_webPortel from '../../../Assets/b2c_webPortel.png'
import centric_d from '../../../Assets/centric_d.png'
import Competitive_design from '../../../Assets/Competitive_design.png'
import Ecommerce_web from '../../../Assets/Ecommerce_web.png'
import Enhancing_Ecommerce from '../../../Assets/Enhancing_Ecommerce.png'
import focus_on_business_objective from '../../../Assets/focus_on_business_objective.png'
import positive_user from '../../../Assets/positive_user.png'
import target_audience from '../../../Assets/target_audience.png'

import UI_UX_Design from '../../../Assets/UI_UX_Design.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const UIandUX = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> UI/UX Design </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        UI_UX_Design Web Development
                    </h1>
                    <p className='erp-main-description'>
                        Softgenics' collaborative team of UX and UI designers synergize their expertise to craft captivating web designs, elevating brands and fostering meaningful user engagement.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={UI_UX_Design} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>UI/UX Design:</strong>
                                Our UI/UX design services are meticulously crafted to elevate user experiences and enhance interface usability. At Softgenics, we understand the importance of intuitive and visually appealing design in driving user engagement and satisfaction.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Our expert UI/UX designers collaborate closely </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>we strive to create seamless and engaging user experiences that empower businesses to achieve their goals. With our UI/UX design solutions, you can ensure that your software applications not only look great but also deliver exceptional usability and functionality.:</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Ecommerce_web} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Collaborative Approach</h1>
                                    <p className='erp-card-description'>
                                        Softgenics employs a collaborative approach where UX and UI designers work together seamlessly to create cohesive and effective designs.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={b2c_webPortel} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>User-Centric Design</h1>
                                    <p className='erp-card-description'>
                                        Our UX/UI team prioritizes understanding user needs and behaviors to create designs that are intuitive, user-friendly, and tailored to the target audience.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Brand Consistency</h1>
                                    <p className='erp-card-description'>
                                        We ensure that every design element reflects the brand identity and values, maintaining consistency across all digital touchpoints.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={positive_user} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Wireframing and Prototyping
                                    </h1>
                                    <p className='erp-card-description'>
                                        Softgenics utilizes wireframing and prototyping techniques to visualize design concepts early in the development process, allowing for feedback and iteration before final implementation.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Competitive_design} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Responsive Design
                                    </h1>
                                    <p className='erp-card-description'>
                                        Our designs are optimized for various devices and screen sizes, ensuring a seamless user experience across desktop, tablet, and mobile platforms.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={focus_on_business_objective} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Accessibility
                                    </h1>
                                    <p className='erp-card-description'>
                                        Softgenics places a strong emphasis on accessibility, designing interfaces that are inclusive and accessible to users with disabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={target_audience} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Usability Testing
                                    </h1>
                                    <p className='erp-card-description'>
                                        We conduct usability testing to evaluate the effectiveness and efficiency of our designs, making data-driven decisions to improve user satisfaction.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={positive_user} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Visual Hierarchy</h1>
                                    <p className='erp-card-description'>
                                        Our designs leverage visual hierarchy to prioritize important elements and guide users through the interface, enhancing clarity and usability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Ecommerce_web} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Interaction Design</h1>
                                    <p className='erp-card-description'>
                                        Softgenics focuses on creating meaningful and engaging interactions that enhance user engagement and satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Continuous Improvement: We believe in continuous improvement and regularly gather feedback to refine and iterate on our designs, 
                                    </h1>
                                    <p className='erp-finacial-description'>ensuring they evolve with changing user needs and technological advancements.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Enhancing_Ecommerce} alt='' style={{ width: "100%" }} />
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
export default UIandUX

