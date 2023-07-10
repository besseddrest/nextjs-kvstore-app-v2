import Layout from '../../components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import DatasetInfo from './DatasetInfo';
import AdminInfo from './AdminInfo';
import { DevTool } from '@hookform/devtools';
import { DatasetsProvider, useDatasets } from '../../lib/context/DatasetsContext';

export default function Form() {
  // TODO: replace test add dataset with form values
  const dataset = {
    'id': 6969,
    'name': 'test_success',
    'owner': 'hcabalic',
    'description': 'testing form submission',
    'storage_type': 'READONLY',
    'size': 10000, // GB
    'qps': {
      'get': 1234
    },
    'review_status': 'NEW',
    'cluster': null, // cluster ID
    'partitions': null,
    'admin': null, // user ID or string?
  }
  const { updateDatasets } = useDatasets();
  const form = useForm();
  const { register, control } = form;

  function handleClick() {
    updateDatasets(dataset);
  }

  return (
    <Layout>
      <DatasetsProvider>
        <button className="border" type="button" onClick={handleClick}>Test Add Dataset</button>
        <FormProvider {...form}>
          <form>
            <BasicInfo />
            <DatasetInfo />
            <AdminInfo />
            <button className="border" type="submit">Submit Request</button>
          </form>
          <DevTool control={control} />
        </FormProvider>
      </DatasetsProvider>
    </Layout>
  )
}