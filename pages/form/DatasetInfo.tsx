export default function DatasetInfo() {
  return (
    <section>
      <h2 className="font-bold text-2xl">Dataset Info</h2>
      <div>
        <label className="block" htmlFor="storageType">Storage Type</label>
        <select className="border" name="storageType" title="Storage Types">
          <option value="READONLY">readonly</option>
          <option value="MUTABLE">mutable</option>
          <option value="BOOTSTRAP">bootstrap</option>
        </select>

        <h3 className="font-bold text-xl">QPS</h3>
        <label className="block" htmlFor="qpsGet">Get QPS</label>
        <input className="border" type="number" name="qpsGet" placeholder="e.g. 1000 (no commas)"/>

        <label className="block" htmlFor="qpsSet">Set QPS</label>
        <input className="border" type="number" name="qpsSet" placeholder="e.g. 1000 (no commas)"/>

        <label className="block" htmlFor="qpsDel">Get QPS</label>
        <input className="border" type="number" name="qpDel" placeholder="e.g. 1000 (no commas)"/>
      </div>
    </section>
  )
}