/**
 * A function that takes an argument of any type and returns an object with functions
 * to determine if the input is of a specific primitive type.
 * @param input - The input value of any type to be checked.
 * @returns An object with six functions to determine if the input is a number, string, boolean,
 * null, undefined, or symbol.
 */
export default (input: any) => {
    return {
        /**
         * Determines if the input is a number.
         * @returns True if the input is a number, false otherwise.
         */
        isNumber: (): boolean => {
            return !isNaN(Number(input));
        },

        /**
         * Determines if the input is a string.
         * @returns True if the input is a string, false otherwise.
         */
        isString: (): boolean => {
            return typeof input === 'string';
        },

        /**
         * Determines if the input is a boolean.
         * @returns True if the input is a boolean, false otherwise.
         */
        isBoolean: (): boolean => {
            return typeof input === 'boolean';
        },

        /**
         * Determines if the input is null.
         * @returns True if the input is null, false otherwise.
         */
        isNull: (): boolean => {
            return input === null;
        },

        /**
         * Determines if the input is undefined.
         * @returns True if the input is undefined, false otherwise.
         */
        isUndefined: (): boolean => {
            return typeof input === 'undefined';
        }, 

        /**
         * Determines if the input is a symbol.
         * @returns True if the input is a symbol, false otherwise.
         */
        isSymbol: (): boolean => {
            return typeof input === 'symbol';
        },

        /**
         * Determines whether a given input is a JSON object
         * @returns {boolean} true if input is a JSON object, false otherwise
         */
        isJSONObject: (): boolean => {
            try {
                JSON.parse(input);
                return true;
            } catch(err: any){
                return false;
            }
        },

        /**
         * Determines whether the given input is an instance of the Error class.
         * @returns {boolean} true if the input is an instance of Error, false otherwise.
         */
        isError: (): boolean => {
            return input instanceof Error;
        },

        /**
         * Determines whether the given input is a Promise object.
         * @returns {boolean} true if the input is a Promise, false otherwise.
         */
        isPromise:  (): boolean => {
            return input instanceof Promise;
        },

        /**
         * Determines whether the given input is a Map object.
         * @returns {boolean} true if the input is a Map, false otherwise.
         */
        isMap: (): boolean => {
            return input instanceof Map;
        },

        /**
         * Determines whether the given input is a non-array object.
         * @returns {boolean} true if the input is a non-array object, false otherwise.
         */
        isObject: (): boolean => {
            return typeof input === 'object' && !Array.isArray(input);
        },

        /**
         * Determines whether the given input is an AsyncFunction.
         * @returns {boolean} true if the input is an AsyncFunction, false otherwise.
         */
        isAsyncFunction: (): boolean => {
            return input[Symbol.toStringTag] === "AsyncFunction";
        },

        /**
         * Determines whether the given input is an array.
         * @returns {boolean} true if the input is an array, false otherwise.
         */
        isArray: (): boolean => {
            return Array.isArray(input);
        },

        /**
         * Determines whether the given input is a function.
         * @param {Function} input - The input to be checked for whether it is a function.
         * @returns {boolean} true if the input is a function, false otherwise.
         */
        isFunction: (): boolean => {
            return typeof input === 'function';
        }
    }
}