import FormUpdate from "@/components/form-update";

export default function DetailItem({ data }) {
  return (
    <>
      {data ? (
        <div className="p-2 border bg-cyan-50">
          <h2 className="text-2xl font-bold">{data.title}</h2>

          <FormUpdate item={data} />
        </div>
      ) : (
        <div className="p-2 border bg-red-50">Not found</div>
      )}
    </>
  );
}
