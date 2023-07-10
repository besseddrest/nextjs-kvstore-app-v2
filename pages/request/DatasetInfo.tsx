import { useFormContext } from "react-hook-form"

export default function DatasetInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl">Dataset Info</h2>
      <div className="flex">
        <div className="flex-auto">
          <label className="block" htmlFor="size">Total Data Size (GB)</label>
          <input {...register("size")} className="border" type="float" name="size" placeholder="e.g. 1000 for 1TB, 0.5 for 500 MB"/>

        </div>
        <div className="flex-auto">
          <label className="block" htmlFor="storage_type">Storage Type</label>
          <select {...register("storage_type")} className="border" name="storage_type" title="Storage Types">
            <option value="" disabled>Select Type</option>
            <option value="READONLY">readonly</option>
            <option value="MUTABLE">mutable</option>
          </select>          
        </div>
      </div>

      <h3 className="font-bold text-xl">QPS</h3>
      <label className="block" htmlFor="qps_get">Get QPS</label>
      <input {...register("qps_get")} className="border" type="number" name="qps_get" placeholder="e.g. 1000 (no commas)"/>
      { }
      <label className="block" htmlFor="qps_set">Set QPS</label>
      <input {...register("qps_set")} className="border" type="number" name="qps_set" placeholder="e.g. 1000 (no commas)"/>

      <label className="block" htmlFor="qps_del">Delete QPS</label>
      <input {...register("qps_del")} className="border" type="number" name="qps_del" placeholder="e.g. 1000 (no commas)"/>
    </section>
  )
}