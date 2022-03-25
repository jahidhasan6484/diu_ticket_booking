import React from 'react';
import './Header.css';
import { CgMonday } from "react-icons/cg";


const Header = () => {
    return (
        <div className="header">
            <div class="container">
                <header class="blog-header">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <p className="logo"> <CgMonday className="logo__icon" size={30} /> <span className="logo__bus">b<span className="logo__u">u</span>s</span></p>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            {/* <a class="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a> */}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;