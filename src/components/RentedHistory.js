import React from 'react'
import { useStateValue } from '../providers/StateProvider';
import RentedItem from './RentedItem';
/**
 * Act as receipt page
 * Keep rented history of the item
 */
export default function RentedHistory() {
  const [{rentedBasket}, dispatch] = useStateValue();
  console.log("rented basket from RentedHistory.js: ", rentedBasket); 
  
  const formatItemsCounter = items => {
    if (items === 0) return '';
    else if (items === 1) return "1 item";
    else return `${items} items`;
  }

  const rentedItems = rentedBasket.map((item) => (
    <RentedItem
      key={item.id}
      {...item}
    />
  ));


  return (
    <div className='section'>
      <div className='container'>
        <div className='title is-4'>Rented History</div>
        <p className='subtitle is-6'>{formatItemsCounter(rentedBasket.length)}</p>
        <div className="column columns is-multiline">
          {rentedItems.length ? rentedItems : 
            ( <div className="column">
                <span className="title has-text-grey-light">No items found!</span>
              </div> )
          }
        </div>
      </div>
  </div>
  )
}

