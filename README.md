# HE-CHECK

## Descripción

HE-CHECK es una herramienta diseñada para apoyar la redacción y evaluación preliminar de propuestas de proyectos. A partir de la información introducida por el usuario, la aplicación envía los datos a un backend serverless que se encarga de procesarlos mediante un modelo de IA y devolver un análisis detallado.

La aplicación sigue una arquitectura desacoplada basada en:

- Frontend en React
- Backend serverless con Azure Functions
- Integración con API de IA (Gemini)

---

## Instalación y ejecución en local

### Requisitos previos

- Node.js
- npm

### Pasos de instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Acceder al proyecto
cd HE-CHECK

# Instalar dependencias
npm install

# Ejecutar entorno de desarrollo
npm run dev
```

### Pasos de ejecución de tests

```bash
# Acceder al proyecto
cd HE-CHECK

# Ejecutar tests unitarios y de integración
npm test

# Ejecutar tests end-to-end
npm run e2e:run
```

---

## Características principales

- Formulario completo para introducir datos de una propuesta
- Evaluación automática basada en criterios clave:
  - Excelencia
  - Impacto
  - Implementación
- Comentarios explicativos generados por IA

## Flujo de la aplicación

1. El usuario completa el formulario
2. El frontend envía una petición HTTP al backend
3. El backend procesa la información y consulta la API de IA
4. Se devuelve un análisis estructurado
5. El frontend muestra los resultados

## Tecnologías utilizadas

### Aplicación

- JavaScript
- React
- Vite
- npm

### Testing

- Jest
- React Testing Library
- Cypress
- Babel

### Infraestructura

- Azure Static Web Apps
- Azure Functions
- Azure Storage Account
- Bicep (Infraestructura como código)

---

## Documentación
Más información se puede encontrar en la documentación del proyecto:

- [01-overview.md](docs/01-overview.md): Visión general de HE-CHECK, objetivo del proyecto y alcance funcional
- [02-arquitectura-e-infraestructura.md](docs/02-arquitectura-e-infraestructura.md): Arquitectura de la solución, componentes principales e infraestructura en Azure
- [03-gestión-configuración-y-ci-cd.md](docs/03-gestión-configuración-y-ci-cd.md): Gestión de la configuración, gestión de secrets y flujo de integración/despliegue continuo
- [04-entorno.md](docs/04-entorno.md): Detalle del entorno de desarrollo, stack tecnológico, dependencias y variables de entorno
- [05-aplicación.md](docs/05-aplicación.md): Descripción funcional de la aplicación, estructura del frontend y flujo de interacción con backend
- [06-testing.md](docs/06-testing.md): Plan de pruebas del proyecto (unitarias, integración y end-to-end)

---

## Autor

Proyecto desarrollado desarrollado por Alejandro Soult Toscano, estudiante del Grado en Ingeniería Informática del Software, como parte de su Trabajo de Fin de Grado.

- [Contactar con el autor](mailto:alesoutos@alum.us.es)
- [Visitar perfil de LinkedIn](https://www.linkedin.com/in/alejandro-soult-toscano)