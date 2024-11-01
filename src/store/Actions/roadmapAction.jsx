import axios from "../../utils/axios";
import { createroadmap, setLoading } from "../Reducers/roadmapSlice";

export const CreateRoadmap = (formData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    
    const token = localStorage.getItem('token');
    const response = await axios.post("/api/v1/roadmap", formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.success) {
      dispatch(createroadmap(response.data));
    }
    dispatch(setLoading(false));
  } catch (error) {
    console.error('Roadmap creation error:', error);
    dispatch(setLoading(false));
  }
};