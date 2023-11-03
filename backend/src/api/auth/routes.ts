import { FastifyPluginAsync } from "fastify";
import { handleGoogleAuth } from "@/api/auth/controller";

const plugin: FastifyPluginAsync = async (server) => {
  server.get("/", handleGoogleAuth);
};

export default plugin;