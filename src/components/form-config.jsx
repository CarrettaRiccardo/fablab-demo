"use client";

import { actionSetConfig } from "@/lib/actions";
import { useActionState } from "react";

export default function FormConfig({ defaultChecked }) {
  const [message, formAction, isPending] = useActionState(
    actionSetConfig,
    null
  );

  return (
    <form
      action={formAction}
      className="max-w-md mx-auto p-6 bg-gray-200 shadow-md rounded-lg"
    >
      <h3 className="text-2xl font-semibold text-center mb-4">Config</h3>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="revalidateISRandSSR"
            defaultChecked={defaultChecked}
            className="mr-2"
          />
          <span className="text-gray-700">Revalidate ISR and SSR</span>
        </label>
      </div>
      <button
        disabled={isPending}
        type="submit"
        className={`w-full py-2 px-4 rounded ${
          isPending ? "bg-gray-400" : "bg-cyan-500 hover:bg-cyan-600"
        } text-white font-semibold`}
      >
        {isPending ? "Setting..." : "Set"}
      </button>
      <div className="w-full mt-4">
        {message && (
          <p className="text-center text-green-500 font-bold">{message}</p>
        )}
      </div>
    </form>
  );
}
