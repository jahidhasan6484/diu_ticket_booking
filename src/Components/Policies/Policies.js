import React from 'react';
import './Policies.css';
import policies01 from '../../Images/policies01.jpg';
import policies02 from '../../Images/policies02.jpg';
import policies03 from '../../Images/policies03.jpg';

const Policies = () => {
    return (
        <div className="section_design">
            <div className="container">
                <h1 className="section_title">Policies &amp; Relevant Information</h1>

                <div class="row policies">
                    <div class="col-md-7 policies__info">
                        <h2 class="policies__title">policy for driver &amp; helper</h2>
                        <p class="policies__act">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={policies01} class="img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="policies01"></img>
                    </div>
                </div>

                <div class="row policies">
                    <div class="col-md-7 order-md-2 policies__info">
                        <h2 class="policies__title">Policy for passenger</h2>
                        <p class="policies__act">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={policies02} class="img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="policies02"></img>

                    </div>
                </div>

                <div class="row policies">
                    <div class="col-md-7 policies__info">
                        <h2 class="policies__title">road transport law 2018</h2>
                        <p class="policies__act">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={policies03} class="img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="policies03"></img>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Policies;