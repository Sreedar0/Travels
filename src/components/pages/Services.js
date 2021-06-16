import React from 'react';
import '../../App.css';

export default function services() {
    return <>
            <h1 className='services'>SERVICES</h1>
            <div className='services-main'>
                <div className='services-container'>
                    <div className='services-wrap'>
                        <div className='services-items'>
                            <div>
                                <figure>
                                    <h3>Our Guides</h3>
                                    <img src="images/OIP.jpg" alt='our services'></img>
                                </figure>
                                <p>We provide our tourist guide for free of cost</p>
                            </div>
                            <div>
                                <figure>
                                <h3>Our Cheffs</h3>
                                    <img src="images/food.png" alt='our services' ></img>
                                </figure>
                                <p>We will give the best cheff and can cook of all type of dishes at your service.</p>
                            </div>
                            <div>
                                <figure>
                                <h3>Our Transport</h3>
                                    <img src="images/transport.jpg" alt='our services'></img>
                                </figure>
                                <p>We provide the best transport facility allover the world</p>
                            </div>
                        </div>
                        <div className='services-items'>
                            <div className='services-item'>
                                <figure>
                                <h3>Our Entertainers</h3>
                                    <img src="images/entertainment.jpg" alt='our services'></img>
                                </figure>
                                <p>We have the best entertainers 24/7 at your service.</p>
                            </div>
                            <div>
                                <figure>
                                <h3>Our Wine Collections</h3>
                                    <img src="images/wine.jpg" alt='our services'></img>
                                </figure>
                                <p>We have the best collections of wine for our customers.</p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
         </>
}