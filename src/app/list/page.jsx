import ButtonDelete from "@/components/button-delete";
import FormConfig from "@/components/form-config";
import FormNew from "@/components/form-new";
import { Database } from "@/lib/database";
import Link from "next/link";

export const revalidate = 0;
export const dynamic = "force-dynamic"

export default async function Page() {
  const config = await Database.getConfig();
  const list = await Database.list();

  return (
    <div className="grid place-content-center items-center h-screen gap-8 max-w-xl px-8 mx-auto">
      <FormConfig defaultChecked={config.revalidateISRandSSR == true} />

      {list.map((item) => (
        <div
          key={item.id}
          className="p-4 border rounded-lg shadow-lg bg-white w-full"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-2xl text-gray-800">{item.id} - {item.title}</p>
            <div className="flex space-x-2">
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
          <div className="flex justify-between items-center">
            {/* <p className="text-gray-600">{item.id}</p> */}
            <ButtonDelete id={item.id} />
          </div>
        </div>
      ))}

      {/* add */}
      <div className="p-4 border rounded-lg shadow-lg bg-white mt-4 w-full">
        <FormNew />
      </div>
    </div>
  );
}
