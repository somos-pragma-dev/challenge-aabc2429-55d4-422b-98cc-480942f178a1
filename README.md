# Construcción de una SPA con React y TypeScript

El objetivo es desarrollar una aplicación web de una sola página (SPA) utilizando React y TypeScript. La aplicación simulará un sistema de gestión de tareas donde los usuarios pueden crear, leer, actualizar y eliminar tareas. Los datos se almacenarán temporalmente en el estado de la aplicación. Se espera que la aplicación maneje correctamente los errores de entrada y proporcione una experiencia de usuario intuitiva.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React TypeScript |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del entorno y estructura básica

**Objetivo:** Configurar el entorno de desarrollo y crear la estructura básica de la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura el entorno de desarrollo para trabajar con React y TypeScript.
- Crea la estructura básica de la aplicación con las carpetas y archivos necesarios.
- Implementa un componente principal que renderice un encabezado y un contenedor para las tareas.

**Entregable:** Entorno de desarrollo configurado y estructura básica de la aplicación creada.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que TypeScript requiere configuraciones adicionales en el proyecto.
- Utiliza la CLI de Create React App para iniciar el proyecto.

</details>

### Fase 2: Implementación de la lógica de tareas

**Objetivo:** Implementar la lógica para crear, leer, actualizar y eliminar tareas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crea un estado global utilizando el Context API para manejar las tareas.
- Implementa los hooks necesarios para interactuar con el estado global.
- Desarrolla los componentes para mostrar, crear, editar y eliminar tareas.

**Entregable:** Lógica de tareas implementada y componentes de tareas funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el Context API para proporcionar un estado global accesible en toda la aplicación.
- Asegúrate de que los componentes se actualicen correctamente cuando el estado cambie.

</details>

### Fase 3: Manejo de errores y validaciones

**Objetivo:** Implementar el manejo de errores y validaciones en la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Agrega validaciones para asegurar que las tareas tengan un título y una descripción.
- Implementa el manejo de errores para mostrar mensajes de error al usuario.
- Asegúrate de que la aplicación maneje correctamente los errores de entrada y proporcione una experiencia de usuario intuitiva.

**Entregable:** Aplicación con validaciones y manejo de errores implementado.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza hooks para validar los datos de entrada y mostrar mensajes de error.
- Asegúrate de que los mensajes de error sean claros y útiles para el usuario.

</details>

### Fase 4: Pruebas y optimización

**Objetivo:** Realizar pruebas y optimizar la aplicación.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Realiza pruebas unitarias y de integración para asegurar la calidad del código.
- Optimiza la aplicación para mejorar el rendimiento y la experiencia de usuario.
- Asegúrate de que la aplicación cumpla con los estándares de calidad y accesibilidad.

**Entregable:** Aplicación con pruebas y optimización implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de pruebas como Jest y React Testing Library.
- Asegúrate de que tu aplicación sea accesible y cumpla con los estándares de calidad.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una SPA y por qué se utiliza en este proyecto?
- **paraQueSirve**: ¿Para qué sirve el Context API en este proyecto?
- **comoSeUsa**: ¿Cómo se usan los hooks en este proyecto?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al trabajar con React y TypeScript?
- **queDecisionesImplica**: ¿Qué decisiones implica el manejo de errores y validaciones en este proyecto?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y estructura básica de la aplicación.
- Implementación correcta de la lógica de tareas utilizando React y TypeScript.
- Manejo adecuado de errores y validaciones en la aplicación.
- Realización de pruebas y optimización de la aplicación.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
