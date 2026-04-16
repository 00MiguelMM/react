interface Columna<T> {
  clave: keyof T;
  titulo: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={String(columna.clave)}>{columna.titulo}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {columnas.map((columna) => (
              <td key={String(columna.clave)}>
                {String(fila[columna.clave])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}