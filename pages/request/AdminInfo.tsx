import { useFormContext } from "react-hook-form"

export default function AdminInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Admin Info</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="form__label--default" htmlFor="cluster">Assigned Cluster</label>
          <select className="form__input--select" {...register("cluster")} name="cluster" title="Cluster">
            <option value="" disabled selected>Select cluster</option>
            <option value={1}>kvstore-readonly-alpha</option>
            <option value={2}>kvstore-readonly-beta</option>
            <option value={3}>kvstore-mutable-alpha</option>
            <option value={4}>kvstore-mutable-beta</option>
            <option value={5}>kvstore-bootstrap-alpha</option>
            <option value={6}>kvstore-bootstrap-beta</option>
          </select>
        </div>
        
        <div>
          <label className="form__label--default" htmlFor="partitions">Partitions</label>
          <input className="form__input--default" {...register("partitions")} type="number" name="partitions" title="Number of Partitions" />          
        </div>

        <div>
          <label className="form__label--default" htmlFor="review_status">Review Status</label>
          <select className="form__input--select" {...register("review_status")} name="review_status" title="Review Status">
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