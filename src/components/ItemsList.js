import React from 'react'
import Item from './Item'
/**
 * Act as main homepage of the app
 * Displaying all listed items (availabe and on renting)
 */

export default function ItemsList(props) {
  const {items} = props;
  // const items = [
  //   {id: 1, title:"shoe", description:"shoe is for renting",isRenting:false, image:"https://i.redd.it/1pmsjnk8f1g01.jpg"},
  //   {id: 2, title:"book", description:"book is for renting", isRenting:false, image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60"},
  //   {id: 3, title:"bottle", description:"bottle is for renting", isRenting:true, image:"https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600"},
  //   {id: 4, title:"table", description:"table is for renting", isRenting:false, image:"http://www.dumpaday.com/wp-content/uploads/2020/06/00-57-750x280.jpg"}
  // ];
  return (
    <div className='section'>
      <div className='title is-4'>Items Listing</div>
        <div className="column columns is-multiline">
          {items && items.length ? (
            items.map((item) => (
              <Item
                key={item.id}
                {...item}
                // addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No items found!
              </span>
            </div>
          )}
        </div>
    </div>

  );
}

