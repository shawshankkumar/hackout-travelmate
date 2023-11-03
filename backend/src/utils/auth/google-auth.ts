import axios, { AxiosError } from "axios";
import DB from "@/loaders/mongo";
import slugify from "slugify";

export async function findUserProfileGoogle(accessToken: string) {
  try {
    const user = await getUserDataFromGoogle(accessToken);
    const userData = await (await DB())
      .collection("users")
      .findOne({ email: user.email });
    const username = slugify(user.email.split("@")[0], {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: true,
      strict: true,
      trim: true,
    });
    if (!userData) {
      await (await DB()).collection("users").insertOne({
        ...user,
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        username,
        socials: {
          twitter: "",
          instagram: "",
          facebook: "",
          youtube: "",
        },
        description: "",
        destinations: [],
        services: [],
      });
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      given_name: user.given_name,
      family_name: user.family_name,
      pictureUrl: user.picture,
      username,
    };
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      throw {
        status_code: err.response?.status,
        message: err.response?.data,
      };
    }
    throw {
      status_code: 401,
      message: "something went wrong with google authentication",
    };
  }
}

export const getUserDataFromGoogle = async (accessToken: string) => {
  const url = "https://www.googleapis.com/oauth2/v2/userinfo";
  const response = await axios({
    url,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
