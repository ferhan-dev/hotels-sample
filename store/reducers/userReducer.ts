import { AnyAction } from 'redux';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_ME,
  GET_ME_FAIL,
  GET_ME_SUCCESS,
} from '../actions/actionTypes';
import { http } from 'src/services/api/http';

const initialState: any = {
  login: null,
  status: {
    loading: false,
    success: false,
    error: null,
  }
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: null,
        status: {
          loading: true,
          success: false,
          error: null
        }
      };
    }
    case LOGIN_SUCCESS: {
      const accessToken = action.payload.access_token;
      localStorage.setItem("token", accessToken);
      http.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      return {
        ...state,
        login: action.payload,
        status: {
          loading: false,
          success: true,
          error: null
        }
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        status: {
          login: null,
          loading: false,
          success: false,
          error: action.payload
        }
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      
      return {
        ...state,
        login: null,
        status: {
          loading: false,
          success: true,
          error: null
        }
      };
    }
    case GET_ME: {
      return state;
    }
    case GET_ME_SUCCESS: {
      const user = action.payload;

      return {
        ...state,
        login: {
          ...state.login,
          user
        }
      };
    }
    case GET_ME_FAIL: {
      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
