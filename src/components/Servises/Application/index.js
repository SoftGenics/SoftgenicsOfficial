import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../Header'
import Footer from '../../Footer'
import background from '../../../Assets/background2.jpg'
import webdesign from '../../../Assets/webdesign.jpg'
import mobile from '../../../Assets/mobile.jpg'
import webdev from '../../../Assets/webdev.png'

import { IoIosArrowForward } from "react-icons/io";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import './index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComp from '../../SliderComp';


const expertiseData = [
    {
        title: 'Custom Software Development',
        description: 'Our team of skilled developers specializes in crafting bespoke software solutions that align seamlessly with the specific requirements and objectives of our clients. From concept to deployment, we ensure a streamlined development process that maximizes efficiency and minimizes time to market.',
    },
    {
        title: 'Web Application Development',
        description: 'Leveraging the latest web technologies, we design and develop robust, scalable, and user-friendly web applications. Our expertise spans across a wide range of industries, enabling us to deliver solutions that drive engagement and deliver tangible business outcomes.',
    },
    {
        title: 'Mobile App Development:',
        description: "SoftGenics is at the forefront of mobile app development, creating intuitive and feature-rich applications for iOS and Android platforms. Whether it's native or cross-platform development, our team ensures a seamless user experience and optimal performance.",
    },
    {
        title: 'Cloud Computing Solutions:',
        description: 'We specialize in harnessing the power of cloud computing to enhance scalability, flexibility, and cost-effectiveness for our clients. From cloud migration to the development of cloud-native applications, we empower businesses to thrive in the digital era.',
    },
    {
        title: 'Data Analytics and Business Intelligence:',
        description: 'SoftGenics excels in transforming raw data into actionable insights. Our data analytics and business intelligence solutions enable clients to make informed decisions, drive operational efficiency, and gain a competitive edge in their respective industries.',
    },
    {
        title: 'Quality Assurance and Testing:',
        description: 'We adhere to rigorous testing methodologies to ensure the reliability, security, and performance of our software solutions. Our commitment to quality assurance guarantees a seamless user experience and minimizes the risk of post-deployment issues.',
    },
    {
        title: 'Agile Project Management:',
        description: 'Embracing Agile methodologies, we adopt a collaborative and iterative approach to project management. This ensures a transparent and flexible development process, enabling us to adapt to evolving client needs and deliver projects on time and within budget.',
    },
    {
        title: 'Dedicated Client Support:',
        description: 'SoftGenics is committed to fostering long-term partnerships with our clients. Our dedicated client support team is readily available to address inquiries, provide ongoing maintenance, and ensure that our solutions continue to meet and exceed expectations.',
    },


    // Add more expertise data items as needed
];

const Application = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [webdescrip, setWebdescrip] = useState(true)
    const [webdescrip2, setWebdescrip2] = useState(true)
    const [webdescrip3, setWebdescrip3] = useState(true)
    const [webdescrip4, setWebdescrip4] = useState(true)
    const [webdescrip5, setWebdescrip5] = useState(true)
    const [webdescrip6, setWebdescrip6] = useState(true)

    const hideWebDesign = (type) => {
        switch (type) {
            case 'webdescrip':
                setWebdescrip(false)
                break;
            case 'webdescrip2':
                setWebdescrip2(false)
                break;
            case 'webdescrip3':
                setWebdescrip3(false)
                break;
            case 'webdescrip4':
                setWebdescrip4(false)
                break;
            case 'webdescrip5':
                setWebdescrip5(false)
                break;
            case 'webdescrip6':
                setWebdescrip6(false)
                break;
            default:
                // Default case
                break;
        }
    }

    const showWebDesign = (type) => {
        switch (type) {
            case 'webdescrip':
                setWebdescrip(true)
                break;
            case 'webdescrip2':
                setWebdescrip2(true)
                break;
            case 'webdescrip3':
                setWebdescrip3(true)
                break;
            case 'webdescrip4':
                setWebdescrip4(true)
                break;
            case 'webdescrip5':
                setWebdescrip5(true)
                break;
            case 'webdescrip6':
                setWebdescrip6(true)
                break;
            default:
                // Default case
                break;
        }
    }

    const openFunction = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <Header />
            {/* fixed sub header */}
            <div className='header-third-main adjestment adjestment2'>
                <div className='header-botton-third'>
                    <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                    <IoIosArrowForward style={{ marginTop: "5px" }} />
                    <Link className='link-classes2'>Application</Link>
                </div>
            </div>
            {/* fixed sub header */}
            <div className='all-component-main-container'>
                {/* write your code here */}
                <div className='application-container'>
                    <div className='application-main-cont' style={{ marginLeft: "10%" , paddingBottom:"10px"}}>
                        <h1 className='application-heading1' style={{ color: "#fff" }}>Applications</h1>
                        <p className='application-description1' style={{ color: "#fff" }}>Unblock Bussion Potential</p>
                        <button>
                            <span class="shadow"></span>
                            <span class="edge"></span>
                            <span class="front text"> <Link style={{textDecoration:"none", color:"#fff"}} to="/new-roject">Click Me</Link>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='our-exporties-container'>
                    <div className='our-exporties'>
                        <h1 className='application-heading' style={{ marginBottom: "20px", color: "#1462dd" }}>Applications</h1>
                        <p className='application-description' style={{ color: "#27c1b4", fontSize: "25px", fontWeight: "700" }}>At SoftGenics India Pvt Ltd, we pride ourselves on being a dynamic and client-centric service-based company that excels in delivering innovative solutions tailored to meet the unique needs of our clients. Our commitment to excellence, coupled with a relentless pursuit of cutting-edge technologies, has positioned us as a trusted partner for businesses seeking transformative digital solutions.
                        </p>
                    </div>
                </div>

                <div className='our-exporties-container' style={{ paddingBottom: "30px" }}>
                    <div className='our-exporties' style={{ backgroundImage: `url(${background})`, opacity: 0.8 }}>
                        <h1 className='application-heading' style={{ marginBottom: "20px", color: "#1462dd" }}>Key Expertise</h1>

                        {expertiseData.map((expertise, index) => (
                            <div key={index} className='hover-div-container'>
                                <div className='heading-icon-manage'>
                                    <h1 className='application-heading' onClick={() => openFunction(index)} style={{ marginBottom: "10px", marginTop: index === 0 ? "20px" : "0", fontSize: "20px" }}>{`${index + 1}. ${expertise.title}`}</h1>
                                    {activeIndex === index ? <AiFillCaretDown style={{ color: "red" }} /> : <AiFillCaretLeft style={{ color: "red" }} />}
                                </div>
                                {activeIndex === index && (
                                    <p className='application-description' style={{ marginLeft: "20px" }}>{expertise.description}</p>
                                )}  
                            </div>
                        ))}

                        <p className='application-description' style={{ fontSize: "25px", fontWeight: "500", marginTop: "30px" }}>
                            In essence, SoftGenics India Pvt Ltd is not merely a service provider; we are a strategic partner invested in the success of our clients. With a focus on innovation, reliability, and client satisfaction, we navigate the evolving landscape of technology to deliver solutions that propel businesses forward.
                        </p>
                    </div>
                </div>

                <div className='sucess-stories-container'>
                    <div className='sucess-stories-main'>
                        <h1 className='application-heading1' style={{ color: "#1462dd", marginBottom: "30px", alignSelf: "center" }}>What Our Customers Say About Us</h1>
                        <p className='application-description' style={{ marginBottom: "0px", color: "#000", paddingTop: "20px", fontSize: "18px", fontWeight: "400", alignSelf: "center" }}>We appreciates our valuable customer's for their valuable review which encourage us to do more better. </p>
                        <SliderComp />
                        <div className='image-desc-container'>
                            <p className='application-description' style={{ color: "#000", paddingTop: "17px", fontSize: "18px", fontWeight: "400", textAlign: "center", borderTop: "none" }}>
                                We appreciates our valuable customer's for their valuable review which encourage us to do more better.
                                We appreciates our valuable customer's for their valuable review which encourage us to do more better.
                                We appreciates our valuable customer's for their valuable review which encourage us to do more better.
                            </p>
                        </div>

                        <h1 className='application-heading1' style={{ color: "#1462dd", marginTop: "60px", marginBottom: "30px", alignSelf: "center" }}>Our Latest Updates</h1>
                        <p className='application-description' style={{ color: "#000", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center" }}>Holding our heads high and doing directly by our customers. We have a center arrangement of qualities that
                            we never recoil from and these qualities have helped us gro
                            we never recoil from and these qualities have helped us gro
                            we never recoil from and these qualities have helped us gro
                            we never recoil from and these qualities have helped us gro
                        </p>
                    </div>
                </div>

                <div className='card-main-container'>
                    <div className='card-container'>
                        <h1 className='application-heading1' style={{ color: "#1462dd", marginBottom: "30px", alignSelf: "center" }}>Our Services</h1>
                        <div className='card-top-container'>
                            <div className='card-vier'>
                                {webdescrip && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip')}>
                                        <img className='card-image' src={webdesign} alt='card' />
                                    </div>
                                )}
                                {!webdescrip && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Explore the techniques and principles behind responsive web design, showcasing how Softgenics' designs adapt seamlessly to various screen sizes, enhancing user experience and engagement on both mobile and desktop devices.
                                        </p>
                                    </div>
                                )}
                            </div>


                            <div className='card-vier'>
                                {webdescrip2 && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip2')}>
                                        <img className='card-image' src={mobile} alt='card' />
                                    </div>
                                )}
                                {!webdescrip2 && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip2')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Explore the techniques and principles behind responsive mobile app design, showcasing how Softgenics' apps adapt seamlessly to various screen sizes, enhancing user experience and engagement on both smartphones and tablets.
                                        </p>
                                    </div>
                                )}
                            </div>


                            <div className='card-vier'>
                                {webdescrip3 && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip3')}>
                                        <img className='card-image' src={webdev} alt='card' />
                                    </div>
                                )}
                                {!webdescrip3 && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip3')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Highlight the importance of user-centered design in graphic design. Explain Softgenics' process for understanding audience preferences, conducting market research, and implementing feedback to create visuals that resonate with users and effectively communicate the desired message.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='card-top-container'>
                            <div className='card-vier'>
                                {webdescrip4 && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip4')}>
                                        <img className='card-image' src={webdesign} alt='card' />
                                    </div>
                                )}
                                {!webdescrip4 && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip4')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Discuss the latest trends in web design, such as minimalism, dark mode, and micro-interactions, and illustrate how Softgenics incorporates these trends to create visually appealing and highly functional websites for diverse clients.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className='card-vier'>
                                {webdescrip5 && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip5')}>
                                        <img className='card-image' src={webdesign} alt='card' />
                                    </div>
                                )}
                                {!webdescrip5 && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip5')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Highlight the importance of user-centered design in web development. Explain Softgenics' process for understanding user behavior, conducting usability testing, and implementing feedback to create websites that prioritize user needs and preferences.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className='card-vier'>
                                {webdescrip6 && (
                                    <div className='view-container' onMouseEnter={() => hideWebDesign('webdescrip6')}>
                                        <img className='card-image' src={webdesign} alt='card' />
                                    </div>
                                )}
                                {!webdescrip6 && (
                                    <div className='view-container' onMouseLeave={() => showWebDesign('webdescrip6')}>
                                        <p style={{ padding: "10px", color: "#fff", paddingTop: "20px", fontSize: "18px", fontWeight: "400", textAlign: "center", fontStyle: "oblique" }}>Provide an in-depth look at the entire web design process at Softgenics, from initial concept and wireframing to visual design, development, and final launch. Emphasize the collaborative efforts of designers, developers, and clients in achieving exceptional results.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* write your code here */}
            </div>
            <Footer />
        </>
    )
}

export default Application