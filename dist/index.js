"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000; // default port to listen
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "twig");
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.render("cabecalho.html.twig");
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
//# sourceMappingURL=index.js.map