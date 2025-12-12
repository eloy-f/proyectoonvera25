import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as peliculaService from '../services/pelicula.service';

export const listarPeliculaVigente = async (req: Request, res: Response) => {
    try {
       const pelicula = await peliculaService.listarPeliculaVigente();
        res.json(BaseResponse.success(pelicula));
    } catch (error) {
        console.error('listarPeliculaVigente:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}