export default function AdminInfo() {
  return (
    <section>
      <h2 className="font-bold text-2xl">Admin Info</h2>
      <div className="flex">
        <div className="flex-auto">
          <label className="block" htmlFor="cluster">Assigned Cluster</label>
          <select className="border" name="cluster" title="Cluster">
            <option value={1}>kvstore-readonly-alpha</option>
            <option value={2}>kvstore-readonly-beta</option>
            <option value={3}>kvstore-mutable-alpha</option>
            <option value={4}>kvstore-mutable-beta</option>
            <option value={5}>kvstore-bootstrap-alpha</option>
            <option value={6}>kvstore-bootstrap-beta</option>
          </select>
        </div>
        <div className="flex-auto">
          <label className="block" htmlFor="partitions">Partitions</label>
          <input className="border" type="number" name="partitions" title="Number of Partitions" />          
        </div>
      </div>      
      
      <label className="block" htmlFor="reviewStatus">Review Status</label>
      <select className="border" name="reviewStatus" title="Review Status">
        <option value="NEW">New</option>
        <option value="IN_REVIEW">In Review</option>
        <option value="NEEDS_INFO">Needs Info</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
        <option value="DENIED">Denied</option>
      </select>
    </section>
  )
}