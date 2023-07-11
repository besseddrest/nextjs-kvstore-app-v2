import { useFormContext } from "react-hook-form";
export default function BasicInfo() {
  const { register } = useFormContext();

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">Basic Info</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="owner">Owner</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("owner")} type="text" name="owner" placeholder="e.g. hcabalic" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Dataset Name</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("name")} type="text"  name="name" placeholder="e.g. my_dataset" />
        </div>
      </div>
      <div className="grid gap-6 mb-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">Use Case Description</label>
          <textarea rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("description")} name="description" placeholder="e.g. my_dataset" />
        </div>

      </div>
    </section>
  );
}