import datasets from '../../src/data/datasets.json';
import Dataset from '../../src/interfaces/dataset';

type ComponentProps = {
  display: string;
}
export default function RequestTable({ display }: ComponentProps) {
  let results: Dataset[] = display === 'user' 
    ? datasets.filter((item: Dataset) => item.owner === 'hcabalic') 
    : datasets;

  console.log(display === 'user');

  return (
    <table>
      <tr>
        <th>Dataset Name</th>
        <th>Owner</th>
        <th>Storage Type</th>
        <th>Data Size</th>
        <th>Status</th>
      </tr>
      {
        results.map((item: Dataset, i: number) => (
          <tr key={`dataset-${item.id}`}>
            <td>{ item.name }</td>
            <td>{ item.owner }</td>
            <td>{ item.storage_type }</td>
            <td>{ item.size }</td>
            <td>{ item.review_status }</td>
          </tr>
        ))
      }
    </table>
  )
}