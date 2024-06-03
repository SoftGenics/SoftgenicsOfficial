import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import Footer from '../../Footer';
import Header from '../../Header'

import webDevlopnet from '../../../Assets/mob_dev.jpg'
import webdesign from '../../../Assets/app_design1.jpg'
import schoollogo2 from '../../../Assets/schoollogo2.jpg'
import Cloud_infrastructure_management from '../../../Assets/Cloud_infrastructure_management.png'
import Cloud_infrastructure_security from '../../../Assets/Cloud_infrastructure_security.png'
import It_infrasture_consulting from '../../../Assets/It_infrasture_consulting.png'
import continius_testing from '../../../Assets/continius_testing.png'
import mantanus from '../../../Assets/mantanus.png'
import AugmentedReality from '../../../Assets/AugmentedReality.png'
import IntegrationwithExistingSystems from '../../../Assets/IntegrationwithExistingSystems.png'
import Personalization from '../../../Assets/Personalization.png'

import app_design from '../../../Assets/app_design.jpg'

import angular from '../../../Assets/angular.svg.png'
import xyz from '../../../Assets/xyz.jpeg'
import django from '../../../Assets/django.jpeg'
import express from '../../../Assets/express.jpeg'
import html from '../../../Assets/html.png'
import java from '../../../Assets/java.jpeg'
import javascript from '../../../Assets/javascript.png'
import laravel from '../../../Assets/laravel.webp'
import mongo from '../../../Assets/mongo.png'
import mysql from '../../../Assets/mysql.webp'
import nodejs from '../../../Assets/nodejs.png'
import vue from '../../../Assets/vue.jpeg'
import nosql from '../../../Assets/nosql.jpeg'
import php from '../../../Assets/php.svg.png'
import postgres from '../../../Assets/postgres.png'
import python from '../../../Assets/python.png'
import react from '../../../Assets/react.png'
import svelte from '../../../Assets/svelte.png'
// import ruby from '../../../Assets/ruby.jpg'

import client_mobile2 from '../../../Assets/client_mobile4.png'
import client_mobile3 from '../../../Assets/client_mobile3.png'

import './index.css'

const TabList = ['FRONTEND', 'BACKEND', 'DATABASE', 'PLATFORMS', 'UI/UX', 'CMS', 'Other Tools']

const TechnologyImages = [
    { src_image: html, technology: 'FRONTEND' },
    { src_image: xyz, technology: 'FRONTEND' },
    { src_image: javascript, technology: 'FRONTEND' },
    { src_image: angular, technology: 'FRONTEND' },
    { src_image: react, technology: 'FRONTEND' },
    { src_image: vue, technology: 'FRONTEND' },
    { src_image: svelte, technology: 'FRONTEND' },
    { src_image: nodejs, technology: 'BACKEND' },
    { src_image: express, technology: 'BACKEND' },
    { src_image: php, technology: 'BACKEND' },
    { src_image: laravel, technology: 'BACKEND' },
    { src_image: java, technology: 'BACKEND' },
    { src_image: python, technology: 'BACKEND' },
    { src_image: django, technology: 'BACKEND' },
    { src_image: mongo, technology: 'DATABASE' },
    { src_image: mysql, technology: 'DATABASE' },
    { src_image: nosql, technology: 'DATABASE' },
    { src_image: postgres, technology: 'DATABASE' },

];

const images = [
    client_mobile2,
    client_mobile3,
    webdesign,
];

const MobileDev = () => {
    const [selectedCategory, setSelectedCategory] = useState('FRONTEND');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [images.length]); // Re-run effect if number of images changes

    const handleCategoryClick = (tabItem) => {
        setSelectedCategory(tabItem)
        console.log(tabItem, "item")
    }

    return (
        <>
            <Header />
            {/* fixed sub header */}

            <div className='header-third-main adjestment adjestment2'>
                <div className='header-botton-third'>
                    <Link to="/" className='link-classes2' style={{ paddingRight: "10px", color: "#000" }}>Home</Link>
                    <IoIosArrowForward style={{ marginTop: "5px" }} />
                    <Link className='link-classes2'>Mobile Devlopment</Link>
                </div>
            </div>

            {/* fixed sub header */}
            <div className='all-component-main-container'>
                {/* write your code here */}

                <div className='erp-main-bg-container'>
                    <div className='erp-midell-container'>
                        <h1 className='erp-main-heading' style={{ alignSelf: "flex-start" }}>
                            Mobile Development Services
                        </h1>
                        <p className='erp-main-description'>
                            <strong>Genuine care for your web development project </strong> <br />
                            Softgenics offers a carefully crafted template to help businesses pitch their mobile development proposals effectively. Our template allows companies to showcase their unique value proposition in the mobile space and demonstrate how our expertise can drive success in the competitive landscape.
                        </p>
                        <div className='link-container-erp'>
                            <Link className='Request-ERP-development' to="/new-roject"> Request ERP development </Link>
                            <Link className='Get-a-cost-estimate' to="/contact-us"> Get a cost estimate </Link>
                        </div>
                    </div>
                    <div className='erp-midell-container'>
                        <img className='banner-image-responsiv' src={webDevlopnet} />
                    </div>
                </div>

                <div className='web-dev-top-webdevlopment' style={{backgroundImage: `url(${app_design})`}}>
                    <h1 className='web-devlopment-heading'> <spen className="text-modified">Top</spen> App Development <spen className="text-modified">Company</spen></h1>
                    <p className='web-devlopment-description'>Team of exceptional web developers offering end-to-end Web Development Solutions for diverse industries.</p>
                    <img src={schoollogo2} alt='schoollogo2' className='schoollogo2' />
                </div>

                <div className='web-dev-top-webdevlopment-second'>
                    <img src={webdesign} alt='webdesign' className='webdesign-image' />
                    <div className='webdev-description'>
                        <h1 className='webdev-heading-new'>Top App Development Company Bringing Innovation For Global Businesses</h1>

                        <p className='webdev-description-new'>Softgenics is a leading mobile development company renowned for delivering innovative and scalable mobile solutions tailored to our clients' needs. Our team comprises seasoned professionals with extensive experience in mobile app development across various platforms, ensuring that every project receives the highest level of expertise and attention. With a focus on quality, innovation, and client satisfaction, Softgenics stands as a trusted partner for businesses seeking to elevate their mobile presence and reach.</p>
                    </div>

                    <div className='our-fasilities-home-container'>
                        <figure className="snip1584"><img src={Cloud_infrastructure_management} alt="sample87" />
                            <figcaption>
                                <h3>Burgundy Flemming</h3>
                                <h5>Advertising</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>

                        <figure className="snip1584"><img src={Cloud_infrastructure_security} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>
                        <figure className="snip1584"><img src={It_infrasture_consulting} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>
                        <figure className="snip1584"><img src={continius_testing} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>

                        </figure>

                    </div>

                    <div className='our-fasilities-home-container'>
                        <figure className="snip1584"><img src={mantanus} alt="sample87" />
                            <figcaption>
                                <h3>Burgundy Flemming</h3>
                                <h5>Advertising</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>

                        <figure className="snip1584"><img src={Personalization} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>
                        <figure className="snip1584"><img src={AugmentedReality} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>
                        </figure>
                        <figure className="snip1584"><img src={IntegrationwithExistingSystems} alt="sample120" />
                            <figcaption>
                                <h3>Caspian Bellevedere</h3>
                                <h5>Accounting</h5>
                            </figcaption><Link to="#"></Link>

                        </figure>

                    </div>
                    <div className='webdev-description' style={{ marginTop: "1%" }}>
                        <h1 className='webdev-heading-new' style={{ textAlign: "center" }}>
                            Leverage the Technical Expertise of A Top Mobile Development Company to Own Innovative Mobile App Solutions
                        </h1>
                        <p className='webdev-description-new' style={{ textAlign: "center" }}>The cutting-edge tech proficiency of our top Mobile developers to build scalable web solutions</p>

                        <div className='button-web-devlopment'>
                            {TabList.map((tabItem, index) =>
                                <button key={index} className={`tap-button ${selectedCategory === tabItem ? 'selected' : ''}`} type='button' onClick={() => handleCategoryClick(tabItem)}>{tabItem}</button>
                            )}
                        </div>

                        <div class='display-image-container'>
                            {TechnologyImages.map((item, index) => (
                                selectedCategory === item.technology && (
                                    item.src_image ? (
                                        <img className='technology-img' key={index} src={item.src_image} alt={`Image ${index + 1}`} />
                                    ) : (
                                        <img className='technology-img' key={index} src={'https://via.placeholder.com/150'} alt={`Placeholder ${index + 1}`} />
                                    )
                                )
                            ))}
                        </div>
                    </div>

                    <div className='silde-image-cont-new'>
                        <h1 className='webdev-heading-new' style={{ textAlign: "center", width: "90%", color: "#fff" }}>
                            The Glimpse Of The Solutions We Have Created For Our Global Clients
                        </h1>
                        <div className="image-slider">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                            <p style={{ color: "white", textAlign: "center" }}>Our Client Project</p>
                        </div>
                    </div>

                </div>

                {/* write your code here */}
            </div>
            <Footer />
        </>
    )
}
export default MobileDev

