import axios from "axios";
import { API_KEY } from "../config";

import {
AUTOCOMPLETE_LOCATIONS_REQUEST,
AUTOCOMPLETE_LOCATIONS_SUCCESS ,
AUTOCOMPLETE_LOCATIONS_FAIL ,

CURRENT_LOCATION_REQUEST,
CURRENT_LOCATION_SUCCESS ,
CURRENT_LOCATION_FAIL,

GEO_LOCATION_REQUEST ,
GEO_LOCATION_SUCCESS ,
GEO_LOCATION_FAIL ,

FORECAST_LOCATION_REQUEST,
FORECAST_LOCATION_SUCCESS ,
FORECAST_LOCATION_FAIL ,
} from '../constants/types'



export const getLocations = (keyword) => async (dispatch,getState) => {
    
    try {
        dispatch({type: AUTOCOMPLETE_LOCATIONS_REQUEST})
   
          const { data } = await axios.get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${keyword}&language=en-us`
          );
         
          if(data){
          
            dispatch({
                type:AUTOCOMPLETE_LOCATIONS_SUCCESS,
                payload: data
              });
          }
           
     }
     catch (error) {
        dispatch({
            type:AUTOCOMPLETE_LOCATIONS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
  } 
}

export const getCurrentLocation = (locationKey='215854',localizedName='Tel Aviv') => async (dispatch, getState)=>{
  
    try {
        dispatch({type: CURRENT_LOCATION_REQUEST})
   
          const { data } = await axios.get(
            `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
          );
         
          if(data){
            
            dispatch({
                type:CURRENT_LOCATION_SUCCESS,
                payload: data,
                localizedName: localizedName,
                key:locationKey,
                
              });
          }
           
     }
     catch (error) {
        dispatch({
            type:CURRENT_LOCATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
  } 
}

export const getGeoLocation = (latitude, longitude) => async (dispatch,getState)=>{
 
  try {
    dispatch({type: GEO_LOCATION_REQUEST})

      const { data } = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}`
      );
     
      if(data){
        
        dispatch({
            type:GEO_LOCATION_SUCCESS,
            payload: data,
          });
      }
       
 }
 catch (error) {
    dispatch({
        type:GEO_LOCATION_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
    
} 
}

export const get5DayForecast = (locationKey,metric=true) => async (dispatch) =>{
 
  try {
    dispatch({type: FORECAST_LOCATION_REQUEST})

      const { data } = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${metric}`
      );
     
      if(data){
        
        dispatch({
            type:FORECAST_LOCATION_SUCCESS,
            payload: data,
            key:locationKey,
            metric: metric
          });
      }
       
 }
 catch (error) {
    dispatch({
        type:FORECAST_LOCATION_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
    
} 

}






  

