import React from 'react';
import AboutPage from './about.page';
import { Link } from 'react-router-dom';
import img from '../assest/dogg.jpg'
import '../styles/home.css'
const HomePages = () => {
    return (
        <>
        <div className='home' style={{backgroundImage:`url(${img})`}} >
        <div className='headerContainer'>
            <h3 className=''>Animal Rescue Network</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio non perferendis earum quod placeat unde corrupti. Praesentium architecto labore illum nemo, quam facilis reprehenderit officiis optio quidem sequi aut!</p>
            <Link to="/request">
            <button>Request</button>
            </Link>
        </div>
    </div>
        <AboutPage/>
        </>
    );
}

export default HomePages;
