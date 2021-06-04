import React, { useReducer, createContext, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case Location:
      return state;
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user,
    location,
    current_swell,
    swells: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

export { StoreProvider, useStoreContext };
