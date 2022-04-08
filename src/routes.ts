import express from "express";
import * as UsuariosController from "./controllers/UsuariosController";
import usuarioFormulario from "./validation/usuarioFormulario";

const routes = express.Router();

routes.post("/usuarios", usuarioFormulario, UsuariosController.adiciona);
routes.put("/usuarios/:id", usuarioFormulario, UsuariosController.editar);
routes.get("/usuarios/:id", UsuariosController.get);

export default routes;
