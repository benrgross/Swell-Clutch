import React, { useReducer, createContext, useContext } from "react";
const StoreContext = createContext();
const { Provider } = StoreContext;
import {
  LOCATION_STATUS,
  SET_LOCATION,
  REGION,
  REGION2,
  REGION3,
  SHOW_CURRENT_SWELL,
  CURRENT_SWELL,
} from "../utils/Actions";

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
    case REGION2:
      return {
        ...state,
        region2: action.region,
      };
    case REGION3:
      return {
        ...state,
        region3: action.region,
      };
    case REGION3:
      return {
        ...state,
        show_current_swell: action.show_swell,
      };
    case CURRENT_SWELL:
      return {
        ...state,
        current_swell: action.currentSwell,
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
    current_swell: [{}, {}],
    swells: [],
    show_current_swell: false,
    region: "select",
    region2: "select",
    region3: "select",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
