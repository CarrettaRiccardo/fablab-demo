"use server"

import { revalidatePath } from "next/cache";
import { Database } from "./database";

export async function actionSetConfig(prevState, formData) {
    const config = {
        revalidateISRandSSR: formData.get("revalidateISRandSSR") === "on",
    };

    // mutate data
    await Database.setConfig(config);

    revalidatePath(`/list`)
}

export async function actionGetTodo(formData) {
    const id = formData.get("id");

    // read data
    const data = await Database.get(id);

    return data;
}

// ----------------------------------------------------------

export async function actionResetDatabase(prevState, formData) {
    // mutate data
    await Database.reset();

    revalidatePath(`/list`)
}

export async function actionNewTodo(prevState, formData) {
    const title = formData.get("title");

    // mutate data
    const newId = await Database.create({ title });

    // revalidate cache (if config)
    const config = await Database.getConfig();
    if (config.revalidateISRandSSR) {
        revalidatePath(`/isr/${newId}`)
        revalidatePath(`/ssr/${newId}`)
    }
    revalidatePath(`/list`)

    // redirect(`/ssr/${newId}`)
}

export async function actionUpdateTodo(prevState, formData) {
    const id = formData.get("id");
    const title = formData.get("title");

    // mutate data
    await Database.update(id, { title });

    // revalidate cache (if config)
    const config = await Database.getConfig();
    if (config.revalidateISRandSSR) {
        revalidatePath(`/isr/${id}`)
        revalidatePath(`/ssr/${id}`)
    }
    revalidatePath(`/list`)
}

export async function actionDeleteTodo(prevState, formData) {
    const id = formData.get("id");

    // mutate data
    await Database.remove(id);

    // revalidate cache (if config)
    const config = await Database.getConfig();
    if (config.revalidateISRandSSR) {
        revalidatePath(`/isr/${id}`)
        revalidatePath(`/ssr/${id}`)
    }
    revalidatePath(`/list`)
}