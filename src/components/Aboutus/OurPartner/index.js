
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

// import erpfinacial from '../../../Assets/erpfinacial.jpg'

import Bettersolutions from '../../../Assets/Bettersolutions.png'
import Cuttingedgetechnologiesdatadriveninsights from '../../../Assets/Cuttingedgetechnologiesdatadriveninsights.png'
import Higherandfastervalue from '../../../Assets/Higherandfastervalue.png'
import Interdisciplinarydigitalconsultingteams from '../../../Assets/Interdisciplinarydigitalconsultingteams.png'
import ITcostsreduction from '../../../Assets/ITcostsreduction.png'
import Projectmanagement from '../../../Assets/Projectmanagement.png'
import Solidprojectmanagement from '../../../Assets/Solidprojectmanagement.png'
import Solvingproblemssolvableotherwise from '../../../Assets/Solvingproblemssolvableotherwise.png'
import Workinginacollaborativemodel from '../../../Assets/Workinginacollaborativemodel.png'

import OurPartner1 from '../../../Assets/OurPartner1.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const OurPartner = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>About Us</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Our Partner </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Our Partners
                    </h1>
                    <p className='erp-main-description'>
                        Our <b>fruitful collaboration</b> with IT product providers fosters new growth opportunities and delivers to our customers all the advantages of the most up-to-date technologies. We maintain partnerships with leaders in enterprise software products, data management systems, and cloud technologies, enabling us to confidently rely on the quality of <b>technological products</b> we endorse.                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Discuss Your Needs </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={OurPartner1} alt="image_goes_here" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'>

                                Our <b>effective partnerships</b> with IT product providers pave the way for new avenues of growth, ensuring our customers benefit from the latest advancements in technology. We have forged alliances with <b>industry frontrunners</b> in enterprise software products, data management systems, and cloud technologies.                            </p>

                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Which allows us to safely rely on the quality of tech products we recommend.</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Depending on your <b>business needs and budget</b>, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Solvingproblemssolvableotherwise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Solving problems</h1>
                                    <p className='erp-card-description'>
                                        Open-ended tasks and projects characterized by a significant degree of <b>uncertainty</b> regarding <b>requirements</b>, <b>timing</b>, and <b>costs</b>.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Bettersolutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Better solutions </h1>
                                    <p className='erp-card-description'>
                                        Comprehending the full depth and scope of businesses and enterprise-wide IT environments enables a technology partner to develop <b>efficient, long-lasting IT solutions</b> and select <b>effective technologies</b>.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ITcostsreduction} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cost Reduction</h1>
                                    <p className='erp-card-description'>
                                        A <b>long-term partnership</b> enhances efficiency and achieves <b>cost savings</b> through <b>economies of scale</b> and <b>economies of scope</b>. Moreover, ScienceSoft’s proactive approach to identifying issues and improvement opportunities early reduces the investment needed for their resolution.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Higherandfastervalue} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Faster value </h1>
                                    <p className='erp-card-description'>
                                        Through a deeper understanding of <b>business goals</b> and <b>challenges</b>, and access to <b>processes</b>, <b>best practices</b>, and <b>knowledge</b> about similar challenges the technology partner has addressed.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Interdisciplinarydigitalconsultingteams} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Digital consulting teams</h1>
                                    <p className='erp-card-description'>
                                        Comprising consultants with extensive <b>industry expertise</b> in manufacturing, retail, healthcare, logistics, professional services, telecommunications, and more, along with broad <b>functional</b> and <b>technology expertise</b>.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Solidprojectmanagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Solid Project Management</h1>
                                    <p className='erp-card-description'>
                                        PMO, <b>effective collaboration models</b> to expedite <b>time-to-market</b> and <b>time-to-decision</b> at all levels, and <b>robust risk management practices</b>.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Projectmanagement} alt="image_goes_here" style={{ height: "150px", width: "60%", marginTop: "20px" }} />
                                    <h1 className='erp-card-heading'>Project management</h1>
                                    <p className='erp-card-description'>
                                        In product management, it is essential to integrate <b>financial planning and analysis</b> into the decision-making process. This includes managing <b>accounts payable</b> and diligently tracking <b>accounts receivable</b>.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Workinginacollaborativemodel} alt='common' style={{ height: "170px", width: "80%", marginTop: "10px" }} />
                                    <h1 className='erp-card-heading'>Integrated Collaboration</h1>
                                    <p className='erp-card-description'>
                                        By fostering a culture of <b>collaboration</b> and open communication, we ensure seamless <b>integration</b> and <b>alignment</b> of objectives across all levels of both our internal teams and our client's organization.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Cuttingedgetechnologiesdatadriveninsights} alt='common' style={{ height: "170px", width: "80%", marginTop: "10px" }} />
                                    <h1 className='erp-card-heading'>Data-driven insights</h1>
                                    <p className='erp-card-description'>
                                        Expertise in <b>AI/ML</b> (since 1989), <b>big data</b> (since 2013), <b>IoT</b> (since 2011), <b>AR/VR</b>, <b>AVI</b>, <b>blockchain</b>, <b>image analysis</b>, etc.; Specialization in <b>Industry 4.0</b>, <b>Supply Chain 4.0</b>, <b>digital health</b>, and <b>smart cities</b>.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Our strategic partnerships with <b>industry leaders</b> ensure access to the most advanced <b>enterprise software</b> and <b>data management systems</b>.                                    </h1>
                                    <p className='erp-finacial-description'>
                                        Gain a competitive edge with our curated selection of <b>secure</b> and <b>top-performing solutions</b>.                                        </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Solvingproblemssolvableotherwise} alt="image_goes_here" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/about-us" className='table-item'>About</Link>
                            <Link to="/client-review" className='table-item'>Client Review</Link>
                            <Link to="/Experts" className='table-item'>Experts</Link>
                            <Link to="/location" className='table-item'>Location</Link>
                            <Link to="/our-partner" className='table-item'>Our Partner</Link>
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
export default OurPartner

