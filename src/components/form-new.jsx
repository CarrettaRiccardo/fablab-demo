"use client";

import { actionNewTodo } from "@/lib/actions";
import { useActionState } from "react";

export default function FormNew({}) {
  const [message, formAction, isPending] = useActionState(actionNewTodo, null);

  return (
    <form action={formAction} className="flex gap-2 w-full">
      <input
        name="title"
        placeholder="Todo"
        className="border-2 bg-gray-50 w-full"
      />

      <div>
        <button
          disabled={isPending}
          type="submit"
          className="border-2 bg-cyan-400 p-2"
        >
          Add
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
