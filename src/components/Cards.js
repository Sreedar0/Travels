import React from 'react';
import CardItems from './CardItems';
import './card.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItems
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <CardItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                    </ul>
                    <ul className="cards__item">
                        <CardItems
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                        <CardItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                        <CardItems
                        src='images/img-2.jpg'
                        text='Travel through the islands of Bali in a Private Crusis'
                        label='Luxury'
                        path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
