import axios from "axios"

export const handleAuthRedirect = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/getRedirect`);
  window.location = data;
}