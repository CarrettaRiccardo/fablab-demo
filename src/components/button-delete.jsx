"use client";

import { actionDeleteTodo } from "@/lib/actions";
import { useActionState } from "react";

export default function ButtonDelete({ id }) {
  const [message, formAction, isPending] = useActionState(
    actionDeleteTodo,
    null
  );

  return (
    <form action={formAction}>
      <input name="id" type="hidden" value={id} />
      <button
        disabled={isPending}
        type="submit"
        className="border-2 bg-red-400 p-2"
      >
        Delete
      </button>

      <div className="w-full mt-2">
        {isPending
          ? "Deleting..."
          : message && <p className="font-bold mt-4">{message}</p>}
      </div>
    </form>
  );
}
