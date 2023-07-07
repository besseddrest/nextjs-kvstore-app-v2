import Layout from '../../components/layout';
import { useForm } from 'react-hook-form';
import BasicInfo from './BasicInfo';
import DatasetInfo from './DatasetInfo';

export default function Form() {
  const { handleSubmit, register } = useForm({mode: 'onChange'});
  const handleRegistration = (data) => console.log(data);

  return (
    <Layout>
      <form>
        <BasicInfo />
        <DatasetInfo />
        <button type="submit">Submit Request</button>
      </form>
    </Layout>
  )
}