import Layout from '../../components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import DatasetInfo from './DatasetInfo';
import AdminInfo from './AdminInfo';
import { DevTool } from '@hookform/devtools';
import { DatasetsProvider, useDatasets } from '../../lib/context/DatasetsContext';
import Dataset from '../../lib/interfaces/dataset';

export default function Form() {
  const { updateDatasets } = useDatasets();
  const form = useForm<Dataset>();
  const { register, control, handleSubmit } = form;

  function onSubmit(values: Dataset) {
    updateDatasets(values);
  }

  return (
    <Layout>
      <DatasetsProvider>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BasicInfo />
            <DatasetInfo />
            <AdminInfo />
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="submit">Submit Request</button>
          </form>
          {/* <DevTool control={control} /> */}
        </FormProvider>
      </DatasetsProvider>
    </Layout>
  )
}