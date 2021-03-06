import React from 'react';
import './Header.css';
import { CgMonday } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import Search from '../Search/Search';
import videoBg from '../../Video/diu_bus.mp4';
import Introduction from './../Introduction/Introduction';
import Facilities from './../Facilities/Facilities';
import Benefits from './../Benefits/Benefits';
import Pricing from './../Pricing/Pricing';
import Countup from './../Countup/Countup';
import Policies from './../Policies/Policies';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import { signInWithGoogle, signOutFromGoogle } from './../Login/firebase.config';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="overlay"></div>

                <video className='videoTag' autoPlay loop muted>
                    <source src={videoBg} type='video/mp4' />
                </video>
                <div className="content">
                    <div class="container">
                        <header class="blog-header">
                            <div class="row flex-nowrap justify-content-between align-items-center">
                                <div class="col-4 pt-1">
                                    <p className="logo"> <CgMonday className="logo__icon" size={30} /> <span className="logo__bus">bus</span></p>
                                </div>
                                <div class="col-4 d-flex justify-content-end align-items-center">
                                    {
                                        localStorage.name ?
                                            <img className="bd-placeholder-img rounded-circle profile_photo" src={localStorage.getItem('profilePhoto')} alt="profilePhoto"></img>
                                            :
                                            <BsPersonCircle onClick={signInWithGoogle} className="menu__login" size={25} />
                                    }



                                </div>
                            </div>
                        </header>
                        <Search />
                    </div>
                </div>
            </div>
            <Introduction />
            <Facilities />
            <Benefits />
            <Pricing />
            <Countup />
            <Policies />
            <Contact />
            <Footer />
        </>
    );
};

export default Header;