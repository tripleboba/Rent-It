import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../providers/StateProvider';
import { format } from "date-fns";
import CurrencyFormat from 'react-currency-format';
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
  const [rentPeriod, setRentHour] = useState(null);
  const getSelectedHr = e => {
    setRentHour(e.target.value);
    // console.log the previous selected value
    // console.log("selected rentPeriod from ItemBooking.js", rentPeriod);
  }

  // calculate endTime of the item
  const calculateEndTime = (startTime, rentPeriod) => {
    const endTime = new Date(startTime.getTime());  // won't be interferred the currentTime when calculate
    endTime.setHours(startTime.getHours() + Number(rentPeriod));
    return endTime;
  };
  const timeFormatDisplay = (t) => {
    return format(t, "hh:mm a - MMM dd, yyyy");
  }
  const rentForFormat = (rentPeriod) => {
    if (rentPeriod === 0) return '';
    else if (rentPeriod === 1) return 'hour';
    else return 'hours';
  }

  // handle button actions
  const [{rentingBasket, allItems}, dispatch] = useStateValue();
  
  const addToRenting = () => {
    const itemsToUpdate = [...allItems];
    // find the specific item in allItems
    const foundIndex = itemsToUpdate.findIndex((i)=>{
      return i.id === item.id
    })
    
    const startTime = new Date();

    const itemToUpdate = {
      ...item,
      isRenting: true,
      startTime: startTime,
      rentPeriod: rentPeriod,
      endTime: calculateEndTime(startTime, rentPeriod),
    }
    itemsToUpdate[foundIndex] = itemToUpdate;

    dispatch({
      type: "ADD_TO_RENTING",
      item: itemToUpdate,
    });
    // axios -> change server
    // dispath -> changing state in the browser
    dispatch({
      type: 'UPDATE_ITEMS',
      items: itemsToUpdate,
    });
  }

  // because the redirect is using Link -> use this to find the item
  const {id } = useParams()
  const item = allItems.find((selectItem)=>{ return Number(selectItem.id) === Number(id) })
  console.log("item's id get from useParams from ItemBooking.js", useParams());
  console.log('item being selected from ItemBooking.js',item);
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
                  <div className="tag is-warning is-rounded">
                    <CurrencyFormat
                      // renderTex={(value) => ({value})}
                      decimalScale={2}
                      value={item.cost}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"CAD $"}
                    />/hr
                  </div>
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
              <div className='container'>
                <strong>----Price Quote----</strong>
                <p>
                  Item will be rent for <strong>{rentPeriod}</strong> {rentForFormat(rentPeriod)}.<br></br>
                  <strong>FROM&ensp;</strong> {timeFormatDisplay(new Date())}<br></br>
                  <strong>TO&ensp;&ensp;&ensp;&ensp;</strong> {timeFormatDisplay(calculateEndTime(new Date(), rentPeriod))}
                </p>
              </div>
              <div className='is-clearfix mt-4'>
                <p>
                  Service fee: $0.3
                </p>
                <div className='field is-pulled-left'>
                  <strong>Total: </strong>
                  <CurrencyFormat
                    // renderTex={(value) => ({value})}
                    decimalScale={2}
                    value={(item.cost * rentPeriod) + 0.3}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"CAD $"}
                  />
                </div>
                <div className='field is-pulled-right'>payment api</div>
              </div>
            </div>
            
            {/* Buttons section */}
            <div className="container">
              <div className="is-clearfix">
                <div className="select is-rounded is-pulled-left">
                  <select name="rentPeriod"
                    defaultValue={rentPeriod}
                    // onChange={(e) => rentPeriod(e.target.value)}
                    onChange={getSelectedHr} disabled={item.isRenting}>
                    <option value="0">select time</option>
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
