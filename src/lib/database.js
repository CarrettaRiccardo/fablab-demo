import { dbService } from "@/lib/data";

export const Database = {
    get: async function (id) {
        const data = await dbService();

        console.log("Read data from database", id)
        return data.get(id);
    },

    list: async function () {
        const data = await dbService();

        console.log("List data from database")
        return data.list();
    },

    update: async function (id, payload) {
        const data = await dbService();

        console.log("Update data in database", id)
        return data.update(id, payload);
    },

    create: async function (payload) {
        const data = await dbService();

        console.log("Create data in database")
        return data.create(payload);
    },

    remove: async function (id) {
        const data = await dbService();

        console.log("Remove data from database", id)
        return data.remove(id);
    }
}