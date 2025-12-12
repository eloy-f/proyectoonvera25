import AppDataSource from "../config/datasource"
import { Pelicula } from "../entities/pelicula"

const repository = AppDataSource.getRepository(Pelicula);

export const listarPeliculaVigente = async () => {
    return repository.find({
        where: {
            estado: 'A'
        }
    });
}