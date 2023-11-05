import { config } from "dotenv";
import { parseEnv } from "znv";
import { z } from "zod";
config();

const {
  MONGO_URI,
  PORT,
  G_CLIENT_ID,
  G_REDIRECT_URI,
  G_CLIENT_SECRET,
  MAIL_KEY,
} = parseEnv(process.env, {
  PORT: z.number().int().positive().default(8080),
  MONGO_URI: z.string(),
  G_CLIENT_ID: z.string(),
  G_CLIENT_SECRET: z.string(),
  G_REDIRECT_URI: z.string(),
  MAIL_KEY: z.string(),
});

export default {
  PORT,
  API_PREFIX: "/api/v1",
  MONGO_URI,
  G_CLIENT_ID,
  G_CLIENT_SECRET,
  G_REDIRECT_URI,
  MAIL_KEY,
};
