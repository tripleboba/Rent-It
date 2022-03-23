/**
 * Handle when user click 'rent now' button on the item
 * Push/Remove the item into on-renting page with Context API
 */
export const initialState = {
  rentingBasket: [],
};

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
        rentingBasket: [...state.rentingBasket, action.e]
      };
    default:
      return state;
  }
};
export default reducer;

