"use client";

import { actionUpdateTodo } from "@/lib/actions";
import { useActionState } from "react";

export default function FormUpdate({ item }) {
  const [message, formAction, isPending] = useActionState(
    actionUpdateTodo,
    null
  );

  return (
    <form action={formAction}>
      <input name="id" type="hidden" defaultValue={item.id} />
      <input
        name="title"
        defaultValue={item.title}
        placeholder="Todo"
        className="border-2 p-2 bg-gray-50"
      />
      <button
        disabled={isPending}
        type="submit"
        className="border-2 bg-cyan-400 p-2"
      >
        Update
      </button>

      <div className="w-full mt-2">
        {isPending
          ? "Loading..."
          : message && <p className="font-bold mt-4">{message}</p>}
      </div>
    </form>
  );
}
