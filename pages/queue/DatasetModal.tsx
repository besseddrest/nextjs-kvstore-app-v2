import Dataset from "../../lib/interfaces/dataset"

interface Props {
  selectedDataset: Dataset | null,
  dialogRef: any,
  handleDialogClick: () => void
}
export default function DatasetModal(props: Props) {
  const { selectedDataset, dialogRef, handleDialogClick } = props;
  return (
    <dialog id="selected" ref={dialogRef} onClick={handleDialogClick}>
      {
        selectedDataset && 
          <>
            {
              Object.entries(selectedDataset).map((item, i) => 
                <p key={`metadata-row-${i}`}><strong>{item[0]}:</strong> {item[1]}</p>
              )
            }
          </>
      }
    </dialog>
  )
}