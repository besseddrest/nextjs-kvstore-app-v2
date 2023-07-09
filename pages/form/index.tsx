import Layout from '../../components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import DatasetInfo from './DatasetInfo';
import AdminInfo from './AdminInfo';
import { DevTool } from '@hookform/devtools';

export default function Form({ datasets, setDatasets }: any) {
  const form = useForm();
  const { register, control } = form;

  function addDataset() {
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

    setDatasets([...datasets, dataset]);
  }
  return (
    <Layout>
      <button className="border" type="button" onClick={addDataset}>Test Add Dataset</button>
      <FormProvider {...form}>
        <form>
          <BasicInfo />
          <DatasetInfo />
          <AdminInfo />
          <button className="border" type="submit">Submit Request</button>
        </form>
        <DevTool control={control} />
      </FormProvider>
    </Layout>
  )
}