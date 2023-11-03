import { FastifyPluginAsync } from "fastify";
import { handleUserFetch, handleUserProfileFetch } from "@/api/user/controller";
import { authMiddleware } from "@/utils/middlewares/tokenVerify";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/me", { preHandler: [authMiddleware] }, handleUserFetch);
  server.get("/:username", handleUserProfileFetch);
};

export default plugin;