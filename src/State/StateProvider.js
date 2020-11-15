import React, { createContext, useContext, useReducer } from "react";

//Prepares the data state
export const StateContext = createContext();

//Higher Order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull state
export const useStateValue = () => useContext(StateContext);
