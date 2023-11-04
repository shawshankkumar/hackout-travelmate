import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const getSignInData = async (
  token: string,
) => {
  try {
    const res = await apiInstance.get(
      "/auth", {
        headers: {
          'x-auth-token': token,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async (token: string) => {
  try {
    const res = await apiInstance.get(
      "/user/me", {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
