"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./models/database"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000; // default port to listen
app.use(body_parser_1.default.json());
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "twig");
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "static")));
// define a route handler for the default home page
app.get("/", async (req, res) => {
    try {
        await database_1.default.authenticate();
        // tslint:disable-next-line: no-console
        console.log("\x1b[32mConnection has been established successfully.\x1b[0m");
    }
    catch (error) {
        // tslint:disable-next-line: no-console
        console.error("\x1b[31mUnable to connect to the database:\x1b[0m", error);
    }
    res.render("cabecalho.html.twig");
});
app.use("/", routes_1.default);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
//# sourceMappingURL=index.js.map