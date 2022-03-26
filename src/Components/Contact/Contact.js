import React from 'react';
import './Contact.css';
import contact01 from '../../Images/contact01.jpg';
import contact02 from '../../Images/contact02.jpg';
import contact03 from '../../Images/contact03.jpg';

const Contact = () => {
    return (
        <div className="section_design brown">
            <div className="container">
                <h1 className="section_title">Contact Us</h1>
                <div class="row contact">
                    <div class="col-lg-4">
                        <img src={contact01} class="bd-placeholder-img rounded-circle" alt="contact01"></img>

                        <h2>Mr. Kazi Md. Diljeb Kabir</h2>
                        <p>Operation Head</p>
                        <p>+8801713493104</p>
                        <p className="email">diljeb@daffodilvarsity.edu.bd</p>
                    </div>
                    <div class="col-lg-4">
                        <img src={contact02} class="bd-placeholder-img rounded-circle" alt="contact02"></img>

                        <h2>Mr. Md. Ansur Rahman</h2>
                        <p>In-Charge Officer</p>
                        <p>+8801847140037</p>
                        <p className="email">anisur@daffodilvarsity.edu.bd</p>
                    </div>
                    <div class="col-lg-4">
                        <img src={contact03} class="bd-placeholder-img rounded-circle" alt="contact03"></img>

                        <h2>Mr. Md. Monir Ul Enam</h2>
                        <p>Student Ticketing Officer</p>
                        <p>+8801847140029</p>
                        <p className="email">monirulenam@daffodilvarsity.edu.bd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;