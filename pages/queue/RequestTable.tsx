import { useDatasets } from '../../lib/context/DatasetsContext';
import Dataset from '../../lib/interfaces/dataset';

export default function RequestTable({ display }: { display: string }) {
  const { datasets } = useDatasets();

  let results: Dataset[] | null = (datasets && display === 'user') 
    ? datasets.filter((item: Dataset) => item.owner === 'hcabalic') 
    : datasets;

  return (
    <table>
      <thead>
        <tr>
          <th>Dataset Name</th>
          <th>Owner</th>
          <th>Storage Type</th>
          <th>Data Size</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          results && results.map((item: Dataset, i: number) => (
            <tr key={`dataset-${item.id}`}>
              <td>{ item.name }</td>
              <td>{ item.owner }</td>
              <td>{ item.storage_type }</td>
              <td>{ item.size }</td>
              <td>{ item.review_status }</td>
            </tr>
          ))
        }
      </tbody>  
    </table>
  )
}