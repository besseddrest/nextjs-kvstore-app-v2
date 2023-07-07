export default function DatasetInfo() {
  return (
    <section>
      <h2>Dataset Info</h2>
      <div>
        <label htmlFor="storageType">Storage Type</label>
        <select name="storageType" title="Storage Types">
          <option value="READONLY">readonly</option>
          <option value="MUTABLE">mutable</option>
          <option value="BOOTSTRAP">bootstrap</option>
        </select>

        <h3>QPS</h3>
        <label htmlFor="qpsGet">Get QPS</label>
        <input type="number" name="qpsGet" placeholder="e.g. 1000 (no commas)"/>

        <label htmlFor="qpsSet">Set QPS</label>
        <input type="number" name="qpsSet" placeholder="e.g. 1000 (no commas)"/>

        <label htmlFor="qpsDel">Get QPS</label>
        <input type="number" name="qpDel" placeholder="e.g. 1000 (no commas)"/>
      </div>
    </section>
  )
}