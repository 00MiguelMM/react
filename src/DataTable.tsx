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
          {columnas.map((col, i) => (
            <th key={i}>{col.titulo}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, i) => (
          <tr key={i}>
            {columnas.map((col, j) => (
              <td key={j}>{String(fila[col.clave])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}