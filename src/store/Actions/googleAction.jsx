// googleAction.jsx
import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import { asynccurrentUser } from "./userActions";

export const googleAuth = (code) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(`/api/v1/auth/google?code=${code}`);
    
    // Store token from Google auth
    if (data.token) {
      localStorage.setItem("token", data.token);
      
      // Get user data with token
      await dispatch(asynccurrentUser());
    } else {
      throw new Error("No token received from Google auth");
    }
    
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(signinerror(error.response?.data?.message || "Google authentication failed"));
    dispatch(setLoading(false));
  }
};