import { FastifyPluginAsync } from "fastify";
import { handleUserFetch, handleUserProfileFetch, handleUserSessionFetch, handleBookingConfirm } from "@/api/user/controller";
import { authMiddleware } from "@/utils/middlewares/tokenVerify";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/me", { preHandler: [authMiddleware] }, handleUserFetch);
  server.get("/:username", handleUserProfileFetch);
  server.get("/:username/:sessionId", handleUserSessionFetch);
  server.post("/booking/confirm", { preHandler: [authMiddleware] }, handleBookingConfirm);
};

export default plugin;