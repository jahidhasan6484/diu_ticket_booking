import React from 'react';
import './Footer.css';
import { BsFacebook, BsWhatsapp, BsTelegram, BsTwitter, BsInstagram, BsYoutube, BsMouse } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="section_design">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer_title">follow us</p>
                        <div className="footer_content footer_social_box">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <BsInstagram size="25" className="footer_social_image" />
                                    <p className="social_name">instagram</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <BsFacebook size="25" className="footer_social_image" />
                                    <p className="social_name">facebook</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <BsTwitter size="25" className="footer_social_image" />
                                    <p className="social_name">twitter</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <BsWhatsapp size="25" className="footer_social_image" />
                                    <p className="social_name">whatsapp</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BsYoutube size="25" className="footer_social_image" />
                                    <p className="social_name">youtube</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <BsTelegram size="25" className="footer_social_image" />
                                    <p className="social_name">telegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="footer_title">copyright</p>
                        <div className="footer_content">
                            <p>@2022, All rights reserved</p>
                            <p>Daffodil International University</p>
                            <p>Daffodil Smart City, Asulia, Dhaka</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="footer_title">Back to top</p>
                        <div className="footer_content">
                            <p class="back"><a href="#">Click Me<BsMouse size="25"/></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;