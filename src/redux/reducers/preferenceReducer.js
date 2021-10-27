import {PREFERENCE,PREFERENCE_FAIL} from '../constants/types'

export const preferenceReducer = (
    state = {isMetric : true,theme:'light'},
    action
  ) => {
    switch (action.type) {
    
      case PREFERENCE:
        return {
         ...state,
          isMetric: action.metric,
          theme:action.theme

        };
  
      case PREFERENCE_FAIL:
        return {error: action.payload };
  
      default:
        return state;
    }
  };
  