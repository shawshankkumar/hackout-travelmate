import {  RouteHandler } from "fastify";
import { FetchUserHeaderType } from "@/api/user/models";

//fix this any later pls
export const handleUserFetch: RouteHandler<{ Headers: FetchUserHeaderType}> =
  async function (request, reply) {
    reply.status(200).send({
      message: "User Data Fetched!",
      userData: (reply as any).locals.user,
      status: true,
    });
  };