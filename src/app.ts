import 'dotenv/config'
import express, { Application, json } from "express";
import categoriaVigenteRoute from './routes/categoria.route';
import peliculaRoute from './routes/pelicula.route';
import usuarioRoute from './routes/usuario.route';

const app: Application = express();

app.use(json());
app.use('/api/v1/usuarios', usuarioRoute);
//app.use('/api/v1/categoria', categoriaVigenteRoute);
//app.use('/api/v1/pelicula', peliculaRoute);


export default app;