/**
 * Handle when user click 'rent now' button on the item
 * Push/Remove the item into on-renting page with Context API
 * 
 * declare all the application level states
 */

export const initialState = {
  rentingBasket: [],
};

// selector helper
export const getTotalRenting = rentingBasket => {
  rentingBasket?.reduce((amount, item) => item.cost + amount, 0);
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'ADD_TO_RENTING':
      return{
        ...state,
        rentingBasket: [...state.rentingBasket, action.item]
      };
    case 'REMOVE_FROM_RENTING': // correct implement later
      return {
        ...state, 
        rentingBasket: [...state.rentingBasket, action.item]
      };
    default:
      return state;
  }
};
export default reducer;

