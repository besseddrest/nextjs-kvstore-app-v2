import { useFormContext } from "react-hook-form";
export default function BasicInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Basic Info</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="form__label--default" htmlFor="owner">Owner</label>
          <input 
            {...register("owner")} 
            type="text"
            className="form__input--default" 
            name="owner" 
            placeholder="e.g. hcabalic" />
        </div>
        <div>
          <label className="form__label--default" htmlFor="name">Dataset Name</label>
          <input 
            {...register("name")} 
            type="text"
            className="form__input--default"  
            name="name" 
            placeholder="e.g. my_dataset" />
        </div>
      </div>
      <div className="grid gap-6 mb-6">
        <div>
          <label className="form__label--default" htmlFor="description">Use Case Description</label>
          <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("description")} name="description" placeholder="e.g. my_dataset" />
        </div>

      </div>
    </section>
  );
}