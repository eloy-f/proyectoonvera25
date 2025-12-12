import {Router} from "express";
import { listarCategoriaVigente } from "../controllers/categoria.controller";

const router: Router = Router();

//GET /---> listarPersonas
//POST /---> insertarPersonas
//GET /{idPersona} --->Obterner persona
//PUT /{idPersona} --->editar persona

router.get('/', listarCategoriaVigente) //llamamos la lista del controller

export default  router;