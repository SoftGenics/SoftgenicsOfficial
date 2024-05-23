// import React, { useRef, useEffect } from 'react';

// import video1 from '../../Video/video1.mp4';
// import video2 from '../../Video/video2.mp4';
// import home from '../../Assets/img1.jpg';
// import home1 from '../../Assets/home.png';
// import home4 from '../../Assets/img2.jpg';

// import './index.css'; // Import the CSS file for styling

// const Videotest = () => {
//     const backgroundContainerRef = useRef(null);

//     useEffect(() => {
//         const container = backgroundContainerRef.current;

//         // Function to handle automatic sliding
//         const slideBackgrounds = () => {
//             const backgrounds = container.querySelectorAll('.background-slide');
//             let currentIndex = 0;

//             setInterval(() => {
//                 backgrounds[currentIndex].classList.remove('active');
//                 currentIndex = (currentIndex + 1) % backgrounds.length;
//                 backgrounds[currentIndex].classList.add('active');
//             }, 5000); // Adjust the interval as needed (in milliseconds)
//         };

//         slideBackgrounds();
//     }, []);

//     return (
//         <div className='home-main-container-test' ref={backgroundContainerRef}>

//             <div className='background-slide background-image-con active' style={{ backgroundImage: `url(${home})` }}>
//                 {/* <div className="overlay-text">Your Text Here</div> */}
//             </div>

//             <div className='background-slide background-video-container'>
//                 <video className='background-video' autoPlay loop muted>
//                     <source src={video2} type='video/mp4' />
//                 </video>
//                 <div className="overlay-text">More Video2 Text</div>
//             </div>

//             <div className='background-slide background-image-con' style={{ backgroundImage: `url(${home1})` }}>
//                 <div className="overlay-text">home1</div>
//             </div>

//             <div className='background-slide background-video-container'>
//                 <video className='background-video' autoPlay loop muted>
//                     <source src={video1} type='video/mp4' />
//                 </video>
//                 <div className="overlay-text" >
//                     <button onClick={() => alert("success")}>
//                         <span className="shadow"></span>
//                         <span className="edge"></span>
//                         <span className="front text">query</span>
//                     </button>
//                 </div>
//             </div>

//             <div className='background-slide background-image-con' style={{ backgroundImage: `url(${home4})` }}>
//                 <div className="overlay-text">Another Text</div>
//             </div>
//         </div>
//     );
// };

// export default Videotest;
