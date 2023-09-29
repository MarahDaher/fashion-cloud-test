import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import DBConnector from "./db-connector";
import Config from "./config";
import ApiRoutes from "./routes/ApiRoutes";

const app = express();
app.use(cors());

// connect to database
const connectDatabases = async () => {
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

const errorMiddleware = () => {
  app.use(errorMiddleware);
};

// connect to api routes
app.use("/api", ApiRoutes);

async function start() {
  await connectDatabases();
  await addBodyParser();
  await listenPort(Config.SERVICE_PORT);
  await errorMiddleware();
}

export default {
  start,
};
