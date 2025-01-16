# Social Media App

## Descripción
Esta es una red social minimalista construida como parte de un proyecto educativo. La aplicación permite a los usuarios registrarse, iniciar sesión, crear publicaciones, buscar perfiles o publicaciones, y realizar interacciones como dar likes y comentar.

## Características

- **Registro de usuarios**: Los usuarios pueden crear una cuenta.
- **Inicio de sesión**: Autenticación segura para los usuarios registrados.
- **Publicaciones**: Los usuarios pueden crear, visualizar y dar "like" a publicaciones.
- **Búsqueda**: Función de búsqueda de perfiles y publicaciones.
- **Perfil de usuario**: Visualización de datos y publicaciones personales.
- **Comentarios**: Los usuarios pueden comentar en publicaciones.

## Tecnologías utilizadas

- **Frontend**: React, Redux, React Router, SASS
- **Backend**: Node.js, Express (pendiente para integrar)
- **Base de datos**: MongoDB (pendiente para integrar)
- **Despliegue**: Vercel (frontend) y AWS o Heroku (backend)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/social-media-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd social-media-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación en modo de desarrollo:

   ```bash
   npm start
   ```

5. Abre tu navegador en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```plaintext

src/
├── components/       # Componentes reutilizables (Header, Footer, etc.)
├── pages/            # Páginas principales (LoginPage, RegisterPage, etc.)
├── assets/           # Recursos estáticos (imágenes, íconos, etc.)
├── App.jsx           # Configuración principal de la app
├── index.jsx         # Punto de entrada principal
├── styles/           # Estilos globales en SASS
└── redux/            # Configuración de Redux
```

## Scripts disponibles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta el linter para mantener la calidad del código.

## Uso de Git y Ramas

1. Crea una rama para cada nueva característica o bugfix:

   ```bash
   git checkout -b nombre-rama
   ```

2. Realiza commits claros y concisos:

   ```bash
   git commit -m "Descripción del cambio"
   ```

3. Cuando termines, haz merge a la rama `develop` y asegúrate de que esté probada antes de hacer merge a `main`.

## Despliegue

El frontend está desplegado en **Vercel**. Puedes acceder al proyecto en el siguiente enlace:

[https://social-media-app.vercel.app](https://social-media-app.vercel.app)

## Capturas de Pantalla

### Página de Inicio de Sesión
![Login Page](ruta-a-la-imagen)

### Página de Registro
![Register Page](ruta-a-la-imagen)

## Autores

- **Catalina Baquerizo** - 
- **Joan Martinez** - 

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

