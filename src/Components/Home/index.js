import React from 'react'
import Header from '../Header/index'
import { Button } from 'react-bootstrap';
import Footer from '../Footer/index'
import { Link } from 'react-router-dom';
import { BsArrowDownCircleFill } from 'react-icons/bs'
import './index.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <div className='container'>
                <div className='personal-information'>
                    <h1>
                        Hi I,M <span className='name'>BhagyaLaxmi,</span>
                    </h1>
                    <p>This is Official Portfolio Website Showes all details about my Skills and projects </p>
                    <Button variant="outline-warning">
                        <a href="https://docs.google.com/document/d/1SWWCvyNI45EIGx1SHwcXy12nltZNfIWc/edit?usp=sharing&ouid=112271961880851681906&rtpof=true&sd=true">Download CV</a>
                    </Button>{' '}
                    <Link to="./contact">
                        <Button variant="outline-warning"> Contact Me</Button>{' '}
                    </Link>
                    <Link to="./about">
                        <Button variant="outline-primary"> About</Button>{' '}
                    </Link>
                </div>
                <div className='profile-image'>
                    <img src='https://res.cloudinary.com/bhagya/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1675670095/image/WhatsApp_Image_2022-11-05_at_5.03.12_PM_paowe2.jpg'
                        hight="300px" width="300px" />
                </div>
            </div>
            <div className='skills-container'>
                <Link to="./projects">
                    <button className='button'>My Projects< BsArrowDownCircleFill /></button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}
export default Home