import { actionGetTodo } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;

    const form = new FormData()
    form.set("id", id)
    const item = await actionGetTodo(form);
    // const item = await Database.get(id);

    if (!item) {
        return NextResponse.json({}, {
            status: 404,
            message: "Item not found",
        });
    }

    return NextResponse.json(item);
}