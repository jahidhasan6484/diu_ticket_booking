import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="section_design">
            <div class="container">
                <h1 className="section_title">Pricing &amp; packages</h1>
                <div class="row text-center pricing">
                    <div class="col-lg-4">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="package_name">Weekly</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="package_price">BDT. 100<small class="text-muted fw-light">/we</small></h1>
                                <div class="pricing_details mt-3 mb-4">
                                    <p>Lorem Ipsum has been the industry's</p>
                                    <p>dummy text ever since the 1500s</p>
                                    <p> popularised in the 1960s with the release of Letraset sheets</p>
                                </div>
                                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="package_name">Monthly</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="package_price">BDT. 300<small class="text-muted fw-light">/mo</small></h1>
                                <div class="pricing_details mt-3 mb-4">
                                    <p>Lorem Ipsum has been the industry's</p>
                                    <p>dummy text ever since the 1500s</p>
                                    <p> popularised in the 1960s with the release of Letraset sheets</p>
                                </div>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card mb-4 rounded-3 shadow-sm border-primary">
                            <div class="card-header py-3 text-white bg-primary border-primary">
                                <h4 class="package_name">Semester</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="package_price">BDT. 1000<small class="text-muted fw-light">/se</small></h1>
                                <div class="pricing_details mt-3 mb-4">
                                    <p>Lorem Ipsum has been the industry's</p>
                                    <p>dummy text ever since the 1500s</p>
                                    <p> popularised in the 1960s with the release of Letraset sheets</p>
                                </div>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;