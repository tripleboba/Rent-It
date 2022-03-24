import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';

export default function ItemDetails() {
  // console.log(useParams());
  const {id} = useParams();
  return (
    <div className='section'>
      <div className='title is-4'>Item {id} Details</div>
    </div>
  )
}
