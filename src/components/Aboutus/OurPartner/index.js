
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import erpfinacial from '../../../Assets/erpfinacial.jpg'

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
                        Our productive collaboration with IT product providers leads to new growth opportunities and brings to our customers all the advantages of the most up-to-date technologies. We hold partnerships with leaders in enterprise software products, data management systems and cloud technologies, which allows us to safely rely on the quality of tech products we recommend.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Discuss Your Needs </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={OurPartner1} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Our productive collaboration</strong> with IT product providers leads to new growth opportunities and brings to our customers all the advantages of the most up-to-date technologies. We hold partnerships with leaders in enterprise software products, data management systems and cloud technologies, </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>which allows us to safely rely on the quality of tech products we recommend.</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>Depending on your business needs and budget, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Solvingproblemssolvableotherwise} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Solving problems not solvable otherwise.</h1>
                                    <p className='erp-card-description'>
                                        Open-ended tasks/projects with a large share of uncertainty around requirements, timing, costs, etc.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Bettersolutions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Better solutions </h1>
                                    <p className='erp-card-description'>
                                        Understanding the whole depth and scope of businesses and enterprise-wide IT environments allows a technology partner to come up with efficient, long-lasting IT solutions and choose effective technologies.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={ITcostsreduction} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>IT costs reduction</h1>
                                    <p className='erp-card-description'>
                                        . A long-term partnership produces greater efficiency and cost-saving (via economies of scale and economies of scope). Also, ScienceSoft's approach is to spot problems and improvement opportunities early, which reduces the investment in their resolution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Higherandfastervalue} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Higher and faster value </h1>
                                    <p className='erp-card-description'>
                                        via deeper understanding of business goals and challenges, as well as the access to the processes, best practices, ideas, knowledge about similar challenges the technology partner has addressed. Besides,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Interdisciplinarydigitalconsultingteams} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Interdisciplinary digital consulting teams</h1>
                                    <p className='erp-card-description'>
                                        that consist of consultants with a wide range of industry (manufacturing, retail, healthcare, logistics, professional services, telecommunications, etc.), functional, and technology expertise.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Solidprojectmanagement} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Solid project management</h1>
                                    <p className='erp-card-description'>
                                        PMO, effective collaboration models to reduce time-to-market and time-to-decision on all levels, robust risk management practices, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Projectmanagement} alt='' style={{ height: "100px", width: "100px" }} />
                                    <h1 className='erp-card-heading'>Project management</h1>
                                    <p className='erp-card-description'>
                                        In product management, it's crucial to incorporate financial planning and analysis into decision-making processes. This involves managing accounts payable and diligently tracking accounts receivable.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Workinginacollaborativemodel} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Working in a collaborative model </h1>
                                    <p className='erp-card-description'>
                                        internally and throughout all levels of a client’s organization.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Cuttingedgetechnologiesdatadriveninsights} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cutting-edge technologies and data-driven insights</h1>
                                    <p className='erp-card-description'>
                                        AI/ML (since 1989), big data (since 2013), IoT (since 2011), AR/VR, AVI, blockchain, image analysis, etc.; Industry 4.0, Supply Chain 4.0, digital health, smart cities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Our strategic partnerships with industry leaders ensure you access the most advanced enterprise software, data management systems,
                                    </h1>
                                    <p className='erp-finacial-description'>and cloud technologies. Gain a competitive edge with our curated selection of secure and top-performing solutions."</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Solvingproblemssolvableotherwise} alt='' style={{ width: "100%" }} />
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

