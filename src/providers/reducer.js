import items from '../data/db';
/**
 * Handle when user click 'rent now' button on the item
 * Push/Remove the item into on-renting page with Context API
 * 
 * declare all the application level states
 */

export const initialState = {
  allItems: [...items],
  // selectedItem: {},
  rentingBasket: [],
  rentedBasket: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'UPDATE_ITEMS':
      return{
        ...state,
        allItems: [...action.items]
      };
      case 'ADD_TO_RENTING':
        return{
          ...state,
          rentingBasket: [...state.rentingBasket, action.item],
        };
    case 'UPDATE_RENTING':
      return{
        ...state,
        rentingBasket: [...action.items],
      }
    case 'REMOVE_FROM_RENTING':
      const index = state.rentingBasket.findIndex(
        (thisItem) => thisItem.id === action.id
      );
      let tempBasket = [...state.rentingBasket];
      // console.log('tempBasket for cancel renting from reducer.js', tempBasket);
      if (index >= 0) {
        tempBasket.splice(index, 1);
      }
      return {
        ...state,
        rentingBasket: tempBasket,
      };
    case 'ADD_TO_RENTED':
      return{
        ...state,
        rentedBasket: [...state.rentedBasket, action.item],
      };
      case 'UPDATE_RENTED':
        return{
          ...state,
          rentedBasket: [...action.items],
        }
    default:
      return state;
  }
};
export default reducer;

