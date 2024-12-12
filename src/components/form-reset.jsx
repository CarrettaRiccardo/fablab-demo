"use client";

import { actionResetDatabase } from "@/lib/actions";
import { useActionState } from "react";

export default function FormReset({}) {
  const [message, formAction, isPending] = useActionState(
    actionResetDatabase,
    null
  );

  return (
    <form action={formAction} className="flex gap-2 w-fit">
      <div>
        <button
          disabled={isPending}
          type="submit"
          className="border-2 bg-red-400 p-2"
        >
          Reset
        </button>

        <div>
          {isPending
            ? "Loading..."
            : message && <p className="font-bold mt-4">{message}</p>}
        </div>
      </div>
    </form>
  );
}
