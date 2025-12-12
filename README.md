API ONVERA

Esta es una API que permite gestionar usuarios, películas, categorías, favoritos y recuperación de contraseña.
El objetivo del proyecto es proporcionar un backend funcional para una aplicación de películas.

✅ Alcance del Proyecto

Registro e inicio de sesión de usuarios

Gestión de películas y categorías

Guardar y eliminar favoritos

Solicitud de recuperación de contraseña

Base de datos con relaciones entre usuarios, películas y categorías

🗄️ Diagrama de Base de Datos

(Coloca aquí la imagen del diagrama)

Tablas principales:

usuarios

peliculas

categorias

favoritos

recuperacion_contrasena

🔌 Endpoints Principales
Autenticación

POST /auth/register — Registrar usuario

POST /auth/login — Iniciar sesión

Usuarios

GET /usuarios/:id — Obtener datos

PUT /usuarios/:id — Actualizar

Películas

GET /peliculas — Listar

POST /peliculas — Crear

Favoritos

GET /favoritos/:id_usuario — Listar

POST /favoritos — Agregar

🚀 Cómo ejecutar el proyecto

Instalar dependencias:

npm install


Configurar archivo .env (BD y JWT)

Ejecutar servidor:

npm run dev

📚 Tecnologías

Node.js

Express

MySQL

JWT

Bcrypt