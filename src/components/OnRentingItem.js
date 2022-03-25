import React, { useState } from "react";
import { useStateValue } from "../providers/StateProvider";
import ExtendTime from "./ExtendTime";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function OnRentingItem(props) {
  const {...item} = props;

  // for remove the item from the on-renting page
  const [{rentingBasket}, dispatch] = useStateValue();
  console.log("renting basket from OnRentingItem.js: ", rentingBasket);
  const removeFromRenting = () => {
    dispatch({
      type: "REMOVE_FROM_RENTING", 
      id: item.id,
    })
  }
  // for extending the time of the item
  const [extendTimeNoti, setExtendTimeNoti] =  useState(false);

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media mb-3">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt={item.title} />
            </figure>
          </div>
          <div className="media-content">
            <div className="container">
              <b style={{ textTransform: "capitalize" }}>{item.title}</b>
              <p className="small">{item.description}</p>
            </div>
            <div className="container mt-1 mb-1">
              <div className="">You rent it for item.rentTime</div>
            </div>
            <div className="buttons has-addons is-small is-right mt-2">
              <button className="button is-small is-rounded is-info is-light"
                // onClick={checkNoti}
                onClick={()=>setExtendTimeNoti(true)}
                >Extend Time</button>
              <button className="button is-small is-danger is-light"
                onClick={removeFromRenting}
                >End</button>
            </div>
          </div>
        </div>
        <ExtendTime trigger={extendTimeNoti} setTrigger={setExtendTimeNoti} />
      </div>
    </div>

  );
}
