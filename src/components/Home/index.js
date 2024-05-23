import React, { useRef} from 'react';
import { Link } from 'react-router-dom'

import { IoIosArrowForward } from "react-icons/io";
import Header from '../Header';
import Footer from '../Footer';
import VideoImage from '../VideoImage'

import home3 from '../../Assets/img3.jpg';
import mission from '../../Assets/mission3.jpg'
import animatedImg from '../../Assets/banner-bg.gif'
import resurchImg from '../../Assets/resurch2.jpg'
import webdesign from '../../Assets/webdesign.jpg'

import './index.css';

const Home = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const backgroundContainerRef = useRef(null);
    const missionContainerRef = useRef(null);
    const devlopmentContainerRef = useRef(null)
    const overviewContainerRef = useRef(null)
    const formContainerRef = useRef(null)

    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     workEmail: '',
    //     workTitle: '',
    //     company: '',
    //     country: '',
    //     message: '',
    // });

    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    //     console.log(formData); // Example of accessing submitted data
    // };


    // useEffect(() => {
    //     const images = [home1, home, home4]; // Move images inside useEffect

    //     const changeBackground = () => {
    //         if (backgroundContainerRef.current) {
    //             backgroundContainerRef.current.style.backgroundImage = `url('${images[currentIndex]}')`;
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //         }
    //     };

    //     const intervalId = setInterval(changeBackground, 4000);

    //     return () => clearInterval(intervalId); // Cleanup on component unmount

    // }, [currentIndex, home1, home, home4, home3]); // Include home, home2, home3 in dependencies

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const gradientStyle = {
        background: 'linear-gradient(to right, #82.48, #7abef7 1.81%, #4080f5 43.03%, #7747d5 68.71%, #572ac2 89.75%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <>
            <Header />
            {/* <div className='home-main-container' ref={backgroundContainerRef}> </div> */}

            {/* fixed sub header */}

            <div className='header-third-main adjestment adjestment2 '>
                <div className='header-botton-third'>
                    <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                    <IoIosArrowForward style={{ marginTop: "5px" }} />
                    {/* <Link className='link-classes2'>About Us</Link> */}
                </div>
            </div>

            {/* fixed sub header */}
            <VideoImage />
            <div className='home-container'>
                {/* navigation button */}
                <div className='header-third-main' style={{ height: "60px" }}>
                    <div className='header-botton-third ' style={{ justifyContent: "space-around" }}>
                        <Link className='link-classes2 hover-classes mediaQuryApply'>Home</Link>
                        <Link className='link-classes2 hover-classes mediaQuryApply' onClick={() => scrollToSection(missionContainerRef)}>Mission</Link>
                        <Link className='link-classes2 hover-classes mediaQuryApply' onClick={() => scrollToSection(devlopmentContainerRef)}>Development Process</Link>
                        <Link className='link-classes2 hover-classes mediaQuryApply' onClick={() => scrollToSection(overviewContainerRef)}>Overview</Link>
                        <Link className='link-classes2 hover-classes mediaQuryApply' onClick={() => scrollToSection(formContainerRef)}>Any Query?</Link>

                    </div>
                </div>
                {/* end navigation button */}

                {/* Envolving container */}
                <div className='ivolving-main-container'>
                    <div className='involving-left-container'>
                        <h1 className='ivolving-heading' style={{ color: "white" }}>Evolving Enterprises</h1>
                        <h1 className='ivolving-heading' style={{ color: "white" }}>for the 'Now' Era</h1>
                        <p className='involing-description' style={{ color: "white" }}>Across industries, enterprises are turning to digitally powered engineering solutions to modernize infrastructure and develop connected scalable products and services.</p>
                        <p className='involing-description' style={{ color: "white" }}>Softgenics India Pvt. Ltd and R&D Services (ERS) is a trusted partner that combines its deep technological expertise with a solution-focused approach to help enterprises lead through innovation and exceptional quality.</p>
                        <p className='involing-description' style={{ color: "white" }}>Backed by four decades of engineering leadership, we provide comprehensive end-to-end digital and product engineering solutions that deliver continuing value and put you on the leading-edge.</p>
                        <h1 className='ivolving-heading' style={{ color: "white" }}>Watch ERS overview</h1>
                    </div>

                    <div className='involving-rigth-container'>
                        <div className='involving-inner-container'>
                            <div className='involving-container'>
                                <h1 className='digit-container' style={gradientStyle}>#1</h1>
                                <p className='involing-description'>Engineering services provider by the Everest Group</p>
                            </div>

                            <div className='involving-container'>
                                <h1 className='digit-container' style={gradientStyle}>350+</h1>
                                <p className='involing-description'>Enterprises trust us for engineering programs</p>
                            </div>
                        </div>

                        <div className='involving-inner-container'>
                            <div className='involving-container'>
                                <h1 className='digit-container' style={gradientStyle}>2,000+</h1>
                                <p className='involing-description'>Patents driving innovation for clients</p>
                            </div>

                            <div className='involving-container'>
                                <h1 className='digit-container' style={gradientStyle}>100+</h1>
                                <p className='involing-description'>Engineering labs accelerating time-to-market</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End Envolving container */}

                <div className='mission-container-main' ref={missionContainerRef}>
                    <div className='mission-rigth-container'>
                        <div className='mission-description-container'>
                            <h1 className='home-heading'>Our Mission</h1>
                            <p className='home-description' style={{ fontSize: "20px" }}>To enable enterprises with reliable, scalable, integrated and easy to use
                                <span className='span-tag'>Digital Transformation Solutions</span>
                                that improves agility, quality and efficiency of their business operations.</p>
                        </div>
                    </div>
                    <div className='mission-left-container'>
                        <img style={{ width: "80%", borderRadius: "10px" }} src={mission} alt="mission" />
                    </div>
                </div>

                <h1 className='home-heading devlopment' style={{ color: "#6c757d" }}>Development Process</h1>

                <div className='background-image-container' ref={devlopmentContainerRef}>
                    <img className='animated-image' src={animatedImg} alt="animatedImg" />
                </div>

                <div className='over-container-main' ref={overviewContainerRef}>
                    <div className='over-left-container'>
                        <img style={{ width: "90%", borderRadius: "8px" }} src={home3} alt='maskImg' />
                    </div>

                    <div className='over-rigth-container'>
                        <div className='over-description-container'>
                            <h1 className='over-heading'>Overview</h1>
                            <h3 className='sub-heading'>Powering Connected Phygital Experiences</h3>
                            <p className='over-description'>
                                Digital Twins are connected virtual replicas of physical products, assets and
                                processes that integrate real-time behavioral data captured from IoT sensors and devices
                                to replicate the state of the physical world. By implementing digital twins across products,
                                assets and production process, enterprises can:</p>
                            <li className='li-classes'>Accelerate product development</li>
                            <li className='li-classes'>Optimize asset and plant operations</li>
                            <li className='li-classes'>Improve decision-making and root-cause analysis</li>
                            <li className='li-classes'>Achieve sustainable business outcomes</li>
                            <p className='over-description' style={{ marginTop: "14px" }}> Softgenics Digital Twin services can assist you in realizing the full potential of your assets and production processes by sensing and analyzing operational data in real time, leveraging it for AI/ML-based smarter insights and extending it to engineering, design and manufacturing applications.</p>
                        </div>
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

                <div className='query-container-main' style={{ marginTop: "60px" }} ref={formContainerRef}>
                    <div className='query-discription'>
                        <p className='over-description' style={{ fontSize: "35px", textAlign: "center", fontWeight: "600" }}>
                            <br />
                            Every day, Softgenics 245,000 experts help
                            <br />
                            digital transformation and build a more resilient,
                            <br />
                            sustainable and inclusive future.
                            <br />
                            How can we help you?
                        </p>
                    </div>
                    <div className='query-discription'>
                        <form className='query-discription-form' method="POST" action="https://formsubmit.co/softgenics.private@gmail.com" enctype="multipart/form-data">
                            <label htmlFor="firstName">First Name:</label>

                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                            />

                            <br />

                            <label htmlFor="lastName">Last Name:</label>

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                            />
                            <br />

                            <label htmlFor="workEmail">Work Email:</label>
                            <input className='user-input' type="email" id="workEmail" name="workEmail" />
                            <br />

                            <label htmlFor="workTitle">Work Title:</label>
                            <input type="text" id="workTitle" name="workTitle" />
                            <br />

                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company" />
                            <br />

                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="company" />
                            <br />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" />
                            <br />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Home;
