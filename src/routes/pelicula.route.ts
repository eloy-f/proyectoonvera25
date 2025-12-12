import {Router} from "express";
import { listarPeliculaVigente} from "../controllers/pelicula.controller";

const router: Router = Router();

//GET /---> listarPersonas
//POST /---> insertarPersonas
//GET /{idPersona} --->Obterner persona
//PUT /{idPersona} --->editar persona

router.get('/', listarPeliculaVigente) //llamamos la lista del controller

export default  router;