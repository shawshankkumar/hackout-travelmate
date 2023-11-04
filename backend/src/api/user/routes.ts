import { FastifyPluginAsync } from "fastify";
import { handleUserFetch, handleUserProfileFetch, handleUserSessionFetch } from "@/api/user/controller";
import { authMiddleware } from "@/utils/middlewares/tokenVerify";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/me", { preHandler: [authMiddleware] }, handleUserFetch);
  server.get("/:username", handleUserProfileFetch);
  server.get("/:username/:sessionId", handleUserSessionFetch);
};

export default plugin;