import BackButton from "@/components/back-button";
import FormUpdate from "@/components/form-update";

export default function DetailItem({ data }) {
  return (
    <div className="space-y-4">
      <BackButton />

      {data ? (
        <div className="p-2 border bg-cyan-50">
          <h2 className="text-2xl font-bold">
            {data.id} - {data.title}
          </h2>
        </div>
      ) : (
        <div className="p-2 border bg-red-50">Not found</div>
      )}
    </div>
  );
}
