import express, { Request, Response } from "express";
import path from "path";
import sequelize from "./models/database";

const app = express();
const port = 3000; // default port to listen

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

// define a route handler for the default home page
app.get("/", async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    // tslint:disable-next-line: no-console
    console.log("\x1b[32mConnection has been established successfully.\x1b[0m");
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error("\x1b[31mUnable to connect to the database:\x1b[0m", error);
  }
  res.render("cabecalho.html.twig");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`server started at \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
