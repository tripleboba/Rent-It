import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Wrap the app and provide layer
export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    rentingBasket: state.rentingBasket,
    addToRenting: (item) => {
      console.log(item)
      dispatch({ type: "ADD_TO_RENTING", item });
    },

  }
  console.log({state, value});
  return(
  <StateContext.Provider value={value}>
    {children}
  </StateContext.Provider>
);
  }

// Pull data from the data layer
export const useStateValue = () => useContext(StateContext);