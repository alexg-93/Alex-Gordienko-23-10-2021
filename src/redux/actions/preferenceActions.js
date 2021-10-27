
import {PREFERENCE,PREFERENCE_FAIL} from '../constants/types'

export const preference = (isMetric=true,selectedTheme='light') => async (dispatch,getState) =>{
    
    try {

        dispatch({
              type:PREFERENCE,
              metric:isMetric,
              theme: selectedTheme
            });
           
   }
   catch (error) {
      dispatch({
          type:PREFERENCE_FAIL,
          payload: error.message
      })
      
  } 
  
  }