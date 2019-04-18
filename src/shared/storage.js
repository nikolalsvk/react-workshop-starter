class Storage {
    save = (key, value) => localStorage.setItem(key, JSON.stringify(value))

    read = key => JSON.parse(localStorage.getItem(key))
}

export default Storage
