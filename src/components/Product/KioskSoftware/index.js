
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import AdvancedSecurity from '../../../Assets/AdvancedSecurity.png'
import AIpoweredInteractions from '../../../Assets/AIpoweredInteractions.png'
import AugmentedReality from '../../../Assets/AugmentedReality.png'
import DataCollectionandAnalysis from '../../../Assets/DataCollectionandAnalysis.png'
import Footer18 from '../../../Assets/Footer18.png'
import IntegrationwithExistingSystems from '../../../Assets/IntegrationwithExistingSystems.png'
import InteractiveElements from '../../../Assets/InteractiveElements.png'
import MultilingualSupport1 from '../../../Assets/MultilingualSupport1.png'
import Personalization from '../../../Assets/Personalization.png'


import kiosk_software from '../../../Assets/kiosk_software.png'

import Footer from '../../Footer'
import Header from '../../Header'
import './index.css'

const KioskSoftware = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Service</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Kiosk Software </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Interactive Kiosk Software Development
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Overview</strong> <br />
                        <br />
                        With 5 years in software development, Softgenics provides professional consulting on implementation of kiosk solutions.
                    </p>
                    <br />
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development' to="/new-roject"> Request Expert help </Link>
                        <Link className='Get-a-cost-estimate' to="/contact-us"> Get a quote</Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={kiosk_software} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>While providing access </strong>Softgenics acknowledges the surging demand for kiosk solutions across various sectors, from airports to coffee shops, as businesses embrace the efficiency and convenience of self-service technology.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Envisioning Enhanced Customer Experiences</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}> Softgenics sets out to develop kiosk management systems that elevate the shopping experience for customers, envisioning interactive interfaces that exceed user expectations.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Personalization} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Streamlining Operations and Lowering Costs</h1>
                                    <p className='erp-card-description'>
                                     With a focus on automation, Softgenics aims to reduce business expenses by eliminating the reliance on manpower, offering kiosk solutions that optimize operations and enhance profitability.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={InteractiveElements} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Embracing Market Growth Opportunities</h1>
                                    <p className='erp-card-description'>
                                     Softgenics recognizes the immense growth potential of the kiosk software market, with projections indicating a 13.3% CAGR and a market value of USD 4.7 billion by 2026.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={MultilingualSupport1} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Targeting Key Market Segments</h1>
                                    <p className='erp-card-description'>
                                     Softgenics identifies financial kiosks as a significant market segment, catering to the needs of the financial industry for transactions such as cashback, bill payments, and utility bill transactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={DataCollectionandAnalysis} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Expanding Reach Across Industries</h1>
                                    <p className='erp-card-description'>
                                    Softgenics understands the diverse applications of kiosk services across industries, including retail, hospitality, entertainment, gaming, hotels, airports, IT, and telecommunications, aiming to tailor solutions to meet specific sector requirements.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Footer18} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Prioritizing Retail Innovation</h1>
                                    <p className='erp-card-description'>
                                     Recognizing that retail kiosks constitute a significant portion of the market, Softgenics focuses on developing cutting-edge solutions that drive growth and innovation in the retail sector.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AdvancedSecurity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Maximizing Return on Investment</h1>
                                    <p className='erp-card-description'>
                                    Softgenics emphasizes the importance of kiosk solutions in increasing ROI for businesses, leveraging features that address consumer inquiries, enhance customer interaction, and deliver comprehensive shopping experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={AIpoweredInteractions} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Balancing Security and User Experience</h1>
                                    <p className='erp-card-description'>
                                     Softgenics commits to developing kiosk software that prioritizes security without compromising the user experience, implementing flexible systems for remote management and troubleshooting to ensure seamless operations.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={IntegrationwithExistingSystems} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Driving Towards Future Excellence</h1>
                                    <p className='erp-card-description'>
                                   With a commitment to continuous improvement and innovation, Softgenics aims to lead the way in kiosk software development, setting new standards for excellence in customer service, security, and technological advancement.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={AugmentedReality} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Innovating Customer Engagement </h1>
                                    <p className='erp-card-description'>
                                     Softgenics recognizes that successful kiosk software development goes beyond mere automation; it's about creating engaging, intuitive interfaces that captivate users and foster meaningful interactions. By leveraging cutting-edge technologies such as touchscreens, biometrics, and AI-powered chatbots, Softgenics aims to redefine the customer experience landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Empowering Businesses with Data Insights Beyond facilitating transactions, Softgenics' kiosk software solutions are designed to collect and analyze valuable customer data.
                                    </h1>
                                    <p className='erp-finacial-description'>Accessibility compliance: Ensure kiosks meet accessibility  By harnessing insights on consumer behavior, preferences, and trends, businesses can make informed decisions, refine their marketing strategies, and drive sustainable growth.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={Footer18} alt='' style={{ width: "100%" }} />
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
export default KioskSoftware

