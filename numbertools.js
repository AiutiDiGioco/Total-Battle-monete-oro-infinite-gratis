/**
 * numbertools - Basic Number Utility Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const numbertools = {
    /**
     * Rounds a number to a specified number of decimal places.
     * @param {number} num - The number to round.
     * @param {number} decimals - Number of decimal places.
     * @returns {number}
     */
    round(num, decimals = 0) {
        if (typeof num !== 'number' || typeof decimals !== 'number' || decimals < 0) {
            console.error('[numbertools] Invalid parameters.');
            return NaN;
        }
        const factor = Math.pow(10, decimals);
        return Math.round(num * factor) / factor;
    },

    /**
     * Converts a number to a percentage string with optional decimals.
     * @param {number} num - The number to convert (0 to 1 expected).
     * @param {number} decimals - Number of decimal places.
     * @returns {string}
     */
    toPercentage(num, decimals = 0) {
        if (typeof num !== 'number' || num < 0 || num > 1) {
            console.error('[numbertools] Invalid number. Expected a value between 0 and 1.');
            return '';
        }
        return `${(num * 100).toFixed(decimals)}%`;
    },

    /**
     * Checks if a number is even.
     * @param {number} num - The number to check.
     * @returns {boolean}
     */
    isEven(num) {
        if (typeof num !== 'number' || !Number.isInteger(num)) return false;
        return num % 2 === 0;
    }
};

// Example usage:
// console.log(numbertools.round(3.14159, 2)); // 3.14
// console.log(numbertools.toPercentage(0.4567, 1)); // '45.7%'
// console.log(numbertools.isEven(4)); // true

module.exports = numbertools;
