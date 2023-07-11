import Layout from '../../components/layout';
import RequestTable from './RequestTable';
export default function Queue() {
  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">My Requests</h2>
      <RequestTable display="user" />
      <h2 className="font-bold text-2xl mb-4">Admin Queue</h2>
      <RequestTable display="admin" />
    </Layout>
  )
}