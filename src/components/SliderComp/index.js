import Slider from "react-slick";

import client1 from '../../Assets/client1.jpg'
import client2 from '../../Assets/client2.jpg'
import client3 from '../../Assets/client3.png'
import client4 from '../../Assets/client4.jpg'
import client5 from '../../Assets/client5.jpg'

import './index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const imagesList3 = [
        client1,
        client2,
        client3,
        client4,
        client5,
    ];

    return (
        <>
            
                {/* write your code here */}

                <div className='slider-main-container'>
                    <Slider {...settings}>
                    {imagesList3.map((imageUrl, index) => (
                                    <div className="crousel-container" key={index}>
                                        <img className='slide-image' src={imageUrl} alt={`ImageItem ${index + 1}`} />
                                    </div>
                                ))}
                    </Slider>
                </div>

                {/* write your code here */}
           
        </>
    )
}
export default SliderComp 