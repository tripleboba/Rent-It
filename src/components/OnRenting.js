import React, { useContext } from 'react'
import { useStateValue, StateContext } from "../providers/StateProvider";
import { getTotalRenting } from '../providers/reducer';
/**
 * Act as a cart that keeping item data until item is expired
 */

export default function OnRenting() {
  // const [{rentingBasket}, dispatch] = useStateValue();
  // console.log("renting basket: ", rentingBasket); 
  const { addToRenting, rentingBasket } = useContext(StateContext);
  console.log(rentingBasket);
  return(
    <StateContext.Consumer>
      {({rentingBasket, toggleTheme}) => (
        <div className='section'>
          <div className='title is-4'>Currently Renting</div>
          <p>
            rentingBasket.length: {rentingBasket.length} -
            getTotalRenting: {getTotalRenting(rentingBasket)} -
          </p>

        </div>
      )}
    </StateContext.Consumer>

  )
}