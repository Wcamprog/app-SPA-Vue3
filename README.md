# 📘 SPA Vue 3 con Vuetify

Este proyecto es una aplicación SPA desarrollada con Vue 3 y Vuetify. Muestra un listado de usuarios obtenidos desde una API pública y permite ver detalles de cada uno a través de un componente modal reutilizable. También incluye servicios globales para carga (`loading`) y alertas (`alerts`).

---

## 💿 Instalación

### Requisitos
- Node.js 18+
- Gestor de paquetes: `npm` (recomendado)

- Documentación de Vuetify

- 📄 [Docs](https://vuetifyjs.com/)
- 🚨 [Issues](https://issues.vuetifyjs.com/)
- 🏬 [Store](https://store.vuetifyjs.com/)
- 🎮 [Playground](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💿 Install

- Pasos para la instalación:
1. Clonar el repositorio a través de HTTPS: https://github.com/Wcamprog/app-SPA-Vue3.git
    - git clone https://github.com/Wcamprog/app-SPA-Vue3.git
    - cd app-SPA-Vue3
2. Instalar las dependencias para el proyecto, usando el paquete de preferencia a través de la terminal con el comando respectivo (usar npm install de preferencia)
    - npm install

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

 -Después de completada la instalación el ambiente ya está listo.

3. Iniciar el proyecto.
    - npm run dev



Vue 3 con Composition API: 

    - Se eligió Composition API por su flexibilidad y mejor organización al separar lógica de presentación. Esto facilita la reutilización y escalabilidad del código.

Servicios globales (useLoading, useAlert): 

    - Se implementaron servicios para mostrar un overlay de carga y alertas desde cualquier componente, promoviendo la centralización de la lógica y mejor experiencia de usuario.

Componentes reutilizables (UserModal, SearchBar): 

    - Se crearon componentes independientes para mantener el código limpio, modular y fácil de mantener.

Gestión de errores con feedback visual: 

    - Las llamadas a la API están envueltas en try/catch, y los errores se comunican al usuario mediante alertas visuales, mejorando la comunicación en la interfaz.

Consumo de API externa (JSONPlaceholder): 

    - Se trabajó con una API pública para simular un flujo real de datos, estructurando las funciones de manera que sea fácil migrar a una API real en producción.    


