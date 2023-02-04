import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Open House Deals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.thehousedesigners.com/images/plans/ROD/bulk/7876/CL-20-020_front_6-copy-Large_m.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Townhouse'
              path='/'
            />
            <CardItem
              src='https://static01.nyt.com/images/2011/10/13/garden/13vermont-span/13HOUSEPROUD1-articleLarge.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='1 day left for the tour'
              path='/'
            />
           <CardItem
              src='https://ulrichome.com/wp-content/uploads/2018/11/01-13.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;