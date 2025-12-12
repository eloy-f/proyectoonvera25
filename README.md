API ONVERA
Esta es una API que permite gestionar usuarios, películas, categorías, favoritos y recuperación de contraseña.
El objetivo del proyecto es proporcionar un backend funcional para una aplicación de películas.

- Alcance del Proyecto

inicio de sesión de usuarios
Vista de gestión de películas y categorías

Base de datos con relaciones entre usuarios, películas y categorías
- Diagrama de Base de Datos

Tablas principales:

usuarios
peliculas
categorias
favoritos
recuperacion_contrasena

- Endpoints Principales
Autenticación

POST /api/register — Registrar usuario
POST /api/login — Iniciar sesión

Usuarios

GET /usuarios/:id - Obtener datos
PUT /usuarios/:id - Actualizar

Películas

GET /peliculas - Listar
POST /peliculas - Crear

Favoritos

GET /favoritos/:id_usuario - Listar
POST /favoritos - Agregar

- Cómo ejecutar el proyecto

Instalar dependencias:
npm install

Configurar archivo .env (BD)
Ejecutamos servidor:
npm run dev

- Tecnologías
Node.js
Express
Postgres
