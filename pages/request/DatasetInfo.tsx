import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form"

export default function DatasetInfo() {
  const { register } = useFormContext();
  const [ isReadOnly, setIsReadOnly ] = useState<boolean>(true);

  function handleChange(ev: ChangeEvent<HTMLSelectElement>) {
    ev.target.value === "READONLY" ? setIsReadOnly(true) : setIsReadOnly(false);
  }

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Dataset Info</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="size">Total Data Size (GB)</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("size", { valueAsNumber: true })} type="float" name="size" placeholder="e.g. 1000 for 1TB, 0.5 for 500 MB"/>
          </div>
        
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="storage_type">Storage Type</label>
            <select {...register("storage_type", {onChange: ev => handleChange(ev)})}  className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="storage_type" title="Storage Types">
              <option value="" disabled selected>Select Type</option>
              <option value="READONLY">readonly</option>
              <option value="MUTABLE">mutable</option>
            </select>    
          </div>
        
          <div>
            <h3>QPS</h3>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="qps_get">Get QPS</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("qps_get", { valueAsNumber: true })} type="number" name="qps_get" placeholder="e.g. 1000 (no commas)"/>
            </div>

            { !isReadOnly &&
              <>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="qps_set">Set QPS</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("qps_set", { valueAsNumber: true })} type="number" name="qps_set" placeholder="e.g. 1000 (no commas)"/>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="qps_del">Delete QPS</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("qps_del", { valueAsNumber: true })} type="number" name="qps_del" placeholder="e.g. 1000 (no commas)"/>
                </div>
              </>
            }
          </div>
        </div>
    </section>
  )
}