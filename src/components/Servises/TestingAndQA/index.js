
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import capibility from '../../../Assets/capibility.png'
import continius_testing from '../../../Assets/continius_testing.png'
import footer_testing from '../../../Assets/footer_testing.png'
import fun_test from '../../../Assets/fun_test.png'
import intigration_testing from '../../../Assets/intigration_testing.png'
import mantanus from '../../../Assets/mantanus.png'
import qa_consulting from '../../../Assets/qa_consulting.png'
import qulity_assis from '../../../Assets/qulity_assis.png'
import single_round from '../../../Assets/single_round.png'
import testin_of_world from '../../../Assets/testin_of_world.png'


import QNA from '../../../Assets/QNA.png'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const TestingAndQA = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Services</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>TestingAndQA</Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading'>
                        Professional Software Testing Company
                    </h1>
                    <p className='erp-main-description'>
                        Software testing plays a crucial role in ensuring the quality, functionality, and performance of a software product before it is launched to the market. Softgenics recognizes the significance of thorough software testing in delivering reliable and high-quality software solutions to clients.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request ERP development </Link>
                        <Link className='Get-a-cost-estimate'> Get a cost estimate </Link>
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={QNA} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Quality assurance </strong>
                                Quality assurance testing ensures that your software product meets the highest standards of quality and functionality. Our rigorous QA testing processes involve meticulous examination of every aspect of your application to identify and address any defects or inconsistencies.</p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Softgenics employs various testing methods to ensure comprehensive</h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>
                                coverage and accuracy in software testing. Our testers are trained in both manual testing, where they interact with the software directly, and automated testing, where test scripts are executed to detect bugs and errors efficiently.</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={fun_test} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Manual Testing</h1>
                                    <p className='erp-card-description'>
                                        Manual testing involves testers interacting with the software interface to simulate user actions and scenarios. Softgenics' skilled testers meticulously explore the software's features and functionalities to identify any deviations from expected behavior and document their findings for further analysis and resolution.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={intigration_testing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Automated Testing</h1>
                                    <p className='erp-card-description'>
                                        Automated testing involves the creation and execution of test scripts that simulate user interactions and verify software functionality automatically. Softgenics leverages state-of-the-art automated testing tools and frameworks to accelerate the testing process and ensure consistent and repeatable test results.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={capibility} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'> Bug Detection and Reporting</h1>
                                    <p className='erp-card-description'>

                                        Softgenics' testing process focuses on detecting bugs and errors at every stage of software development. Our testers meticulously document identified issues, including their severity and impact, to facilitate efficient resolution by the development team.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={single_round} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Ensuring Expected Functionality</h1>
                                    <p className='erp-card-description'>
                                        Softgenics' primary goal in software testing is to ensure that the software functions as expected and meets the specified requirements and user expectations. Through rigorous testing and validation procedures, we strive to deliver software solutions that are reliable, user-friendly, and bug-free.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={continius_testing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Performance Testing</h1>
                                    <p className='erp-card-description'>

                                        In addition to functional testing, Softgenics conducts performance testing to evaluate the software's responsiveness, scalability, and stability under various conditions. By simulating real-world usage scenarios, we identify and address performance bottlenecks to optimize the software's performance and user experience.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={mantanus} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Continuous Improvement</h1>
                                    <p className='erp-card-description'>
                                        Softgenics is committed to continuous improvement in software testing practices and methodologies. We regularly review and refine our testing processes to adapt to emerging technologies, industry best practices, and client feedback, ensuring that we deliver software solutions of the highest quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={qulity_assis} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Client Satisfaction</h1>
                                    <p className='erp-card-description'>
                                        Ultimately, Softgenics' dedication to comprehensive software testing translates into enhanced client satisfaction. By delivering software solutions that are thoroughly tested and free of defects, we empower our clients to achieve their business objectives efficiently and confidently.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={qa_consulting} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Security Testing</h1>
                                    <p className='erp-card-description'>
                                        At Softgenics, security is a top priority. We conduct rigorous security testing to pinpoint and address vulnerabilities, protecting against data breaches and unauthorized access. Through assessments, penetration testing, and code reviews, we ensure our software meets industry standards and compliance regulations, safeguarding sensitive data and our clients' interests.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={testin_of_world} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>
                                        Regression Testing
                                    </h1>
                                    <p className='erp-card-description'>
                                        Softgenics conducts comprehensive regression testing to prevent new updates from introducing defects into existing functionalities. Our automated testing suites swiftly verify software stability post-update, allowing for rapid issue resolution and ensuring reliability. Proactive regression testing minimizes disruptions, integrating updates seamlessly to enhance software quality and performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                    Softgenics prioritizes seamless performance across devices, browsers, and operating systems through rigorous compatibility testing. Our process covers diverse hardware configurations and software environments, 
                                    </h1>
                                    <p className='erp-finacial-description'>ensuring consistent user experiences. Early identification and resolution of compatibility issues enhance accessibility and usability, expanding reach and impact in the market for our clients' software solutions.</p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={footer_testing} alt='' style={{ width: "100%" }} />
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
export default TestingAndQA

