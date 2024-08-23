import axios from "../../utils/axios";
import { createroadmap, setLoading } from "../Reducers/roadmapSlice";

export const CreateRoadmap = (formData) => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Set loading to true before API call
    console.log(formData);
    const response = await axios.post("/roadmap", formData);
    if (response.data.success) {
      dispatch(createroadmap(response.data));
    }
    console.log(response);
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false)); // Set loading to false in case of error
  }
};