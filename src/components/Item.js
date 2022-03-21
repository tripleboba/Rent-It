import React from 'react'
/**
 * Item's information
 * Act as each item's page
 */
export default function Item(props) {
  const {...item} = props;
  return (
    // <div>Item</div>
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={item.image} alt={item.title} />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}> {item.title}
              {/* <span className="tag is-primary"> $price </span> */}
            </b>
            <div>{item.description}</div>
            {item.isRenting ? (
              <small className="has-text-danger">Out Of Stock</small>
            ) : (
              <small>Available</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                // onClick={() =>
                //   props.addToCart({
                //     id: item.name,
                //     item,
                //     amount: 1
                //   })
                // }
              > Rent Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
