/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../../../lib/utils";

type TABLE_PROPS = {
  columns: any[];
  rows: any[];
  selectedColumns: any[];
  onCheckboxChange: (value: any) => void;
  className?: string;
};

const Table = (props: TABLE_PROPS) => {
  const { columns, rows, selectedColumns, onCheckboxChange, className } = props;

  return (
    <table className={cn("border border-black divide-y divide-gray-300 w-full", className)}>
      <thead>
        <tr className="bg-gray-100">
          {columns?.map((column) => (
            <th key={column} className="py-2 px-4 text-left text-xl font-semibold">{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows?.map((product) => (
          <tr key={product.id} className="hover:bg-gray-50">
            <td className="py-3 px-4">
              <input
                type="checkbox"
                onChange={() => onCheckboxChange(product)}
                checked={selectedColumns.some(
                  (selectedProd) => selectedProd.id === product.id
                )}
              />
            </td>
            <td className="py-3 px-4 capitalize">{product.title}</td>
            <td className="py-3 px-4">{product.brand}</td>
            <td className="py-3 px-4">{product.price}</td>
            <td className="py-3 px-4">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
