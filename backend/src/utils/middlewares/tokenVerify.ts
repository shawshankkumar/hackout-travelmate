import { getUserDataFromGoogle } from "@/utils/auth/google-auth";
import DB from "@/loaders/mongo";

export const authMiddleware = async (request, reply) => {
  const authHeader = request.headers.authorization;
  const user = await getUserDataFromGoogle(authHeader);
  const userData = await (await DB())
    .collection("users")
    .findOne({ email: user.email });
  reply.locals.user = userData;
};