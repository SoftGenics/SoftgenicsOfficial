
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
                        Cybersecurity Services
                    </h1>
                    <p className='erp-main-description'>
                        <strong>Protect Your Applications and Network</strong><br /> <br />
                        In cybersecurity since 2018, Sofgenics offers businesses in 30+ industries a full range of information security services. We help minimize cyber risks and avoid devastating consequences of cyberattacks.
                    </p>
                    <div className='link-container-erp'>
                        <Link className='Request-ERP-development'> Request Security Services </Link>
                        {/* <Link className='Get-a-cost-estimate'> Get a cost estimate </Link> */}
                    </div>
                </div>
                <div className='erp-midell-container'>
                    <img className='banner-image-responsiv' src={Cyeber_Securiy} />
                </div>
            </div>
            <div className='erp-second-container'>
                <div className='erp-second-main-container'>
                    <div className='erp-second-text-container'>

                        <div className='modifiy-container-for-erp'>
                            <p className='erp-description'><strong>Competent multiskilled team: </strong>iSIEM/SOAR/XDR
                                specialists, Certified Ethical Hackers, cloud security experts, senior developers, DevSecOps engineers, and compliance consultants.
                            </p>
                            <h1 className='erp-sub-heading' style={{ textDecoration: "underLine" }}>Guaranteed customers' data safety due to robust security management  backed by ISO 27001 </h1>
                            <p className='erp-description' style={{ border: "none", marginBottom: "20px", marginTop: "0px" }}>For the second straight year, ScienceSoft USA Corporation is listed among The Americas’ Fastest-Growing Companies by the Financial Times</p>
                        </div>

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={SupplyChainAttacks} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Supply Chain Attacks</h1>
                                    <p className='erp-card-description'>
                                        Supply chain attacks target third-party vendors and suppliers in order to gain access to a larger organization's systems.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={CloudSecurity} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Cloud Security</h1>
                                    <p className='erp-card-description'>
                                        As more and more businesses move their data and applications to the cloud, cloud security becomes increasingly important. However, cloud security can be complex
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={product} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Internet of Things (IoT) Security</h1>
                                    <p className='erp-card-description'>
                                        The IoT is rapidly growing, and this growth is creating new security challenges. IoT devices are often poorly secured
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={Phishing} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Artificial Intelligence (AI) Security</h1>
                                    <p className='erp-card-description'>
                                        AI is being used in both offensive and defensive cybersecurity applications. As AI becomes more sophisticated,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SocialEngineering} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Social Engineering</h1>
                                    <p className='erp-card-description'>
                                        Social engineering attacks are still one of the most common and effective ways for attackers to gain access to systems and data.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={Phish} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Phishing</h1>
                                    <p className='erp-card-description'>
                                        Phishing attacks are a type of social engineering attack that involves sending emails or text messages that appear to be from a legitimate source, such as a bank or credit card company.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        {/* card-view */}
                        <div className='erp-card-container'>
                            <div className='erp-card-main-container'>
                                <div className='erp-card'>
                                    <img src={ZeroDayAttacks} alt='' style={{ height: "100px", width: "100px" }} />
                                    <h1 className='erp-card-heading'>Zero-Day Attacks</h1>
                                    <p className='erp-card-description'>
                                        Zero-day attacks are attacks that exploit vulnerabilities in software that the software vendor is not aware of.
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={InsiderThreats} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Insider Threats</h1>
                                    <p className='erp-card-description'>
                                        Insider threats are threats that come from within an organization. These threats can be intentional, such as an employee stealing data,
                                    </p>
                                </div>

                                <div className='erp-card'>
                                    <img src={SocialEngin} alt='common' style={{ height: "170px", width: "100%" }} />
                                    <h1 className='erp-card-heading'>Disinformation and Misinformation</h1>
                                    <p className='erp-card-description'>
                                        Disinformation and misinformation are false or misleading information that is spread deliberately.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* card-view */}

                        <div className='erp-financial-details'>
                            <div className='erp-finacial-main-container'>
                                <div className='erp-finacial-left'>
                                    <h1 className='erp-finacial-heading'>
                                        Knowing the website's purpose and industry can help me provide tailored suggestions.
                                    </h1>
                                    <p className='erp-finacial-description'>With more information, I can offer helpful "different points" that address your specific needs and interests. I can suggest alternative security methods, discuss cybersecurity trends, highlight industry-specific security considerations, or explore other relevant topics related to website security.</p>
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

