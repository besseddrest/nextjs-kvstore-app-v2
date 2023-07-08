import Layout from '../../components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import DatasetInfo from './DatasetInfo';
import AdminInfo from './AdminInfo';
import { DevTool } from '@hookform/devtools';

export default function Form() {
  const form = useForm();
  const { register, control } = form;
  return (
    <Layout>
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