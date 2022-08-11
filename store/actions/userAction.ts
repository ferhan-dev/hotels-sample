import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_ME_SUCCESS,
  GET_ME_FAIL,
  GET_ME,
} from "src/store/actions/actionTypes";
import { loginUser, logoutUser, getMeService, socialLogin } from "src/services/api";
import { LoginUserBody } from "src/types";

export const loginAction = (payload: LoginUserBody) => {
  return (dispatch: any) => {
    dispatch({
      type: LOGIN
    });

    return loginUser(payload)
    .then(result => {
      dispatch({
        payload: result,
        type: LOGIN_SUCCESS
      });
    })
    .catch(ex => {
      let payload = null;
      const error = ex.response?.data;
      if (error) {
        payload = error.message;
      } else {
        payload = ex.message;
      }
      dispatch({
        payload,
        type: LOGIN_FAIL
      });
    });
  };
};

export const getMeAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_ME
    });

    getMeService()
      .then(result => {
        dispatch({
          payload: result,
          type: GET_ME_SUCCESS
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ME_FAIL
        });
      });
  };
};

export const logoutAction = () => {
  logoutUser();

  return {
    type: LOGOUT
  };
};

export const socialLoginAction = (payload: LoginUserBody) => {
  return (dispatch: any) => {
    dispatch({
      type: LOGIN,
    });

    return socialLogin(payload)
      .then((result) => {
        dispatch({
          payload: result,
          type: LOGIN_SUCCESS,
        });
      })
      .catch((ex) => {
        let payload = null;
        const error = ex.response?.data;
        if (error) {
          payload = error.message;
        } else {
          payload = ex.message;
        }
        dispatch({
          payload,
          type: LOGIN_FAIL,
        });
      });
  };
};
