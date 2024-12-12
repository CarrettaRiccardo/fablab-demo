"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Database } from "./database";

export async function actionNewTodo(prevState, formData) {
    const title = formData.get("title");

    // mutate data
    const newId = await Database.create({ title });

    // revalidate cache
    revalidatePath(`/list`)
    redirect(`/ssr/${newId}`)
}

export async function actionUpdateTodo(prevState, formData) {
    const id = formData.get("id");
    const title = formData.get("title");

    // mutate data
    await Database.update(id, { title });

    // revalidate cache
    // revalidatePath(`/isr/${id}`)
    // revalidatePath(`/ssr/${id}`)
}

export async function actionDeleteTodo(prevState, formData) {
    const id = formData.get("id");

    // mutate data
    await Database.remove(id);

    // revalidate cache
    revalidatePath(`/isr/${id}`)
    revalidatePath(`/ssr/${id}`)
    redirect("/list")
}