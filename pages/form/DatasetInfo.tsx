import { useFormContext } from "react-hook-form"

export default function DatasetInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl">Dataset Info</h2>
      <div className="flex">
        <div className="flex-auto">
          <label className="block" htmlFor="dataSize">Total Data Size (GB)</label>
          <input {...register("dataSize")} className="border" type="float" name="dataSize" placeholder="e.g. 1000 for 1TB, 0.5 for 500 MB"/>

        </div>
        <div className="flex-auto">
          <label className="block" htmlFor="storageType">Storage Type</label>
          <select {...register("storageType")} className="border" name="storageType" title="Storage Types">
            <option value="" disabled>Select Type</option>
            <option value="READONLY">readonly</option>
            <option value="MUTABLE">mutable</option>
          </select>          
        </div>
      </div>

      <h3 className="font-bold text-xl">QPS</h3>
      <label className="block" htmlFor="qpsGet">Get QPS</label>
      <input {...register("qpsGet")} className="border" type="number" name="qpsGet" placeholder="e.g. 1000 (no commas)"/>

      <label className="block" htmlFor="qpsSet">Set QPS</label>
      <input {...register("qpsSet")} className="border" type="number" name="qpsSet" placeholder="e.g. 1000 (no commas)"/>

      <label className="block" htmlFor="qpsDel">Delete QPS</label>
      <input {...register("qpsDel")} className="border" type="number" name="qpsDel" placeholder="e.g. 1000 (no commas)"/>
    </section>
  )
}