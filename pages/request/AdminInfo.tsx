import { useFormContext } from "react-hook-form"

export default function AdminInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Admin Info</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="cluster">Assigned Cluster</label>
          <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("cluster")} name="cluster" title="Cluster">
            <option value={1}>kvstore-readonly-alpha</option>
            <option value={2}>kvstore-readonly-beta</option>
            <option value={3}>kvstore-mutable-alpha</option>
            <option value={4}>kvstore-mutable-beta</option>
            <option value={5}>kvstore-bootstrap-alpha</option>
            <option value={6}>kvstore-bootstrap-beta</option>
          </select>
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="partitions">Partitions</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("partitions")} type="number" name="partitions" title="Number of Partitions" />          
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="review_status">Review Status</label>
          <select className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("review_status")} name="review_status" title="Review Status">
            <option value="NEW">New</option>
            <option value="IN_REVIEW">In Review</option>
            <option value="NEEDS_INFO">Needs Info</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="DENIED">Denied</option>
          </select>
        </div>
      </div>
    </section>
  )
}