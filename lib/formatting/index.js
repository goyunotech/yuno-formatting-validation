"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateDMYHMS = exports.formatShortAddress = exports.formatAddress = exports.formatPostcode = void 0;
const postcode_1 = require("postcode");
/**
 * Formats a postcode as <outcode><space><incode> in uppercase
 * e.g. "eH74gT" -> "EH7 4GT"
 * @param postcode postcode string
 */
function formatPostcode(postcode) {
    // TODO: Consider using the fix method, as it deals with common user mistakes
    return (0, postcode_1.parse)(postcode).postcode;
}
exports.formatPostcode = formatPostcode;
function formatAddress(address) {
    return Object.values(address)
        .filter(x => x)
        .join(', ');
}
exports.formatAddress = formatAddress;
function formatShortAddress(address) {
    return [
        address.buildingNumber,
        address.buildingName,
        address.flatName,
        address.addressLine1,
        address.addressLine2,
        address.addressLine3,
        address.postcode,
    ]
        .filter(x => x)
        .join(', ');
}
exports.formatShortAddress = formatShortAddress;
const addZero = value => {
    if (value < 10) {
        value = `0${value}`;
    }
    return value;
};
/**
 * Formats current date as zero padded "day/month/year hour:minute:second"
 * Used in mailObject in react/src/utils/helper.js
 * // TODO: Determine what this is used for and where it should go
 * `mailObject` is used in ContactYuno
 */
function formatDateDMYHMS() {
    const today = new Date();
    const day = addZero(today.getDate());
    const month = addZero(today.getMonth() + 1);
    const year = today.getFullYear();
    const hr = addZero(today.getHours());
    const min = addZero(today.getMinutes());
    const sec = addZero(today.getSeconds());
    return `${day}/${month}/${year} ${hr}:${min}:${sec}`;
}
exports.formatDateDMYHMS = formatDateDMYHMS;
//# sourceMappingURL=index.js.map