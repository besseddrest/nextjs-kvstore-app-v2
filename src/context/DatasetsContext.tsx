import Dataset from "../interfaces/dataset";
import data from "../data/datasets.json";
import { ReactNode, createContext, useContext, useState } from "react";

type datasetsContextType = {
  datasets: Dataset[] | null;
  updateDatasets: (entry: Dataset) => void;
}

const datasetsContextDefaultValues: datasetsContextType = {
  datasets: null,
  updateDatasets: (entry: Dataset) => {},
}

const DatasetsContext = createContext<datasetsContextType>(datasetsContextDefaultValues);

export function useDatasets(entry?: Dataset) {
  return useContext(DatasetsContext);
}

type Props = {
  children: ReactNode;
}

export function DatasetsProvider({ children }: Props) {
  const [datasets, setDatasets] = useState<Dataset[]>(data);
  
  const updateDatasets = (entry: Dataset) => {
    setDatasets([...datasets, entry]);
  }

  const value = {
    datasets,
    updateDatasets,
  }
  return (
    <>
      <DatasetsContext.Provider value={value}>
        { children }
      </DatasetsContext.Provider>
    </>
  )
}