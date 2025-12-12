import AppDataSource from "../config/datasource"
import { Categoria } from "../entities/categoria"

const repository = AppDataSource.getRepository(Categoria);

export const listarCategoriaVigente = async () => {
    return repository.find({
        where: {
            estado: 'A'
        }
    });
}