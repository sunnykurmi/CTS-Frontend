import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import {
  setUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import Cookies from "js-cookie";
import { asynccurrentUser } from "./userActions";


export const googleAuth = (code)=> async (dispatch)=>{
    try {
      dispatch(setLoading(true));
      await axios.get(`/api/v1/auth/google?code=${code}`);
      dispatch(asynccurrentUser());
    } catch (error) {
      dispatch(signinerror(error.response.data.message));
      dispatch(setLoading(false));
    }
  }