import { useEffect, useRef, useState } from 'react';
import { useDatasets } from '../../lib/context/DatasetsContext';
import Dataset from '../../lib/interfaces/dataset';
import RequestRow from './RequestRow';
import DatasetModal from './DatasetModal';

export default function RequestTable({ display }: { display: string }) {
  const { datasets } = useDatasets();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);
  const dialogRef = useRef<any>(null);
  let results: Dataset[] | null = (datasets && display === 'user') 
    ? datasets.filter((item: Dataset) => item.owner === 'hcabalic') 
    : datasets;

  useEffect(() => {
    if (!dialogRef.current) return;

    if (showDialog) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [dialogRef, showDialog]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-12">
      <table className="request-queue">
        <thead className="request-queue__headers">
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
            results && 
            results.map((item: Dataset, i: number) => <RequestRow key={`row-${i}`} i={i} item={item} rowClasses={rowClasses} handleRowClick={handleRowClick}/>)
          }
        </tbody>  
      </table>
      <DatasetModal selectedDataset={selectedDataset} dialogRef={dialogRef} handleDialogClick={handleDialogClick} />
    </div>
  )

  function rowClasses(isDark: boolean): string {
    return isDark 
      ? "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700" 
      : "bg-white border-b dark:bg-gray-900 dark:border-gray-700";
  }

  function handleRowClick(item: Dataset) {
    setSelectedDataset(item);
    setShowDialog(true);
  }

  function handleDialogClick() {
    setShowDialog(false);
  }
}