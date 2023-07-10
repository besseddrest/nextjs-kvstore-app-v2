import Layout from '../../components/layout';
import RequestTable from './RequestTable';
export default function Queue() {
  return (
    <Layout>
      <RequestTable display="user" />
      <RequestTable display="admin" />
    </Layout>
  )
}