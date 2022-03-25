import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';
/**
 * Booking component
 *  display chosen time
 *  display renting cost
 *  confirm to add item to OnRenting
 */
export default function ItemBooking(props) {
  // const {...item} = props;
  console.log("userParams from ItemBooking.js", useParams());
  // const {id} = useParams();

  // handle dropdown select
  const getSelectedHr = e => {
    let rentHour = e.target.value;
    console.log("selected rentHour from ItemBooking.js", rentHour);
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

  const item = {id: 4, title:"chick tripper", description:"🔞 parental advisory", isRenting:false, cost: 250,image:"https://media.giphy.com/media/U18af5l5Xzdxm/giphy.gif", rentTime:3}
  return (
    <div className='section'>
      {/* <div><small>booking item {id} </small></div> */}
      {/* <div className='title is-4'>Item {id} Details</div> */}

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
              <strong>Receipt</strong>
              <p>
                Renting cost per hour: ${item.cost}
              </p>
              <p>
                Item will be rent for {item.rentTime} hours.
              </p>
              <p>Total: ${item.cost * item.rentTime}</p>
            </div>
            <div className="container">
              <div className="is-clearfix mt-4">
                <div className="select is-rounded is-pulled-left">
                  <select name="rentHour"
                    // defaultValue={value}
                    // onChange={(e) => rentHour(e.target.value)}
                    onChange={getSelectedHr}>
                    <option value="0.5">30 mins</option>
                    <option value="1">1 hr</option>
                    <option value="2">2 hrs</option>
                    <option value="3">3 hrs</option>
                    <option value="4">4 hrs</option>
                  </select>
                </div>
                <button className="button is-info is-outlined is-rounded is-pulled-right"
                  // onClick={addToRenting}
                  disabled
                  >Rent Now</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}