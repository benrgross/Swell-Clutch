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
  SET_USER,
  DISPLAYSPOT,
  SELECTED_SPOT,
  SIGNED_URL,
  IMAGE_KEY,
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
        spotId: action.swellObject.spotId,
        spotName: action.swellObject.spotName,
        currentTide: action.swellObject.currentTide,
        swells: action.swellObject.swells,
        surf: action.swellObject.surf,
        currentWind: action.swellObject.currentWind,
      };
    case SEARCHSPOT:
      return {
        ...state,
        searchSpots: action.spots,
      };
    case SET_USER: {
      return {
        ...state,
        user: action.email,
      };
    }
    case SELECTED_SPOT: {
      return {
        ...state,
        displaySpot: false,
        selectedSpot: action.spot,
      };
    }
    case SIGNED_URL: {
      return {
        ...state,
        signedURl: action.signedURl,
      };
    }
    case IMAGE_KEY: {
      return {
        ...state,
        imageKey: action.key,
      };
    }

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
    spotId: "",
    spotName: "",
    swell: {
      swell_current: {
        wind: "",
        primarySwell: "",
        secondarySwell: "",
      },
    },
    currentTide: {
      height: 0,
      status: "null",
    },
    surf: {
      min: 0,
      max: 0,
      optimalScore: 0,
    },
    currentWind: {
      timeStamp: 0,
      speed: 0,
      direction: 0,
      gust: 0,
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
    email: "",
    displaySpot: true,
    selectedSpot: "",
    imageKey: "",
    signedURl: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
