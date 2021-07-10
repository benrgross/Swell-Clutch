import React, { useReducer, createContext, useContext } from "react";
const StoreContext = createContext();
const { Provider } = StoreContext;
import {
  LOCATION_STATUS,
  SET_LOCATION,
  REGION,
  REGION2,
  REGION3,
  CURRENT_SWELL,
  SEARCHSPOT,
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
        tides: action.tides,
        swell: action.currentSwell,
      };
    case SEARCHSPOT:
      return {
        ...state,
        searchSpots: action.spots,
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
    searchSpots: [],
    locationStatus: "",
    timeStamp: "",
    swell: {
      swell_current: {
        wind: "",
        primarySwell: "",
        secondarySwell: "",
      },
    },

    tides: {
      low: {
        am_low_time: "",
        am_low_ft: "",
        pm_low_time: "",
        pm_low_ft: "",
      },
      high: {
        am_high_time: "",
        am_high_ft: "",
        pm_high_time: "",
        pm_high_ft: "",
      },
    },

    swells: [],
    show_current_swell: false,
    region: "select",
    region2: "select",
    region3: "select",
    currentTide: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
