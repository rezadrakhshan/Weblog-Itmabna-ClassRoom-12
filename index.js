import e from "express";
import config from "config";
import ConnectToDb from "./src/start/db.js";
import configurationMiddleware from "./src/start/config.js";
import router from "./src/router/index.js";

const app = e();
const port = config.get("port");

configurationMiddleware(app);
ConnectToDb();

app.use("/api", router);

app.listen(port, () => console.log(`app runnings on port ${port}`));
