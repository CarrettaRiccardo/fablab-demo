import ButtonDelete from "@/components/button-delete";
import CenterScreen from "@/components/center-screen";
import FormConfig from "@/components/form-config";
import FormNew from "@/components/form-new";
import FormReset from "@/components/form-reset";
import FormUpdate from "@/components/form-update";
import { Database } from "@/lib/database";
import Link from "next/link";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page() {
  const config = await Database.getConfig();
  const list = await Database.list();

  return (
    <CenterScreen className="grid-cols-1 md:grid-cols-3 gap-8 h-screen max-w-5xl px-8 mx-auto">
      <div className="md:col-span-1">
        <FormConfig defaultChecked={config.revalidateISRandSSR == true} />
      </div>
      <div className="md:col-span-2 space-y-4 w-full">
        {list.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-lg bg-white w-full"
          >
            <p className="font-bold text-2xl text-gray-800">
              {item.id} - {item.title}
            </p>
            <div className="flex justify-between items-center mb-2">
              <FormUpdate item={item} />

              <ButtonDelete id={item.id} />

              <div className="flex space-x-2">
                <Link
                  href={`/ssg/${item.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  SSG
                </Link>
                <Link
                  href={`/isr/${item.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  ISR
                </Link>
                <Link
                  href={`/ssr/${item.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  SSR
                </Link>
                <Link
                  href={`/csr/${item.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  CSR
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 border rounded-lg shadow-lg bg-white mt-4 w-full flex flex-row gap-2">
          <FormNew />

          <FormReset />
        </div>
      </div>
    </CenterScreen>
  );
}
