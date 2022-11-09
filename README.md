<p align="center">
<img src="./public/logo.png" alt="preview" width="100" >
</p>

<h1>
<p align="center">
  Imágenes del mundo - Alegra
</p>
</h1>

<p align="center">
<img src="./docs/preview-1.png" alt="preview" width="230" />
<img src="./docs/preview-2.png" alt="preview" width="220" />
</p>

[Ver demo](https://frontend-alegra-challenge.netlify.app)

## Descripción 🚀

Para llevar a cabo este proyecto se realizó bocetos y la identificación del flujo más optimo que debe realizar el usuario mediante distintos recursos como Medium, Dev.To, Pinteret, Dribbble.

Con respecto a la arquitectura de la aplicación, se optó por un modelo basado en _features_ ya que permite separar la estructura en distintas capas y funcionalidades de acuerdo a lo que se requiere permitiendo escalarse con mayor facilidad y en caso de subdivir aplicaciones solo sería necesario desacoplar cierta parte de si misma.

La estructura de la aplicación es la siguiente:

```
├───app
├───config
├───router
├───mocks
├───core
│   └───i18n
│   ├───models
│   ├───services
│   ├───lib
│   └───styles
├───features
│   ├───application
│   ├───invoiceCreated
│   ├───newInvoice
│   ├───searchImages
│   │   ├───composables
│   │   ├───components
│   │   ├───sections
│   │   ├───store
│   │   └───utils.ts
│   │   └───types.ts
│   │   └───constants.ts
│   │   └───SearchImages.vue
├───shared
│   ├───components
│   │   ├───ui
│   │   ├───product
│   │   ├───seller
│   ├───composables
│   ├───constants
│   ├───types
│   └───utils
```

## Pre-requisitos 📋

Para comenzar el programa, es necesario tener instalado Node>=14.

- [Node](https://nodejs.org/en/download/)

## Tecnologías 🛠️

Las principales tecnologías usadas para la implementación del proyecto son las siguientes:

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

- Framework: **Vue 3**
- Estilos: **TailwindCSS, Sass**
- Fechas: **DayJs**
- State management: **Pinia**
- Lenguage principal: **Typescript**
- Llamadas API: **Axios**
- Calidad de código en desarrollo: **Prettier, Eslint, Husky, Commitlint**

## Uso ⚙️

Los siguientes comandos han de ser ejecutados dentro de la carpeta del proyecto.

**Uso con npm**

Antes de poder usar el proyecto es necesario instalar las dependencias.

```console
$ npm install
```

Para poder ver el funcionamiento en desarrollo ejecutar el siguiente comando.

```console
$ npm run dev
```

Finalmente para poder construir la aplicación utilize el siguiente comando que creará una carpeta **build** done estará todo el código listo para producción.

```console
$ npm run build
```

## Consideraciones 🙌

- Los sistemas de API cuentan con un sistema que captura datos que son falsos por motivos de prueba y ciertas restricciones al integrar el API.
- La arquitectura de la aplicación esta basada en un modelo escalable que permite la incorporación de nuevas funcionalidades y manteniblidad en el futuro.
- Las variables de entorno fueron subidas al repositorio en caso de querer realizarse las pruebas de manera local.
- Correo y contraseña de la cuenta de Alegra:
  - **jhonyvega.dev@gmail.com**
  - **jhonyvegadev**

## Funcionalidades desarrolladas 💻

- [x] Poder buscar imagenes y mostrarlas en conjunto con los vendedores.
- [x] Poder dar like a las fotografias de cada vendedor.
- [x] Deshabilitar la opción para seleccionar las imagenes una vez alguien obtiene el puntaje de **20**.
- [x] Mostrar detalle del puntaje total y por cada vendedor.
- [x] Permitir crear una nueva factura por el vendedor ganador.
- [x] Asociar un cliente y seleccionar productos.
- [x] Mostrar factura creada.
