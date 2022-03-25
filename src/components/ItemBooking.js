import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';
/**
 * Booking component
 *  display chosen time
 *  display renting cost
 *  confirm to add item to OnRenting
 */

/**   SELF NOTE
 * the Rent Now handle should be in here 
 *  
 */

export default function ItemBooking() {
  // console.log(useParams());
  const {id} = useParams();
  return (
    <div className='section'>
      <div className='title is-4'>Item {id} Details</div>
    </div>
  )
}
