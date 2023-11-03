import { Db, MongoClient } from "mongodb";
import config from "@/utils/config";
import { logger } from "@/index";

let db: Db;

async function initializeClient(): Promise<Db> {
  const client = await MongoClient.connect(config.MONGO_URI);
  logger.info("DB connected");
  return client.db();
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};