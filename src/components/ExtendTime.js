import React, { useState } from 'react';
import { useStateValue } from '../providers/StateProvider';

// should go to the server -> go back notification -> match up all the renting time -> setTimeOut

export default function ExtendTime(props) {
  const {item} = props;
  
  // handle dropdown select
  const [extendedHour, setExtraHour] = useState(0);
  const getSelectedHr = e => {
    setExtraHour(e.target.value);
    // console.log("selected extendedHour from ExtendTime.js", extendedHour);
  }
  
  // handle extending time
  console.log('item being chosen to extend renting time from ExtendTime.js', item);
  const [{rentingBasket, allItems}, dispatch] = useStateValue();
  // get the extending item's id and renting coist from the rentingBasket
  // get the remaining hour from the allItems
  // use Date obj take the current time (POST request that grab the time now - rented time )


  // const updateRentingTime = () => {
  //   const itemsToUpdate = [...allItems];
  //   const foundIndex = itemsToUpdate.findIndex((i)=>{
  //     return i.id === item.id
  //   })
  //   const itemToUpdate = {
  //     ...item,
  //     isRenting: false,
  //     rentTime: 0,
  //   }
  //   itemsToUpdate[foundIndex] = itemToUpdate;

  //   // then update its renting status
  //   dispatch({
  //     type: 'UPDATE_ITEMS',
  //     items: itemsToUpdate,
  //   });
  // }


/** click on confirm -> update
  * just the rentingBasket (same logic with allItems dispatch -> get id -> find index of the obj -> dispatch with updated [])
  */
  return (props.trigger) ? (

    <article className="message is-warning is-small">
      <div className="message-header"> <p>Exend Renting It For</p>
        <button className="delete" aria-label="delete"
          onClick={() => {
              props.setTrigger(false);
              setExtraHour(0);
            }
          }
          ></button>
        {props.children}
      </div>

      <div className="message-body">
        
        {extendedHour ? (
          <div className="container mb-3">
            <strong>---Price Quote---</strong>
            <p>Start: {item.startTime.toString()}</p>
            <p>End: {item.endTime.toString()}</p>
            <br></br>
            <p>Add: {extendedHour} more hours</p>
            <p>New Renting Time: ({extendedHour} + remaining_hour) hours</p>
            <p>New Total: ({extendedHour} * {item.cost}) + $0.3 fee</p>
          </div>

        ): ""}
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth is-small is-rounded">
              <select name="extendedHour"
                defaultValue={extendedHour}
                onChange={getSelectedHr}>
                <option value="0">select time</option>
                <option value="1">1 hr</option>
                <option value="2">2 hrs</option>
                <option value="3">3 hrs</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="button is-success is-rounded is-small"
              type="submit" 
              >Confirm</button>
          </div>
        </div>
      </div>
    </article>

    ) : "";
}
