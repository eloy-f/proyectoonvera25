import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as listarCategoriaService from '../services/categoria.service';

export const listarCategoriaVigente = async (req: Request, res: Response) => {
    try {
       const categoria = await listarCategoriaService.listarCategoriaVigente();
        res.json(BaseResponse.success(categoria));
    } catch (error) {
        console.error('listarCategoriaVigente:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}