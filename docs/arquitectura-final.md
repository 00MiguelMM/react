# Arquitectura final

En este proyecto he utilizado varias características de TypeScript para reducir errores en tiempo de ejecución.

## Genéricos
He utilizado genéricos en el componente DataTable<T>, lo que permite reutilizar el componente con distintos tipos de datos sin perder el tipado estricto.

## Uniones discriminadas
En el módulo anterior, usé una unión discriminada para representar los distintos estados de matrícula. Esto permite controlar todos los posibles casos de forma segura.

## Tipo never
He aplicado el tipo never en la función generarReporte para asegurar que todos los casos están contemplados. Si se añade un nuevo estado, TypeScript obliga a actualizar la función.

## Tipos de utilidad
He utilizado Partial<T> para gestionar el estado de edición en el componente, permitiendo trabajar con objetos incompletos sin errores.

## Conclusión
Gracias a TypeScript, el código es más seguro, mantenible y menos propenso a errores en comparación con JavaScript.

## Integración de librería de fechas

Como parte del bonus, he integrado la librería date-fns para el manejo de fechas.

He creado una función utilitaria (calcularDiferenciaDias) que recibe dos objetos de tipo Date y devuelve la diferencia en días como un número.

Gracias a TypeScript, tanto los parámetros como el valor de retorno están tipados de forma estricta, lo que evita errores como pasar valores incorrectos o tipos no válidos.

Además, la librería está completamente tipada, lo que permite trabajar con autocompletado y validación en tiempo de desarrollo.