import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Header from '../../Header'
import './index.css'

const Application = () => (
    <>
        <Header />
        {/* fixed sub header */}
        <div className='header-third-main adjestment adjestment2'>
                <div className='header-botton-third'>
                    <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                    <IoIosArrowForward style={{marginTop:"5px"}}/>
                    <Link className='link-classes2'>Application</Link>
                </div>
            </div>
        {/* fixed sub header */}
        <div className='all-component-main-container'>
            {/* write your code here */}
            <div className=''>mmmmmmmmmmmmmmmmm</div>

            {/* write your code here */}
        </div>
    </>
)
export default Application

