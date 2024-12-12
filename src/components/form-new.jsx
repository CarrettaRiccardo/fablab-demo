"use client";

import { actionNewTodo } from "@/lib/actions";
import { useActionState } from "react";

export default function FormNew({}) {
  const [message, formAction, isPending] = useActionState(actionNewTodo, null);

  return (
    <form action={formAction}>
      <input name="title" placeholder="Todo" className="border-2 p-2 bg-gray-50" />
      <button
        disabled={isPending}
        type="submit"
        className="border-2 bg-cyan-400 p-2"
      >
        Add
      </button>

      <div className="w-full mt-2">
        {isPending
          ? "Loading..."
          : message && <p className="font-bold mt-4">{message}</p>}
      </div>
    </form>
  );
}
