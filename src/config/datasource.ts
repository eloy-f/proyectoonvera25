import { DataSource } from "typeorm";
import { Usuario } from "../entities/usuario";
import { Categoria } from "../entities/categoria";
import { Pelicula } from "../entities/pelicula";

console.log('AppDataSource',{
    type:'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME})


 const AppDataSource = new DataSource({
    type:'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME,
    entities:[
        Usuario,Categoria,Pelicula
    ]
});

export default AppDataSource;

