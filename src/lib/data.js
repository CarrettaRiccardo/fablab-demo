
const initialData = [
    { id: 1, title: 'Carote' },
    { id: 2, title: 'Insalata' },
    { id: 3, title: 'Pasta' },
];

export const dbService = async () => {
    // config in fake db
    if (!global.config) {
        // save config instance in global object for reuse
        global.config = { revalidateISRandSSR: false };
    }
    const config = global.config;

    function getConfig() {
        return config;
    }

    function setConfig(payload) {
        global.config = { ...config, ...payload };
    }
    // ----------------------------------------------------------

    // data in fake db
    if (!global.data) {
        // save data instance in global object for reuse
        global.data = [...initialData];
    }
    const data = await new Promise((resolve) => {
        // fake retrieval time
        setTimeout(() => {
            resolve(global.data);
        }, 500);
    });

    function reset() {
        global.data = [...initialData];
    }

    function get(id) {
        return data.find(item => item.id == id);
    }

    function list() {
        return data;
    }

    function update(id, payload) {
        const index = data.findIndex(item => item.id == id);
        if (index !== -1) {
            data[index] = { ...data[index], ...payload };
        }

        return data[index];
    }

    function create(payload) {
        const newId = data.length ? data[data.length - 1].id + 1 : 1;
        const newItem = { id: newId, ...payload };
        data.push(newItem);

        return newId;
    }

    function remove(id) {
        const index = data.findIndex(item => item.id == id);
        if (index !== -1) {
            data.splice(index, 1);
        }

        return id;
    }

    return {
        getConfig,
        setConfig,
        reset,
        get,
        list,
        update,
        create,
        remove,
    };
};