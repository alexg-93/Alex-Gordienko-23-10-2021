import {
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITES_FAIL,
  ADD_FAVORITES_RESET,
  REMOVE_FAVORITES_REQUEST,
  REMOVE_FAVORITES_SUCCESS,
  REMOVE_FAVORITES_FAIL,
} from "../constants/types";

export const favoritesReducer = (
  state = {
    favoritesLocations:
      JSON.parse(localStorage.getItem("favoritesLocations")) || [],
    error: null,

  },
  action
) => {
  switch (action.type) {
    case ADD_FAVORITES_SUCCESS:
      const location = action.payload;
     
      return {
        error:null,
        favoritesLocations: [...state.favoritesLocations, location],
        
      };

    case ADD_FAVORITES_FAIL:
      return {...state, error: action.payload };
  
    case REMOVE_FAVORITES_SUCCESS:
        return { 
           ...state,favoritesLocations: state.favoritesLocations.filter(x=>x.key !== action.payload)
         };
    default:
      return state;
  }
};
