import type { TableData } from "../Types/Generic";

type TableRowProps<T extends TableData> = {
  data: T[];
  keys: (keyof T)[];
  actionRender?: (row: T) => React.ReactNode;
};

const TableRow = <T extends TableData>({
  data,
  keys,
  actionRender,
}: TableRowProps<T>) => {
  return (
    <tbody className="text-sm">
      {data.map((row, index) => (
        <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
          {keys.map((key, i) => (
            <td key={i} className="px-4 py-2">
              {String(row[key])}
            </td>
          ))}
          {actionRender && (
            <td className="px-4 py-2 flex gap-2">{actionRender(row)}</td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
