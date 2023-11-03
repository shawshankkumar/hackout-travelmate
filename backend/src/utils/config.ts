import { config } from "dotenv";
import { parseEnv } from "znv";
import { z } from "zod";
config();

const { MONGO_URI, PORT } =
  parseEnv(process.env, {
    PORT: z.number().int().positive().default(8080),
    MONGO_URI: z.string(),
  });

export default {
  PORT,
  API_PREFIX: "/api/v1",
  MONGO_URI,
};
