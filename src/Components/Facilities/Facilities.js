import React from 'react';
import './Facilities.css';
import facilities01 from '../../Images/facilities01.jpg';
import facilities02 from '../../Images/facilities02.jpg';
import facilities03 from '../../Images/facilities03.jpg';
import facilities04 from '../../Images/facilities04.jpg';
import facilities05 from '../../Images/facilities05.jpg';
import facilities06 from '../../Images/facilities06.jpg';
import facilities07 from '../../Images/facilities07.jpg';

const Facilities = () => {
    return (
        <div className="section_design facilities">
            <div class="container">
                <h1 className="section_title">Facilities Inside The Buses</h1>

                <div class="row facilities__gallery">
                    <div class="column">
                        <img src={facilities01} />
                        <img src={facilities05} />
                        <img src={facilities07} />
                    </div>
                    <div class="column">
                    <img src={facilities04} />
                        <img src={facilities02} />
                        

                    </div>
                    <div class="column">
                        <img src={facilities03} />
                        <img src={facilities06} />

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Facilities;