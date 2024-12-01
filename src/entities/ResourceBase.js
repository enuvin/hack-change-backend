class Resource {
    /** @type {string} */
    name;
    /** @type {any} */
    data;
    /** @type {boolean} */
    available;

    constructor(name, data, available) {
        this.name = name
        this.data = data
        this.available = available
    }
}

module.exports = Resource