export default class User {
    constructor({ id, name }) {
        this.id = id
        this.name = name
    }

    get username() {
        return `${this.name}-${this.id}`
    }
}
