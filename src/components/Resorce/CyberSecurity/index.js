import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import product from '../../../Assets/product.png'

import CloudSecurity from '../../../Assets/CloudSecurity.png'
import Phish from '../../../Assets/Phish.png'
import Phishing from '../../../Assets/Phishing.png'
import SocialEngin from '../../../Assets/SocialEngin.png'
import SocialEngineering from '../../../Assets/SocialEngineering.png'
import SupplyChainAttacks from '../../../Assets/SupplyChainAttacks.png'
import InsiderThreats from '../../../Assets/InsiderThreats.png'
import ZeroDayAttacks from '../../../Assets/ZeroDayAttacks.png'
import Cyeber_Securiy from '../../../Assets/Cyeber_Securiy.jpg'

import Footer from '../../Footer';
import Header from '../../Header'
import './index.css'

const CyberSecurity = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Resources</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'> Cyber Security </Link>
            </div>
        </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='erp-main-bg-container'>
                <div className='erp-midell-container'>
                    <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                        Cyber Security Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>
                            Safeguard Your Applications and Network
                        </strong>
                        <br /> <br />
                        With expertise in cybersecurity since <b>2018</b>, <b>SoftGenics</b> provides comprehensive information security services to businesses across <b>30+ industries</b>. We help mitigate <b>cyber risks</b> and prevent the potentially devastating impacts of <b>cyberattacks</b>.                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request Security Services </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Cyeber_Securiy} alt="banner-responsiv" />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'>
                                Competent Multiskilled Team: <b>iSIEM/SOAR/XDR specialists</b>, <b>Certified Ethical Hackers</b>, <b>cloud security experts</b>, <b>senior developers</b>, <b>DevSecOps engineers</b>, and <b>compliance consultants</b>.                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>
                                We guarantee <b>customers data safety</b> through robust security management backed by <b>ISO 27001</b> certification.                            </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>
                                For the second consecutive year, <b>ScienceSoft USA Corporation</b> is recognized among <b>The Americas’ Fastest-Growing Companies</b> by the <b>Financial Times</b>.                            </p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={SupplyChainAttacks} alt='common' style={{ height: "150px", width: "80%", marginTop: "40px" }} />
                                    <h1 className='erp-card-heading'>Supply Chain Attacks</h1>
                                    <p className='erp-card-description'>
                                        Supply chain attacks exploit vulnerabilities in third-party vendors and suppliers to infiltrate and compromise the systems of larger organizations.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CloudSecurity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud Security</h1>
                                    <p className='erp-card-description'>
                                        As businesses increasingly transition their data and applications to the cloud, the importance of robust cloud security continues to grow. However, ensuring cloud security remains a complex challenge.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Internet of Things (IoT) Security</h1>
                                    <p className='erp-card-description'>
                                        The rapid expansion of the IoT is introducing new security challenges. Often, IoT devices lack robust security measures.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Phishing} alt='common' style={{ height: "140px", width: "70%", marginTop: "20px" }} />
                                    <h1 className='erp-card-heading'>Artificial Intelligence Security</h1>
                                    <p className='erp-card-description'>
                                        AI is increasingly employed in both offensive and defensive cybersecurity strategies. As AI technology advances, its applications in cybersecurity become more sophisticated.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SocialEngineering} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Social Engineering</h1>
                                    <p className='erp-card-description'>
                                        Social engineering attacks remain one of the most prevalent and effective methods for attackers to access systems and data.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Phish} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Phishing</h1>
                                    <p className='erp-card-description'>
                                        Phishing attacks, a form of social engineering, involve sending emails or text messages that seem to originate from legitimate sources, such as banks or credit card companies.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ZeroDayAttacks} alt='' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Zero-Day Attacks</h1>
                                    <p className='erp-card-description'>
                                        Zero-day attacks exploit software vulnerabilities that are unknown to the software vendor.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={InsiderThreats} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Insider Threats</h1>
                                    <p className='erp-card-description'>
                                        Insider threats originate from within an organization and can encompass intentional actions, such as data theft by an employee.                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SocialEngin} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Disinformation and Misinformation</h1>
                                    <p className='erp-card-description'>
                                        Disinformation and misinformation encompass false or misleading information deliberately propagated.                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Understanding the website's objectives and industry can enable me to offer customized recommendations.                                    </h1>
                                    <p className='erp-finacial-description'>
                                        With additional details, I can provide valuable insights tailored to your unique requirements and preferences. I'm equipped to propose alternative security measures, delve into current cybersecurity trends, spotlight industry-specific security nuances, or delve into other pertinent aspects of website security.                                        </p>
                                </div>
                                <div className='erp-finacial-rigth'>
                                    <img src={CloudSecurity} alt='' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table container */}
                    <div className='erp-second-text-container-rigth'>
                        <h1 className='erp-card-heading' style={{ marginBottom: "30px", alignSelf: "center", marginTop: "20px", textDecoration: "underLine" }}>Table of contents</h1>

                        <div className='table-container' style={{ position: "sticky", top: "0" }}>
                            <Link to="/cyber-security" className='table-item'>Cyber Security</Link>
                            <Link to="/itOut-sourcing" className='table-item'>IT Out Sourceing</Link>
                            <Link to="/It-support" className='table-item'>IT Support</Link>
                            <Link to="/data-analist" className='table-item'>Data Analytics</Link>
                            <Link to="/manage-it-servies" className='table-item'>Managed IT Service</Link>
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
export default CyberSecurity
