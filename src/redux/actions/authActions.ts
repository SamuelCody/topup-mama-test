import axios from "axios";
import { toast } from "react-toastify";
import {
  AUTHENTICATED,
  ERROR,
  LOADING,
  SET_ALL_USERS_DATA,
  SET_CURRENT_USER_DATA,
  SET_EDIT_USER_DATA,
} from "../reducers/types";
import { saveToken } from "../token";
import ls from "localstorage-slim";
import headers from "./header";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const timer: any = ls.get("timer");
const t: any = ls.get("t");

axios.interceptors.request.use((config: any) => {
  console.log(timer - Date.now());
  if (timer - Date.now() < 20000) {
    ls.set("timer", Date.now() + 600000);
    ls.set("t", t, { ttl: 600 });
  }
  const token = ls.get("t");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const registerUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.post(`${apiBaseUrl}/register`, data);
    dispatch({ type: LOADING, payload: null });
    toast.success("Registeration successful. You can now login.");
    ls.set("id", response.data.id);
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};

export const loginUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, data);
    dispatch({ type: LOADING, payload: null });
    saveToken(response.data.token);
    ls.set("timer", Date.now() + 600000);
    dispatch({ type: AUTHENTICATED, payload: true });
    toast.success("Login successful");
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};

export const getUser = (id: string) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.get(`${apiBaseUrl}/users/${id}`, headers());
    dispatch({ type: LOADING, payload: null });
    dispatch({ type: SET_CURRENT_USER_DATA, payload: response.data });
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};

export const editUser = (id: string, data: any) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.put(
      `${apiBaseUrl}/users/${id}`,
      data,
      headers()
    );
    dispatch({ type: LOADING, payload: null });
    dispatch({ type: SET_EDIT_USER_DATA, payload: response.data });
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};

export const getAllUsers = (pageNo?: string) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.get(
      `${apiBaseUrl}/users?page=${pageNo || 1}`,
      headers()
    );
    dispatch({ type: LOADING, payload: null });
    dispatch({ type: SET_ALL_USERS_DATA, payload: response.data });
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};

export const deleteUser = (id?: string) => async (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: ERROR, payload: null });
  try {
    const response = await axios.delete(`${apiBaseUrl}/users/${id}`, headers());
    dispatch({ type: LOADING, payload: null });
    dispatch(getAllUsers());
    toast.success("user deleted successfully");
    return response.data;
  } catch (err: any) {
    dispatch({ type: LOADING, payload: null });
    toast.error(`${err.response?.data?.error}`);
  }
};
