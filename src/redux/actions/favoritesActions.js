import {
  ADD_FAVORITES_REQUEST,
  ADD_FAVORITES_SUCCESS,
  ADD_FAVORITES_FAIL,
  ADD_FAVORITES_RESET,
  REMOVE_FAVORITES_REQUEST,
  REMOVE_FAVORITES_SUCCESS,
  REMOVE_FAVORITES_FAIL,
} from "../constants/types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastBody } from "react-bootstrap";


export const addFavoriteLocation = () => async (dispatch, getState) => {
 
  dispatch({ type: ADD_FAVORITES_REQUEST });

  const currentLocation = getState().currentLocationReducer;
  const { localizedName, key ,location} = currentLocation;

  const favoritesLocations = getState().favoritesReducer.favoritesLocations;

  try {
    if (favoritesLocations && favoritesLocations.length > 0) {
      //returns object if finds object in favorite locations state
      const existItem = favoritesLocations.find(
        (x) => x.key === key && x.localizedName === localizedName
      );

      if (!existItem) {
        toast.success(`${localizedName} Added to favorites!`)
        dispatch({
          type: ADD_FAVORITES_SUCCESS,
          payload: {
            key: key,
            localizedName: localizedName,
            location:location,
           
          },
        });
        localStorage.setItem(
          "favoritesLocations",
          JSON.stringify(getState().favoritesReducer.favoritesLocations)
        );
      } else {
       toast.error(`${localizedName} already in favorites!`)
        dispatch({
          type: ADD_FAVORITES_FAIL,
          payload: "This location already in favorites!",
          
        });
      }
    }else{
      toast.success(`${localizedName} Added to favorites!`)
      dispatch({
        type: ADD_FAVORITES_SUCCESS,
        payload: {
          key: key,
          localizedName: localizedName,
          location:location,
         
        },
      });
      localStorage.setItem(
        "favoritesLocations",
        JSON.stringify(getState().favoritesReducer.favoritesLocations)
      );
    }
  } catch (error) {
    dispatch({
      type: ADD_FAVORITES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
     
    });
  }
};

export const removeFavoriteLocation = (locationKey,localizedName) => async (dispatch, getState) => {
  toast.success(`${localizedName} Removed from favorites!`)
  dispatch({
    type:REMOVE_FAVORITES_SUCCESS,
    payload:locationKey
})
localStorage.setItem(
  "favoritesLocations",
  JSON.stringify(getState().favoritesReducer.favoritesLocations)
);
}
