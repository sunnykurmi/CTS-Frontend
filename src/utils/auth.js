// utils/auth.js
export const getBearerToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };
  