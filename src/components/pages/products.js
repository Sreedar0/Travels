import React from 'react';
import '../../App.css';
import ProductItems from './ProductItems';

export default function products() {
    return <>
             <h1 >EXPLORE THE PLACES</h1>
             <div className='products'>
             <div className='products-main'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <ProductItems
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <ProductItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                    </ul>
                    <ul className="cards__item">
                        <ProductItems
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <ProductItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                        <ProductItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                    </ul>
                </div>
            </div>
        </div>
             </div>
            </>
}