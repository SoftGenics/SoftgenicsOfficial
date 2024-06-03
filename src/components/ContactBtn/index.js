import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Header from '../Header'
import './index.css'

const ContactBtn = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
            <div className='header-botton-third'>
                <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                <IoIosArrowForward style={{ marginTop: "5px" }} />
                <Link className='link-classes2'>Contact Us</Link>
            </div>
        </div>
        {/* fixed sub header */}
        
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className='main-form-container' style={{ marginTop: "1%" }}>
            <h1 className='submit-details-heading'>Please Submit Your <br/>Details</h1>
                <form method="POST" action="https://formsubmit.co/softgenics.private@gmail.com" enctype="multipart/form-data">
                    <input type="text" name="name" placeholder="Enter Your Name" />
                    <input type="email" name="email" placeholder="Enter Your Email" />
                    <input type="text" name="number" placeholder="Enter Your Number" />
                    <textarea name="message" placeholder="Please Write Your Query"></textarea>
                    <input type="file" name="attachment" accept="image/png, image/jpeg" />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* write your code here */}
        </div>
    </>
)
export default ContactBtn

