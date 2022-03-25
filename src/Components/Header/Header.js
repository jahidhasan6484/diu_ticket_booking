import React from 'react';
import './Header.css';
import { CgMonday } from "react-icons/cg";
import { VscAdd } from "react-icons/vsc";
import Search from '../Search/Search';
import videoBg from '../../Video/diu_bus.mp4';


const Header = () => {
    return (
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
                                <p className="logo"> <CgMonday className="logo__icon" size={30} /> <span className="logo__bus">b<span className="logo__u">u</span>s</span></p>
                            </div>
                            <div class="col-4 d-flex justify-content-end align-items-center">
                                <VscAdd className="menu__plus" size={25}/>
                            </div>
                        </div>
                    </header>
                    <Search />
                </div>

            </div>



        </div>
    );
};

export default Header;