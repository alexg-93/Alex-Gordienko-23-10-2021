import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  locationsReducer,
  currentLocationReducer,
  forecastReducer
} from "../redux/reducers/weatherReducer.js";

import {
  favoritesReducer
} from "../redux/reducers/favoritesReducer";


const reducer = combineReducers({
  locationsReducer,
  currentLocationReducer,
  forecastReducer,
  favoritesReducer,
});




const favoritesLocations = localStorage.getItem("favoritesLocations")
  ? JSON.parse(localStorage.getItem("favoritesLocations"))
  : [];

const initialState = {
   favoritesLocations:favoritesLocations
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
