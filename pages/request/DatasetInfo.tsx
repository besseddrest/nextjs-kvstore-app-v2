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
            <label className="form__label--default" htmlFor="size">Total Data Size (GB)</label>
            <input className="form__input--default" {...register("size", { valueAsNumber: true })} type="float" name="size" placeholder="e.g. 1000 for 1TB, 0.5 for 500 MB"/>
          </div>
        
          <div>
            <label className="form__label--default" htmlFor="storage_type">Storage Type</label>
            <select {...register("storage_type", {onChange: ev => handleChange(ev)})} className="form__input--select" name="storage_type" title="Storage Types">
              <option value="" disabled selected>Select Type</option>
              <option value="READONLY">readonly</option>
              <option value="MUTABLE">mutable</option>
            </select>    
          </div>
        
          <div>
            <h3>QPS</h3>
            <div className="mb-4">
              <label className="form__label--default" htmlFor="qps_get">Get QPS</label>
              <input className="form__input--default" {...register("qps_get", { valueAsNumber: true })} type="number" name="qps_get" placeholder="e.g. 1000 (no commas)"/>
            </div>

            { !isReadOnly &&
              <>
                <div className="mb-4">
                  <label className="form__label--default" htmlFor="qps_set">Set QPS</label>
                  <input className="form__input--default" {...register("qps_set", { valueAsNumber: true })} type="number" name="qps_set" placeholder="e.g. 1000 (no commas)"/>
                </div>

                <div className="mb-4">
                  <label className="form__label--default" htmlFor="qps_del">Delete QPS</label>
                  <input className="form__input--default" {...register("qps_del", { valueAsNumber: true })} type="number" name="qps_del" placeholder="e.g. 1000 (no commas)"/>
                </div>
              </>
            }
          </div>
        </div>
    </section>
  )
}