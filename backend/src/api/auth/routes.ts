import { FastifyPluginAsync } from "fastify";
import { handleGoogleAuth } from "@/api/auth/controller";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/:token", handleGoogleAuth);
};

export default plugin;