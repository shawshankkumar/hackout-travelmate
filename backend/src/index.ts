import Fastify from "fastify";
import fastifySensible from "@fastify/sensible";
import fastifyAutoload from "@fastify/autoload";
import path from "path";
import fastifyCors from "@fastify/cors";
import config from "@/utils/config";
import DB from "@/loaders/mongo";

const __dirname = path.dirname(__filename);

declare module "fastify" {
  interface FastifyReply {
    locals: Record<string, unknown>;
  }
}

const server = Fastify({
  bodyLimit: 30 * 1024 * 1024,
  logger: true,
});

export const logger = server.log; 

server.register(fastifySensible);
server.register(fastifyCors);
server.register(fastifyAutoload, {
  dir: path.join(__dirname, "api"),
  options: { prefix: config.API_PREFIX },
  maxDepth: 3,
  indexPattern: /.*routes(\.ts|\.js|\.cjs|\.mjs)$/,
});

server.get("/healthcheck", async (request, reply) => {
  reply.status(200).send({
    message: "OK",
    uptime: process.uptime(),
    currentTime: new Date().toISOString(),
  });
});

server.addHook("onReady", () =>
  console.log(server.printRoutes({ commonPrefix: false }))
);

server.decorateReply('locals', { user: null })

server.addHook('preHandler', function (req, reply, done) {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body')
  }
  done()
})

server.setErrorHandler(function (error, request, reply) {
  this.log.error(error);
  reply
    .status((error as any).status_code ?? 500)
    .send({ status: false, message: error.message ?? "Internal Server Error" });
});

const start = async () => {
  try {
    await server.listen({ port: config.PORT, host: "0.0.0.0" });
    await DB();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();