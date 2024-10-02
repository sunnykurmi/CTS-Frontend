import axios from "../../utils/axios";

export const AllPortfolio = () => async (dispatch) => {
  try {
     const response  = await axios.post("/api/v1/user/allportfolio");
      return (response.data.portfolio);
  } catch (error) {
    console.log(error);
  }
};

