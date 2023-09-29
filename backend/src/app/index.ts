import express from "express";
import * as bodyParser from "body-parser";

import DBConnector from "./db-connector";
import Config from "./config";

const app = express();

// connect to database
const connectDatabases = async () => {
  console.log("connect to", Config.MONGO_URL + Config.FASHION_CLOUD_DB);

  await DBConnector.connectMongo(Config.MONGO_URL + Config.FASHION_CLOUD_DB);
};

// connect middleware
const addBodyParser = async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

// listen to server
const listenPort = (PORT) => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
};

async function start() {
  await connectDatabases();
  await addBodyParser();
  await listenPort(Config.SERVICE_PORT);
}

export default {
  start,
};
