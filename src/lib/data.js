
export const dbService = async () => {
    if (!global.data) {
        // save data instance in global object for reuse
        global.data = [
            { id: 1, title: 'Carote' },
            { id: 2, title: 'Insalata' },
            { id: 3, title: 'Pasta' },
        ];
    }
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(global.data);
        }, 500);
    });

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
        get,
        list,
        update,
        create,
        remove,
    };
};