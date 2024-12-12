import CenterScreen from "@/components/center-screen";
import DetailItem from "@/components/detail-item";
import { Database } from "@/lib/database";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await Database.list();

  return data.map((d) => ({
    id: String(d.id),
  }));
}

export default async function Page({ params }) {
  const { id } = await params;

  const data = await Database.get(id);

  return (
    <CenterScreen>
      <DetailItem data={data} />
    </CenterScreen>
  );
}
