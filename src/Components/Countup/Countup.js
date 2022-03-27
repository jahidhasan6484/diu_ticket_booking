import React from 'react';
import './Countup.css';
import CountUp from 'react-countup';
import { FaBus } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { GiRoad } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

const Countup = () => {
    return (
        <div className="section_design brown">
            <div className="container">
                <h1 className="section_title">Our Resources</h1>

                <div class="container">
                    <div class="row countup">
                        <div class="col-md-3 mt-5">
                            <p className="countup__number"><CountUp end={50} /></p>
                            <FaBus className="resources__icon" size="40" />
                        </div>
                        <div class="col-md-3 mt-5">
                            <p className="countup__number"><CountUp end={100} /></p>
                            <GrUserPolice className="resources__icon" size="40" />
                        </div>
                        <div class="col-md-3 mt-5">
                            <p className="countup__number"><CountUp end={15} /></p>
                            <GiRoad className="resources__icon" size="40" />
                        </div>
                        <div class="col-md-3 mt-5">
                            <p className="countup__number"><CountUp end={5} /></p>
                            <BsTools className="resources__icon" size="40" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Countup;