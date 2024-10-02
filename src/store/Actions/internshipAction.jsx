import axios from "../../utils/axios";

export const SubmitInternship = (formData) => async (dispatch) => {
  try {
    await axios.post("/api/v1/internship/apply", formData);
    return true;
  } catch (error) {
    const error2 = error.response.data.message;
    alert(error2);
    return false;
  }
};