export default function BasicInfo() {
  return (
    <section>
      <h2 className="font-bold text-2xl">Basic Info</h2>
      <div className="flex">
        <div className="flex-1">
          <label className="block" htmlFor="owner">Owner</label>
          <input className="border" type="text" name="owner" placeholder="e.g. hcabalic" />
        </div>
        <div className="flex-auto">
          <label className="block" htmlFor="name">Dataset Name</label>
          <input className="border" type="text"  name="name" placeholder="e.g. my_dataset" />
        </div>
      </div>
      <label className="block" htmlFor="description">Use Case Description</label>
      <textarea className="border" name="description" cols={50} rows={5} placeholder="e.g. my_dataset" />
    </section>
  );
}