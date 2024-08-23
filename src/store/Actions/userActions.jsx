import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  sendmail,
  signuperror,
  signinerror,
} from "../Reducers/userSlice";



////////////fetch loggedin user /////////////

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const  {data}  = await axios.post("/user/user");
    dispatch(saveUser(data.user));
  } catch (error) {
    console.log(error);
    //(error.response.data);
  }
};


////////////signup user /////////////

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    console.log("object");
    await axios.post("/user/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error);
    // dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

////////////signin user /////////////


export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/user/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    // dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
    console.log(error);
  }
};

////////////logout user /////////////


export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.post("/signout");
    dispatch(removeUser());
  } catch (error) {
    //(error.response.data);
  }
};
