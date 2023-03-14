class LocalStorageService {
    static get(key) {
        const value = window.localStorage.getItem(key);

        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }
    static set(key, value) {
        window.localStorage.setItem(key, value);
    }
    static remove(key) {
        window.localStorage.removeItem(key);
    }
    static clear() {
       window.localStorage.clear();
    }
}
export {LocalStorageService}