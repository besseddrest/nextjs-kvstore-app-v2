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
            <button className="border" type="submit">Submit Request</button>
          </form>
          {/* <DevTool control={control} /> */}
        </FormProvider>
      </DatasetsProvider>
    </Layout>
  )
}