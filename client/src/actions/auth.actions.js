import httpClient from '../services/httpClient';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../state/auth.state';

export async function loginAction(username, password, dispatch) {
  dispatch({ type: LOGIN_START });
  try {
    const res = await httpClient.post('/auth/login', { username, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res.data.user, token: res.data.token },
    });
    return true; 
  } catch (err) {
    console.error("Login failed:", {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response?.data?.error || err.message,
    });
    return false; 
  }
}



export async function fetchUserInfoAction(dispatch) {
  dispatch({ type: LOGIN_START });
  try {
    const res = await httpClient.get('/auth/me');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res.data.user, token: localStorage.getItem('token') },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response?.data?.error || err.message,
    });
  }
}

export function logoutAction(dispatch) {
  dispatch({ type: LOGOUT });
}
