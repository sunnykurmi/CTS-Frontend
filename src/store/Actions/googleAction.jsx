import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import Cookies from "js-cookie";
import { asynccurrentUser } from "./userActions";


export const googleAuth = ()=> async (dispatch)=>{
    try {
      const data = await axios.get(`/api/v1/auth/google`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }