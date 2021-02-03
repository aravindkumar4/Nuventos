class Storage {
    static set(key, value) {
        localStorage.setItem(key, value);
    }

    static get(key) {
        return localStorage.getItem(key);
    }

    static isExist(key) {
        // var data = JSON.parse(localStorage.getItem(key));
        // return data && data.length > 0;

        return localStorage.getItem(key) != null ? true : false;
    }
    static clear(key) {
        localStorage.removeItem(key);
    }

    static clearAll() {
        localStorage.clear();
    }
}
export default Storage;