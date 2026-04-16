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