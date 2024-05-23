import { Link } from "react-router-dom"
import { MdOutlineContactMail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Header from '../../Header'
import Footer from "../../Footer";
import resurchImg from '../../../Assets/resurch2.jpg'
import webdesign from '../../../Assets/webdesign.jpg'


import './index.css'

const Aboutus = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>About Us</Link>
            </div>
        </div>
        {/* fixed sub header */}

        <div className='all-component-main-container'>
            {/* write your code here */}

            <div className='aboutus-heading-container'>
                <div className='about-heading-main'>
                    <p className='left-heading'>
                        About Congnigent
                    </p>

                    <div className='right-heading'>
                        <MdOutlineContactMail size={20} style={{ color: '#26efe9', paddingTop: "2px" }} />
                        <p className='left-heading' style={{ marginLeft: "5px", color: '#26efe9' }}>Contact</p>
                    </div>
                </div>
            </div>

            <div className="about-background">
                <div className="about-description">
                    <h1 className="left-heading" style={{ fontSize: "30px" }}>Engineering modern business to improve everyday lives</h1>
                    <p className='left-heading'>Let us help you discover new ways of operating so you can anticipate and act, as if on intuition.</p>
                </div>
            </div>

            <div className='background-image-container'>
                <div className='background-card-container'>
                    <div className='home-card-container'>
                        <img className='background-image' src={resurchImg} alt="resurchImg" />
                        <div className='home-card-description'>
                            <h3 className='sub-heading' style={{ fontSize: "24px" }}>Powering Connected Phygital Experiences</h3>
                            <p className='over-description' style={{ fontSize: "17px" }}>
                                Digital Twins are connected virtual replicas of physical products, assets and
                                processes that integrate real-time behavioral data captured from IoT sensors and devices
                                :</p>
                        </div>
                    </div>

                    <div className='home-card-container'>
                        <img className='background-image' src={webdesign} alt="resurchImg" />
                        <div className='home-card-description'>
                            <h3 className='sub-heading' style={{ fontSize: "24px" }}>Powering Connected Phygital Experiences</h3>
                            <p className='over-description' style={{ textAlign: "center", fontSize: "17px" }}>
                                Digital Twins are connected virtual replicas of physical products, assets and
                                processes that integrate real-time behavioral data captured from IoT sensors and devices
                                :</p>
                        </div>
                    </div>

                    <div className='home-card-container'>
                        <img className='background-image' src={resurchImg} alt="resurchImg" />
                        <div className='home-card-description'>
                            <h3 className='sub-heading' style={{ fontSize: "24px" }}>Powering Connected Phygital Experiences</h3>
                            <p className='over-description' style={{ fontSize: "17px" }}>
                                Digital Twins are connected virtual replicas of physical products, assets and
                                processes that integrate real-time behavioral data captured from IoT sensors and devices
                                :</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="about-description-container">
                <div className="description-main-container">
                    <h1 className='sub-heading' style={{ textAlign: "center", fontSize: "30px", color: "#007bff", fontWeight: "600" }}>
                        Thank you for visiting Softgenics India Pvt. Ltd.
                    </h1>
                    <p className='over-description' style={{ fontSize: "16px", lineHeight: "1.6", color: "#333", textAlign: "center" }}>
                        Welcome to Softgenics India Pvt. Ltd., where innovation meets excellence in software solutions. We are a team of passionate professionals dedicated to crafting exceptional products and services that empower our clients to succeed in today's dynamic market.
                        <br /><br />
                        At Softgenics India Pvt. Ltd., we pride ourselves on our commitment to delivering cutting-edge solutions tailored to meet the unique needs of each client. With years of experience and a proven track record of success, we strive to exceed expectations and drive tangible results for our valued partners.
                        <br /><br />
                        Our mission is simple: to leverage our expertise and creativity to help businesses thrive in an ever-evolving digital landscape. Whether it's through groundbreaking product offerings or personalized consultations, we are here to support you every step of the way.
                    </p>
                </div>
            </div>
            {/* write your code here */}
        </div>
        <Footer />
    </>
)
export default Aboutus

