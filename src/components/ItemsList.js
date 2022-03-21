import React from 'react'
import Item from './Item'
/**
 * Act as main homepage of the app
 * Displaying all listed items (availabe and on renting)
 */

export default function ItemsList(props) {
  return (
    <section className='section'>
      
      <div className='title'>Items Listing</div>
      <Item />
      
    </section>
  )
}
