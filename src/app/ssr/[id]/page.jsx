import CenterScreen from "@/components/center-screen";
import DetailItem from "@/components/detail-item";
import { Database } from "@/lib/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { id } = await params;

  const data = await Database.get(id);

  return (
    <CenterScreen>
      <DetailItem data={data} />
    </CenterScreen>
  );
}
