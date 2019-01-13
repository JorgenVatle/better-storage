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

}