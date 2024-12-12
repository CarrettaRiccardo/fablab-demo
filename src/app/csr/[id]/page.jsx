"use client";

import CenterScreen from "@/components/center-screen";
import DetailItem from "@/components/detail-item";
import { use, useEffect, useState } from "react";

export default function Page({ params }) {
  const { id } = use(params);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/item/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <CenterScreen>
      {loading ? "Loading..." : <DetailItem data={data} />}
    </CenterScreen>
  );
}
