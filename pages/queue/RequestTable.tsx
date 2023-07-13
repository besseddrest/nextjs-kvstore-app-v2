import { useDatasets } from '../../lib/context/DatasetsContext';
import Dataset from '../../lib/interfaces/dataset';

export default function RequestTable({ display }: { display: string }) {
  const { datasets } = useDatasets();

  let results: Dataset[] | null = (datasets && display === 'user') 
    ? datasets.filter((item: Dataset) => item.owner === 'hcabalic') 
    : datasets;

  function rowClasses(isDark: boolean): string {
    return isDark 
      ? "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700" 
      : "bg-white border-b dark:bg-gray-900 dark:border-gray-700";
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
      <table className="z-10 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Dataset Name</th>
            <th scope="col" className="px-6 py-3">Owner</th>
            <th scope="col" className="px-6 py-3">Storage Type</th> 
            <th scope="col" className="px-6 py-3">Data Size</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            results && results.map((item: Dataset, i: number) => (
              <tr className={ i % 2 > 0 ? rowClasses(true) : rowClasses(false) }key={`dataset-${item.id}`}>
                <td className="px-6 py-4">{ item.id }</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ item.name }</th>
                <td className="px-6 py-4">{ item.owner }</td>
                <td className="px-6 py-4">{ item.storage_type }</td>
                <td className="px-6 py-4">{ item.size }</td>
                <td className="px-6 py-4">{ item.review_status }</td>
              </tr>
            ))
          }
        </tbody>  
      </table>
    </div>

  )
}