import React from "react"
import { useStateValue } from "../providers/StateProvider";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function OnRentingItem(props) {
  const {...item} = props;

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
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
              <div class="buttons has-addons is-small is-right">
                <button class="button is-small is-rounded is-info is-outlined"
                  // onClick={}
                  >Extend Time</button>
                <button class="button is-small is-danger is-outlined"
                  // onClick={}
                  >Cancel</button>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
}

            // <div className="is-clearfix">
            //   {/* <button className="button is-small is-outlined is-link is-pulled-right"
            //         > Extend Time </button> */}
            //   <button className="button is-small is-outlined is-link is-pulled-right"
            //     // onClick={}
            //     > Cancel Now </button>
                    
            // </div>