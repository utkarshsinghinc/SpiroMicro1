import {
  USER_DETAILS_BY_ID_FAIL,
  USER_DETAILS_BY_ID_REQUEST,
  USER_DETAILS_BY_ID_SUCCESS,
  UPDATE_CURRENT_LOCATION,
  UPDATE_LOCATION_SERVICE_STATUS,
} from "../constants/utils";

const initState = {
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_DETAILS_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UPDATE_LOCATION_SERVICE_STATUS:
      return {
        ...state,
        gpsStatus: action.payload,
      };
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
