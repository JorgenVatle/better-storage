import { Meteor } from 'meteor/meteor';

/**
 * Meteor _localStorage instance methods.
 */
interface LocalStorage {
    getItem(key: string): string | null;
    removeItem(key: string): undefined;
    setItem(key: string, value: string): undefined;
}

export default class BetterStorage {

    // @ts-ignore
    private storage: LocalStorage = Meteor._localStorage;

    /**
     * Fetch and parse item from local storage.
     *
     * @param key
     */
    public fetch(key: string) {
        const item = this.storage.getItem(key) || 'null';

        return JSON.parse(item);
    }

    /**
     * Push the given value into local storage with the given key.
     *
     * @param key
     * @param value
     */
    public set(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    /**
     * Remove the given item from local storage.
     *
     * @param key
     */
    public remove(key: string) {
        this.storage.removeItem(key);
    }
}