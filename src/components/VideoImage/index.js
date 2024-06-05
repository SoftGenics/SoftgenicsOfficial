import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom'

import video1 from '../../Video/video1.mp4';
import video2 from '../../Video/video2.mp4';

// import video1 from '../../Video/video1_output.m3u8';
// import video2 from '../../Video/video2_output.m3u8';

import home from '../../Assets/img_1.jpg';
import home1 from '../../Assets/home_4.jpg';
// import home4 from '../../Assets/img2.jpg';

import './index.css'; // Import the CSS file for styling

const VideoImage = () => {
    const backgroundContainerRef = useRef(null);

    useEffect(() => {
        const container = backgroundContainerRef.current;

        // Function to handle automatic sliding
        const slideBackgrounds = () => {
            const backgrounds = container.querySelectorAll('.background-slide');
            let currentIndex = 0

            setInterval(() => {
                backgrounds[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % backgrounds.length;
                backgrounds[currentIndex].classList.add('active');
            }, 5000); // Adjust the interval as needed (in milliseconds)
        };

        slideBackgrounds();
    }, []);

    return (
        <div className='home-main-container-test' ref={backgroundContainerRef}>

            <div className='background-slide background-video-container'>
                <video className='background-video' autoPlay loop muted>
                    <source src={video1} type='video/mp4' />
                </video>
                <div className="overlay-text" style={{ top: "40%" }}>
                    <h1 className='overlay-heading'>Our company specializes in software development for </h1>
                    <div className='overay-description'>
                        various industries including <button className='higthlight' style={{ marginRight: "10px" }}> Healthcare, </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>Entertainment</button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>Education</button>
                        <button className='higthlight' style={{ marginRight: "10px" }}> Real Estate
                            <br />
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}> Government/Public Sector</button>
                        <span className='higthlight'>Transport</span>
                        <button className='higthlight' style={{ marginRight: "10px" }}> Service Providers
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}> Beauty and Care
                        </button>
                        <br />
                        <span className='higthlight'>E-commerce</span>
                        <button className='higthlight' style={{ marginRight: "10px" }}>
                            Courier Services
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>
                            Account Management
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>
                            Export/Import
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>
                            Shipping Agency
                        </button>
                        <button className='higthlight' style={{ marginRight: "10px" }}>
                            and Employee Management.
                        </button>
                    </div>
                </div>
            </div>

            <div className='background-slide background-video-container'>
                <video className='background-video' autoPlay loop muted>
                    <source src={video2} type='video/mp4' />
                    {/* <source src='https://staging.streamable.com/rpcb8q' type='video/mp4' /> */}
                </video>

                <div className="overlay-text">
                    <h1 className='overlay-heading'>Software solves real problems!</h1>
                    <p className='overay-description'>
                        Software development is not  just about coding. It's about understanding <br /><br /><button className='higthlight' style={{ marginRight: "10px" }}> people's needs </button> and solving their problems.
                    </p>

                </div>
            </div>

            <div className='background-slide background-image-con' style={{ backgroundImage: `url(${home})` }}>
                {/* <div className="overlay-text" style={{ color: "yellow", top: "30%", width: "400px" }}>When you say it, it’s marketing. When they say it, it’s social proof</div> */}
            </div>



            <div className='background-slide background-image-con active' style={{ backgroundImage: `url(${home1})` }}>
                <div className="overlay-text" style={{ color: "yellow", top: "30%", width: "80%" }}>When you say it, it’s marketing. When they say it, it’s social proof
                </div>
            </div>



            {/* <div className='background-slide background-image-con' style={{ backgroundImage: `url(${home4})` }}>
                <div className="overlay-text">Softgenics India Privete Limted</div>
            </div> */}
        </div>
    );
};

export default VideoImage;
