# HE-CHECK

## Entorno

![HE-CHECK Logo](images/logo.jpg)

---

**Proyecto:** HE-CHECK  
**Fecha:** 31/03/2026  
**Autor:** Alejandro Soult Toscano

---

## Índice

[1. Stack tecnológico - Aplicación](#1-stack-tecnológico---aplicación)  
[2. Stack tecnológico - Testing](#2-stack-tecnológico---testing)  
[3. Dependencias del proyecto](#3-dependencias-del-proyecto)  
[4. Variables de entorno](#4-variables-de-entorno)  
[5. Secrets de GitHub](#5-secrets-de-github)

---

## 1. Stack tecnológico - Aplicación

El desarrollo de HE-CHECK se basa en tecnologías modernas del ecosistema JavaScript, orientadas a la creación de aplicaciones web eficientes y mantenibles:

- **Lenguaje principal**: JavaScript

- **Frontend**:
  - **React**: Librería para la construcción de interfaces de usuario basadas en componentes
  - **Vite**: Herramienta de build rápida y ligera para desarrollo moderno
  - **React Router**: Gestión de navegación entre vistas (SPA)

- **Gestión de dependencias**
  - **npm**: Instalación, gestión y ejecución de scripts del proyecto

- **Arquitectura**
  - Aplicación SPA (Single Page Application)
  - Separación frontend/backend mediante API

- **Backend**
  - **Node.js** (Azure Functions)
  - Arquitectura serverless basada en eventos HTTP

## 2. Stack tecnológico - Testing

El stack tecnológico de testing combina herramientas para pruebas unitarias, de integración y end-to-end:

- **Testing unitario e integración (frontend)**
  - **Jest**: Framework principal de testing
  - **React Testing Library**: Testing centrado en el comportamiento del usuario
  - **jest-dom**: Extensiones para assertions en el DOM
  - **jsdom**: Simulación de entorno de navegador

- **Testing end-to-end**
  - **Cypress**: Simulación de interacción real de usuario en navegador

## 3. Dependencias del proyecto

Las dependencias del proyecto se dividen en dos grandes grupos:

- Dependencias de producción: Son necesarias para el funcionamiento de la aplicación en ejecución.
    - **Core de React**
        - `react`
        - `react-dom`

    - **Enrutamiento**
        - `react-router-dom`

- Dependencias de desarrollo: Se utilizan durante el desarrollo, testing y construcción del proyecto.
    - **Herramientas de build y desarrollo**
        - `vite`
        - `@vitejs/plugin-react`

    - **Testing**
        - `jest`
        - `babel-jest`
        - `@babel/preset-env`
        - `@babel/preset-react`
        - `@testing-library/react`
        - `@testing-library/jest-dom`
        - `jest-environment-jsdom`
        - `identity-obj-proxy`
        - **Nota**: Se utiliza un plugin personalizado en `babel.config.cjs` que convierte `import.meta.env` a `process.env`, permitiendo que Jest acceda a variables de entorno definidas por Vite

    - **End-to-end**
        - `cypress`

    - **Tipado (soporte opcional)**
        - `@types/react`
        - `@types/react-dom`

## 4. Variables de entorno

Las variables de entorno permiten desacoplar la configuración del código fuente y adaptar la aplicación a distintos entornos. Estas también se dividen en dos grupos:

- Frontend (Static Web Apps y entorno local)
    - **VITE_AZURE_FUNCTION_ENDPOINT**
    - Endpoint de la Azure Function que actúa como backend
    - Se utiliza para enviar las peticiones desde el frontend
    - Debe comenzar por `VITE_` para que Vite la exponga en el cliente
    - Es necesario configurar correctamente el **CORS** en Azure Functions para permitir peticiones desde el dominio del frontend

- Backend (Azure Functions)
    - **GEMINI_API_KEY**
        - Clave de acceso a la API de Gemini
        - Permite autenticar las peticiones al servicio de IA
        - Puede sustituirse en caso de limitaciones o consumo

    - **GEMINI_ENDPOINT**
        - Endpoint de la API de Gemini
        - Permite seleccionar el modelo de IA utilizado
        - Facilita cambiar de modelo sin modificar el código

## 5. Secrets de GitHub

Los secrets se utilizan en los workflows de GitHub Actions para gestionar credenciales de forma segura. Los secrets definidos en el repositorio son:

- **AZURE_FUNCTIONS_PUBLISH_PROFILE**
  - Perfil de publicación de Azure Functions
  - Contiene las credenciales necesarias para desplegar la función
  - Se obtiene desde el portal de Azure
  - Usado en:
    - `deployFunction.yml`

- **AZURE_STATIC_WEB_APPS_API_TOKEN**
  - Token de autenticación para desplegar en Azure Static Web Apps
  - Permite que GitHub Actions publique nuevas versiones del frontend
  - Usado en:
    - `deployApp.yml`

- **VITE_AZURE_FUNCTION_ENDPOINT**
  - Endpoint del backend expuesto al frontend durante el build
  - Necesario porque Vite inyecta variables en tiempo de compilación
  - Usado en:
    - `deployApp.yml`