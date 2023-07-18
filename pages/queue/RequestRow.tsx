import Dataset from "../../lib/interfaces/dataset";

interface Props {
  item: Dataset,
  i: number,
  rowClasses: (isDark: boolean) => string,
  handleRowClick: (item: Dataset) => void
}

export default function RequestRow(props: Props) {
  const { i, item, rowClasses, handleRowClick } = props;
  return (
    <tr className={ i % 2 > 0 ? rowClasses(true) : rowClasses(false) } key={`dataset-${item.id}`} onClick={() => handleRowClick(item)}>
      <td className="px-6 py-4">{ item.id }</td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ item.name }</th>
      <td className="px-6 py-4">{ item.owner }</td>
      <td className="px-6 py-4">{ item.storage_type }</td>
      <td className="px-6 py-4">{ item.size }</td>
      <td className="px-6 py-4">{ item.review_status }</td>
    </tr>
  )
}