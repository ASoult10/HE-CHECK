# HE-CHECK

## Descripción de la aplicación

![HE-CHECK Logo](../he-check/public/favicon.jpg)

---

**Proyecto:** HE-CHECK  
**Fecha:** 31/03/2026  
**Autor:** Alejandro Soult Toscano

---

## Índice

[1. Descripción de la aplicación frontend](#1-descripción-de-la-aplicación-frontend)  
[2. Descripción de la aplicación backend](#2-descripción-de-la-aplicación-backend)  
[3. Lista de endpoints](#3-lista-de-endpoints)  

---

## 1. Descripción de la aplicación frontend

El frontend de HE-CHECK está desarrollado como una **Single Page Application (SPA)** utilizando React. La estructura se basa en componentes reutilizables y enrutamiento dinámico.

### 1.1 Estructura principal de componentes

- **main.jsx**
  - Punto de entrada de la aplicación
  - Se encarga de renderizar el componente raíz (`App`) en el elemento `root` del HTML
  - Utiliza `StrictMode` para detectar problemas potenciales durante el desarrollo

---

- **App.jsx**
  - Componente principal que encapsula toda la aplicación
  - Configura el sistema de rutas mediante `react-router-dom`
  - Incluye elementos persistentes en todas las vistas, como la barra de navegación superior (`AppNav`) y la barra inferior (`Footer`)
  - Define las rutas principales:
    - `/` → Home
    - `/about` → About
    - `/info` → Info

---

- **AppNav.jsx**
  - Barra de navegación superior
  - Permite la navegación entre las distintas páginas mediante enlaces (`NavLink`)
  - Incluye:
    - Logo de la aplicación
    - Accesos a las páginas principales

    *[Placeholder: captura de la barra de navegación]*

---

- **Footer.jsx**
  - Barra inferior visible en todas las páginas
  - Contiene:
    - Información adicional del proyecto
    - Información del autor
    - Contacto por correo electrónico

    *[Placeholder: captura del footer]*

---

- **Home.jsx**
  - Página principal de la aplicación
  - Incluye:
    - Información introductoria sobre la herramienta
    - Formulario para introducir los datos de la propuesta
    - Visualización de resultados devueltos por la API

    *[Placeholder: formulario de entrada]*
    *[Placeholder: pantalla de resultados]*

---

- **About.jsx**
  - Página informativa sobre:
    - Autor del proyecto
    - Contexto del TFG
    - Relación con el framework FRONDA
  
  - Incluye enlaces externos:
    - Repositorio de GitHub
    - Perfil de LinkedIn

    *[Placeholder: página About]*

---

- **Info.jsx**
  - Página informativa sobre Horizonte Europa.
  - Incluye:
    - Explicación del programa
    - Importancia de las propuestas
    - Enlaces a recursos externos oficiales

    *[Placeholder: página Info]*

---

- **api.jsx**
  - Módulo encargado de la comunicación con el backend.
  - Define una función para enviar los datos del formulario mediante una petición HTTP POST.
  - Gestiona:
    - Envío de datos
    - Manejo de errores
    - Procesamiento de la respuesta
  - Aunque actualmente solo contiene una función, actúa como **punto de extensión** para futuras integraciones con APIs adicionales.

---

### 1.2 Estilos y diseño

- Todos los componentes están estructurados mediante contenedores `<div>` con `className`, lo que permite:
  - Centralizar estilos
  - Mantener consistencia visual
  - Facilitar el mantenimiento

- Se utiliza **CSS modular por componente**.

- Uso de **Flexbox** para la disposición de elementos en la interfaz.

- Definición centralizada en el CSS principal de:
  - **Variables de color**: Facilitan cambios globales de estilo
  - **Tipografías**: Diferenciadas para `<p>`, `<h1>`, `<h2>`, `<h3>`, etc.

---

## 2. Descripción de la aplicación backend

El backend está implementado mediante **Azure Functions** y actúa como intermediario entre el frontend y la API de Inteligencia Artificial.

### 2.1 Componentes principales

- **index.js**
  - Función principal del backend.
  - Responsabilidades:
    - Recibir los datos de la propuesta desde el frontend
    - Validar la entrada
    - Construir el prompt a partir de una plantilla
    - Enviar la petición a la API de Gemini
    - Procesar la respuesta
    - Devolver el resultado al frontend

---

### 2.2 Flujo interno de la función

1. **Recepción de datos**
   - Se obtienen desde el cuerpo de la petición

2. **Validación**
   - Se comprueba que existan datos en la petición
   - En caso contrario, devuelve error `400`.

3. **Construcción del prompt**
   - Se carga la plantilla desde `prompt.txt`
   - Se sustituyen los placeholders (`{{campo}}`) por los valores reales

4. **Petición a la API de IA**
   - Se realiza una llamada HTTP a Gemini con el prompt completo

5. **Procesamiento de la respuesta**
   - Se extrae el texto generado
   - Se limpia el formato (eliminando bloques ```json)
   - Se convierte a objeto JSON

6. **Respuesta al frontend**
   - Devuelve:
     - `200` con resultado estructurado
     - Error con mensaje en caso de fallo

---

- **prompt.txt**
  - Plantilla base del prompt
  - Contiene la estructura fija de la evaluación
  - Incluye placeholders que se reemplazan dinámicamente

---

### 2.3 Manejo de errores
- Errores de entrada: `400`
- Errores internos: `500`
- Errores de API externa: código original

Todos los errores se devuelven con un objeto estándar:

```
{
  "input_error": "mensaje descriptivo"
}
```

---

## 3. Lista de endpoints

Actualmente, el sistema expone un único endpoint:

- **Endpoint**:
  ```
  https://he-check-function.azurewebsites.net/api/analyzeProposal?code=...
  ```

- **Método**: POST

---

### 3.1 Body de la petición

El cliente debe enviar un JSON con los datos de la propuesta:

```
{
  "topic": "",
  "title": "",
  "actionType": "",
  "duration": "",
  "budget": "",
  "summary": "",
  "objects": "",
  "methodology": "",
  "impact": "",
  "consortium": ""
}
```

---

### 3.2 Respuesta exitosa (200)

```
{
  "excellence": {
    "score": 0-5,
    "comment": "..."
  },
  "impact": {
    "score": 0-5,
    "comment": "..."
  },
  "implementation": {
    "score": 0-5,
    "comment": "..."
  },
  "total": {
    "score": 0-5,
    "comment": "..."
  }
}
```

---

### 3.3 Respuesta de error

- Código: `500` (o código devuelto por la API externa)

```
{
  "input_error": "..."
}
```