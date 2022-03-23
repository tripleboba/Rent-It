import React from "react"
import { useStateValue } from "../providers/StateProvider";
/**
 * Item"s information
 * Act as each item"s page
 */

export default function Item(props) {
  const {...item} = props;

  // handle 'rent-now' button to get the data of the item
  const [{rentingBasket}, dispatch] = useStateValue();
  console.log("renting basket: ", rentingBasket);
  const addToRenting = () => {
    // push item into the context layer
    dispatch({
      type: "ADD_TO_RENTING",
      item: {
        ...item
        // id: item.id,
        // image: item.image,
        // title: item.title,
        // description: item.description,
        // cost: item.cost,
        // isRenting: item.isRenting,
        // rentTime: item.rentTime
      },
    });
  }
  
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
            <b style={{ textTransform: "capitalize" }}>{item.title}</b>
            <div className="tag is-warning is-rounded">${item.cost}/hr </div>
            <br></br><br></br>
            <div>{item.description}</div>

            {/* ------- */}
            
            {item.isRenting ? (
              <div className="container">
                <small className="has-text-danger">Not Available</small>
                <br></br><br></br>
                <div className="is-clearfix">
                  <div className="field is-pulled-left">
                      <p className="control"><small>Rent for: </small>
                        <span className="select is-small is-info">
                          <select disabled>
                            <option selected>hrs</option>
                            <option>30 mins</option>
                          </select>
                        </span>
                      </p>
                    </div>
                  <button className="button is-small is-outlined is-link is-pulled-right"
                    disabled> Rent Now </button>
                </div>
              </div>
            ) : (
              <div className="container">
                <small className="has-text-primary">Available</small>
                <br></br><br></br>
                <div className="is-clearfix">
                  <div className="field is-pulled-left">
                    <p className="control"><small>Rent for: </small>
                      <span className="select is-small is-info">
                        <select>
                          <option selected>hrs</option>
                          <option>30 mins</option>
                          <option>1 hr</option>
                          <option>2 hrs</option>
                        </select>
                      </span>
                    </p>
                  </div>
                  <button className="button is-small is-outlined is-info is-pulled-right"
                    // onClick={() =>
                    //   props.addToCart({
                    //     id: item.name,
                    //     item,
                    //     amount: 1
                    //   })
                    // }
                    onClick={addToRenting}> Rent Now </button>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>

  );
}
