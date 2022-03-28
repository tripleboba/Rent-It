import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';
/**
 * Booking component
 *  display chosen time
 *  display renting cost
 *  confirm to add item to OnRenting
 * 
 * --- SELF NOTE ---
 * for db api (need to add axios)
 * note use query to select the item using id
 * here is already handle in-memory db
 * recommended db: JSON server (no create table), backend -> external db
 */

export default function ItemBooking(props) {
  // handle dropdown select
  const [rentHour, setRentHour] = useState(0);
  const getSelectedHr = e => {
    setRentHour(e.target.value);
    // rentHour = e.target.value;
    console.log("selected rentHour from ItemBooking.js", rentHour);
  }
  const [{rentingBasket, allItems}, dispatch] = useStateValue();
  const addToRenting = () => {
    const itemsToUpdate = [...allItems];
    // find the specific item in allItems
    const foundIndex = itemsToUpdate.findIndex((i)=>{
      return i.id === item.id
    })
    const itemToUpdate = {
      ...item,
      isRenting: true,
      rentTime: rentHour,
    }
    itemsToUpdate[foundIndex] = itemToUpdate;

    dispatch({
      type: "ADD_TO_RENTING",
      item: itemToUpdate,
      // item: {
      //   ...item,
      //   isRenting: true,
      //   rentTime: rentHour,
      // },
    });
    // axios -> change server
    // dispath -> changing state in the browser
    dispatch({
      type: 'UPDATE_ITEMS',
      items: itemsToUpdate,
    });
  }
  // handle 'rent-now' button to get the data of the item
  // const [{rentingBasket}, dispatch] = useStateValue();
  // console.log("renting basket from ItemBooking.js: ", rentingBasket);
  // const addToRenting = () => {
  //   // push item into the context layer
  //   dispatch({
  //     type: "ADD_TO_RENTING",
  //     item: {
  //       ...item
  //       // id: item.id,
  //       // image: item.image,
  //       // title: item.title,
  //       // description: item.description,
  //       // cost: item.cost,
  //       // isRenting: item.isRenting,
  //       // rentTime: item.rentTime
  //     },
  //   });
  // }

  // because the redirect is using Link -> use this to find the item
  const {id } = useParams()
  const item = allItems.find((selectItem)=>{ return Number(selectItem.id) === Number(id) })
  console.log("item's id get from useParams from ItemBooking.js", useParams());
  console.log('item being added from ItemBooking.js',item);
  // keep it find item down here after the addToRenting (shouldn't have bug just to make sure ^)
  
  return (
    <div className='section'>

      <div className='container'>
        <div className="columns">
          <div className="column is-one-third">
            <div className='container'>
              <figure className="image is-94x94">
                <img src={item.image} alt={item.title} />
              </figure>
            </div>
          </div>
          <div className="column ">
            <div className="container">
              <div className="is-clearfix">
                <div className="field is-pulled-left">
                  <b className='title is-4 pr-3' style={{ textTransform: "capitalize" }}>{item.title}</b>
                  <div className="tag is-warning is-rounded">${item.cost}/hr </div>
                </div>
                <div className="field is-pulled-right">
                  {item.isRenting ? (
                    <div className="has-text-danger">Not Available</div>
                  ):(
                    <div className="has-text-primary">Available</div>
                  )}
                </div>
              </div>
              <div className="container mt-4">{item.description}</div>
            </div>
            <div className="container mt-4">
              <strong>----Receipt----</strong>
              <p>
                Renting cost per hour: ${item.cost}
              </p>
              <p>
                Item will be rent for {rentHour} hours.
              </p>
              <p>
                Fee: $0.3
              </p>
              <strong>Total: ${item.cost * rentHour * 0.3}</strong>
            </div>
            <div className="container">
              <div className="is-clearfix mt-4">
                <div className="select is-rounded is-pulled-left">
                  <select name="rentHour"
                    defaultValue={rentHour}
                    // onChange={(e) => rentHour(e.target.value)}
                    onChange={getSelectedHr}>
                    <option value="0">select time</option>
                    <option value="0.5">30 mins</option>
                    <option value="1">1 hr</option>
                    <option value="2">2 hrs</option>
                    <option value="3">3 hrs</option>
                    <option value="4">4 hrs</option>
                  </select>
                </div>

                <button className="button is-info is-outlined is-rounded is-pulled-right"
                  onClick={addToRenting}
                  // unable the button when item is rented 
                  disabled={item.isRenting}
                  >Rent Now</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
