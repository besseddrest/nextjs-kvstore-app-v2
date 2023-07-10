import Dataset from "../interfaces/dataset";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type datasetsContextType = {
  datasets: Dataset[];
  updateDatasets: (entry: Dataset) => void;
}

const datasetsContextDefaultValues: datasetsContextType = {
  datasets: [],
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
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  
  // TODO why does Form component always make fetch call?
  useEffect(() => {
    getDatasets('./data/datasets.json');
  }, []);

  const updateDatasets = (entry: Dataset) => {
    setDatasets([...datasets, entry]);
  }

  const value = {
    datasets,
    updateDatasets,
  }

  async function getDatasets(url: string) {
    const results = await fetch(url)
      .then(results => results.json())
      .then(results => setDatasets(results))
      .catch(err => console.log(err));

    return results;
  }

  return (
    <>
      <DatasetsContext.Provider value={value}>
        { children }
      </DatasetsContext.Provider>
    </>
  )
}