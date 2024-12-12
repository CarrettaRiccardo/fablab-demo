import { Database } from "@/lib/database";
import { NextResponse } from "next/server";

export const revalidate = 0
export const dynamic = "force-dynamic"

export async function GET(request, { params }) {
    const { id } = await params;

    const item = await Database.get(id);

    if (!item) {
        return NextResponse.json({}, {
            status: 404,
            message: "Item not found",
        });
    }

    return NextResponse.json(item);
}