import { RouteHandler } from "fastify";
import axios from "axios";
import { findUserProfileGoogle } from "@/utils/auth/google-auth";
import { AuthTokenParamType } from "@/api/auth/models";
import config from "@/utils/config";

export const handleGoogleAuth: RouteHandler<{ Params: AuthTokenParamType }> =
  async function (request, reply) {
    const { token } = request.params;
    const response = await axios({
      url: "https://oauth2.googleapis.com/token",
      method: "post",
      params: {
        code: token,
        client_id: config.G_CLIENT_ID,
        client_secret: config.G_CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: config.G_REDIRECT_URI,
      },
    });
    console.log(response.data.access_token)
    reply.status(200).send({
      auth_data: response.data,
      user_profile: await findUserProfileGoogle(response.data.access_token),
      message: "User authenticated successfully",
      status: true,
    });
  };