import React, { useReducer, createContext, useContext } from "react";
const StoreContext = createContext();
const { Provider } = StoreContext;
import { LOCATION_STATUS, SET_LOCATION, REGION } from "../utils/Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: {
          lat: action.lat,
          lon: action.lon,
        },
      };
    case LOCATION_STATUS:
      return {
        ...state,
        locationStatus: action.status,
      };
    case REGION:
      return {
        ...state,
        region: action.region,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    location: {
      lon: 0,
      lat: 0,
    },
    locationStatus: "",
    timeStamp: "",
    current_swell: {},
    swells: [],
    region: "select",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
