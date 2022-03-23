import { React } from 'react'
import Item from './Item';
/**
 * Act as a cart that keeping item data until item is expired
 */
export default function OnRenting(props) {
  const {items} = props;
  const listOfCurrentlyRentingItems = items.map((item) => (
    item.rentTime ?
      <Item
        key={item.id}
        {...item}
      />
    : <></>
  ));
  return (
    <div className='section'>
      <div className='title is-4'>Currently Renting</div>
        <div className="column columns is-multiline">
          {items && items.length ? listOfCurrentlyRentingItems : 
             <div className="column">
                <span className="title has-text-grey-light">
                  No items found!
                </span>
              </div> 
          }
        </div>
    </div>
    );
  }
  
  // return (
  //   <section className='section'>
      
  //     <div className='title is-4'>On Renting</div>
      
  //   </section>
