import Layout from '../../components/layout';
import RequestTable from './RequestTable';
export default function Queue({ datasets }: any) {
  return (
    <Layout>
      <RequestTable display="user" datasets={datasets} />
      <RequestTable display="admin" datasets={datasets} />
    </Layout>
  )
}