import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const { data } = await axios.post("/api/v1/user/user");
    dispatch(saveUser(data.user));
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    await axios.post("/api/v1/user/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signuperror(error.response.data.message));
    dispatch(setLoading(false)); // Reset loading on error
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    await axios.post("/api/v1/user/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false)); // Reset loading on error
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    await axios.post("/signout");
    dispatch(removeUser());
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
  }
};