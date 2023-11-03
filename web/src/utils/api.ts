import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const getSignInData = async (
  token: string,
) => {
  try {
    const res = await apiInstance.get(
      `/auth/${encodeURIComponent(token)}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
