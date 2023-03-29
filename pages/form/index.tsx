import Layout from '../../components/layout';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { handleSubmit, register } = useForm({mode: 'onChange'});
  const handleRegistration = (data) => console.log(data);

  return (
    <Layout>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <input {...register('userName')} type="text" placeholder="e.g. hcabalic" />
        <input {...register('datasetName')} type="text" placeholder="e.g. my_dataset" />
        <button type="submit">Submit Request</button>
      </form>
    </Layout>
  )
}