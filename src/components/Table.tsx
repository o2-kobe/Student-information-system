import type React from "react";

type TableProps = { children: React.ReactNode; columns: string[] };

const Table = ({ children, columns }: TableProps) => {
  return (
    <table className="border-collapse border border-gray-200 w-full mt-3">
      <thead>
        <tr className="border border-gray-200">
          {columns.map((column) => (
            <th key={column} className="px-4 py-2 text-left">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};
export default Table;
