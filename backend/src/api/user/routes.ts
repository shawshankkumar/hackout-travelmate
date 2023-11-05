import { FastifyPluginAsync } from "fastify";
import { handleUserFetch, handleUserProfileFetch, handleUserSessionFetch, handleBookingConfirm, handleDasboardFetch,handleAllUserFetch } from "@/api/user/controller";
import { authMiddleware } from "@/utils/middlewares/tokenVerify";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/me", { preHandler: [authMiddleware] }, handleUserFetch);
  server.post("/booking/confirm", { preHandler: [authMiddleware] }, handleBookingConfirm);
  server.get("/dashboard/:slug", { preHandler: [authMiddleware] }, handleDasboardFetch);
  server.post("/search/all/",  handleAllUserFetch);
  server.get("/:username", handleUserProfileFetch);
  server.get("/:username/:sessionId", handleUserSessionFetch);
};

export default plugin;