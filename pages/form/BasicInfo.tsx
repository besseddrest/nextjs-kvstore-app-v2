export default function BasicInfo() {
  return (
    <section>
      <h2>Basic Info</h2>
      <div>
        <label htmlFor="owner">Owner</label>
        <input type="text" name="owner" placeholder="e.g. hcabalic" />

        <label htmlFor="name">Dataset Name</label>
        <input type="text"  name="name" placeholder="e.g. my_dataset" />

        <label htmlFor="description">Use Case Description</label>
        <textarea name="description" cols={50} rows={5} placeholder="e.g. my_dataset" />
      </div>
    </section>
  );
}