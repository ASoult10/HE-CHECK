# HE-CHECK

## Overview

![HE-CHECK Logo](../he-check/public/favicon.jpg)

---

**Fecha:** 31/03/2026  
**Autor:** Alejandro Soult Toscano

---

## Índice

[1. ¿Qué es HE-CHECK?](#1-qué-es-he-check)  
[2. Objetivos](#2-objetivos)  
[3. Alcance](#3-alcance)  
[4. Público Objetivo](#4-público-objetivo)  
[5. Limitaciones actuales](#5-limitaciones-actuales)  
[6. Trabajo a futuro](#6-trabajo-a-futuro)  

## 1. ¿Qué es HE-CHECK?

HE-CHECK es una herramienta de apoyo diseñada para evaluar propuestas de proyectos en el contexto del programa Horizonte Europa de la Comisión Europea. Su objetivo principal es ofrecer una valoración preliminar automatizada basada en los criterios oficiales del programa, permitiendo a los usuarios identificar posibles debilidades y mejorar la calidad de sus propuestas antes de su presentación formal. Así, actua como complemento que facilita una revisión inicial más estructurada y objetiva.

La herramienta utiliza técnicas de Inteligencia Artificial para analizar la información clave de una propuesta (como el topic, los objetivos, la metodología, el impacto esperado o la composición del consorcio) y generar un análisis estructurado con puntuaciones y comentarios. Este análisis se basa en los tres criterios fundamentales de evaluación de Horizonte Europa: Excelencia, Impacto y Calidad y eficiencia de la implementación. El resultado final proporciona tanto una visión global como un desglose detallado por criterio, lo que ayuda al usuario a comprender mejor los aspectos fuertes y mejorables de su propuesta.

HE-CHECK ha sido desarrollado en el contexto de un Trabajo de Fin de Grado o TFG en el grado de Ingeniería Informática del Software, de la Universidad de Sevilla, tomando como referencia la experiencia adquirida en la preparación de propuestas europeas y apoyándose en el framework FRONDA, creado en el mismo TFG. Mientras que este framework proporciona una base metodológica para el diseño de propuestas, HE-CHECK introduce un componente automatizado de evaluación, permitiendo validar de forma rápida distintos aspectos clave. Se trata, en cualquier caso, de una herramienta de carácter académico y experimental, cuyo uso debe entenderse siempre como apoyo y no como sustituto de los procesos oficiales de evaluación.

## 2. Objetivos

Los objetivos de HE-CHECK son los siguientes:

- **Facilitar a investigadores y entidades participantes en Horizonte Europa una herramienta** que permita realizar evaluaciones preliminares de sus propuestas de manera rápida y accesible. De este modo, se pretende ayudar a mejorar la calidad de las propuestas antes de su envío, reduciendo errores comunes y reforzando aquellos aspectos clave que son objeto de evaluación por parte de expertos.

- Explorar y aprovechar el potencial de la **Inteligencia Artificial aplicada** a una necesidad real y recurrente, como es la revisión anticipada de trabajos evaluables. 

- Consolidar y **aplicar conocimientos en el desarrollo de aplicaciones web de tipo SPA y en la integración con APIs externas**, dando lugar a una solución funcional que combina utilidad práctica con aprendizaje técnico.

## 3. Alcance

El alcance de HE-CHECK se centra en el **desarrollo de una herramienta web que permite evaluar propuestas de manera sistemática mediante la integración de un sistema de Inteligencia Artificial**. Para ello, se ha diseñado un prompt base completo y reutilizable que evita la necesidad de redefinir las instrucciones en cada evaluación, facilitando así un uso más eficiente y consistente de la herramienta. La aplicación actúa como una capa de integración entre el usuario y el modelo de IA, gestionando la entrada de datos, la generación del análisis y la presentación de resultados.

Aunque actualmente se utiliza una API concreta de Inteligencia Artificial, el diseño del sistema es modular, lo que permite sustituir o ampliar fácilmente el modelo utilizado por otros servicios equivalentes. No se ha llevado a cabo entrenamiento específico de modelos con datos reales, ni se pretende ofrecer evaluaciones deterministas, sino proporcionar una infraestructura flexible sobre la que se puedan construir mejoras futuras. 

Asimismo, HE-CHECK no pretende ser una guía completa sobre Horizonte Europa, sino una herramienta práctica de apoyo a la evaluación.

## 4. Público Objetivo

HE-CHECK está dirigido principalmente a **grupos de investigación que participan habitualmente en convocatorias de Horizonte Europa**, incluyendo universidades públicas y privadas, centros tecnológicos y otras instituciones que formen parte de consorcios internacionales. La herramienta busca facilitar el proceso de revisión interna de propuestas, proporcionando una evaluación rápida que sirva como punto de partida para mejoras posteriores.

Además, también resulta útil para **investigadores con menor experiencia en este tipo de programas, como principiantes o aquellos que se enfrentan por primera vez a convocatorias de Horizonte Europa**. En estos casos, HE-CHECK puede servir como una herramienta orientativa que ayude a comprender mejor los criterios de evaluación y a estructurar propuestas de forma más adecuada.

## 5. Limitaciones actuales

Actualmente, HE-CHECK presenta una serie de limitaciones derivadas tanto del uso de servicios externos como de su carácter académico:

- La longitud total de la información introducida por el usuario junto con el prompt está condicionada por las restricciones de la API de Inteligencia Artificial utilizada, lo que puede limitar la cantidad de detalle que se puede analizar en una sola evaluación.

- El modelo de IA empleado es el proporcionado por dicha API, sin posibilidad de personalización o entrenamiento específico en esta versión.

- La herramienta está actualmente enfocada a la preevaluación de propuestas del Pilar II de Horizonte Europa, sin cubrir otros pilares o programas.

- No se dispone de un sistema de gestión de usuarios ni de almacenamiento de evaluaciones, más allá de la posibilidad de copiar manualmente los resultados en formato JSON.

- Al tratarse de una herramienta basada en IA, los resultados pueden presentar variabilidad y deben interpretarse siempre como orientativos y nunca como deterministas.

- La infraestructura de despliegue y el uso de la API de IA se encuentran sujetos a planes gratuitos, lo que puede implicar restricciones en cuanto a disponibilidad, rendimiento o número de peticiones.

Aunque se de esta última limitación, el código está preparado para que cualquier organización o entidad con los recursos suficientes pueda desplegarlo y usar la herramienta en una infraestructura propia. Esto se explicará en documentos posteriores.

## 6. Trabajo a futuro

Como líneas de mejora futura, se plantea los siguientes puntos: 

- **Integración de fuentes de datos externas**, como la API oficial de CORDIS, que permita mostrar ejemplos reales de proyectos financiados y enriquecer así el contexto de uso de la herramienta. 

- **Ampliación del alcance para cubrir otros tipos de propuestas**, tanto dentro de Horizonte Europa como en otros programas de financiación.

- **Incorporación de múltiples modelos de evaluación disponibles**, permitiendo comparar resultados o generar evaluaciones agregadas. 

- **Entrenamiento de modelos específicos o la implementación de mecanismos de retroalimentación**, en los que los usuarios introduzcan resultados reales de evaluaciones para mejorar progresivamente el sistema. 

- **Otras funcionalidades** como la gestión de cuentas de usuario, almacenamiento de historial de evaluaciones y herramientas avanzadas de análisis, lo que permitiría hacer HE-CHECK hacia una plataforma más completa.