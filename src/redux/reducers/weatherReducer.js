import {
  AUTOCOMPLETE_LOCATIONS_REQUEST,
  AUTOCOMPLETE_LOCATIONS_SUCCESS,
  AUTOCOMPLETE_LOCATIONS_FAIL,
  CURRENT_LOCATION_REQUEST,
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_FAIL,
  FORECAST_LOCATION_REQUEST,
  FORECAST_LOCATION_SUCCESS,
  FORECAST_LOCATION_FAIL,
} from "../constants/types";

//AutoComplete locations
export const locationsReducer = (
  state = { locations: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case AUTOCOMPLETE_LOCATIONS_REQUEST:
      return {
        loading: true,
        locations: [],
        error: null,
      };
    case AUTOCOMPLETE_LOCATIONS_SUCCESS:
      return {
        loading: false,
        locations: action.payload,
      };

    case AUTOCOMPLETE_LOCATIONS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const currentLocationReducer = (
  state = {
    location: {},
    localizedName: "",
    key: null,
    loading: true,
    error: null,
 
  },
  action
) => {
  switch (action.type) {
    case CURRENT_LOCATION_REQUEST:
      return {
        loading: true,
        location: {},
        localizedName: "",
        key: null,
        error: null,
       
      };
    case CURRENT_LOCATION_SUCCESS:
      return {
        loading: false,
        location: action.payload[0],
        localizedName: action.localizedName,
        key: action.key,
       
       
      };

    case CURRENT_LOCATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const forecastReducer = (
  state = { forecast: [], key: null, loading: true, error: null },
  action
) => {
  switch (action.type) {
    case FORECAST_LOCATION_REQUEST:
      return {
        loading: true,
        forecast: [],
        key: null,
        error: null,
      };
    case FORECAST_LOCATION_SUCCESS:
      return {
        loading: false,
        forecast: action.payload,
        key: action.key,
        metric: action.metric,
      };

    case FORECAST_LOCATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
