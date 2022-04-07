import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000; // default port to listen

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.render("cabecalho.html.twig");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`server started at \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
