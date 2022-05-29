"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStreetName = exports.formatDateDMYHMS = exports.formatShortAddress = exports.formatAddress = exports.formatPostcode = void 0;
const postcode_1 = require("postcode");
const removePunctuationsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
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
/**
 * If there is a terminated postcode entry for the PropertyAddress, format the postcode
 * as <original terminated postcode> (<new geolocated postcode>), otherwise <original postcode>
 */
function formatPostcodeFromAddress(address) {
    var _a;
    return ((_a = address.terminatedPostcode) === null || _a === void 0 ? void 0 : _a.coordinatePostcode)
        ? `${address.postcode} (${address.terminatedPostcode.coordinatePostcode})`
        : address.postcode;
}
function formatAddress(address) {
    return [
        address.flatName,
        address.buildingNumber,
        address.buildingName,
        address.addressLine1,
        address.addressLine2,
        address.addressLine3,
        address.city,
        formatPostcodeFromAddress(address),
    ]
        .filter((x) => x)
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
        formatPostcodeFromAddress(address),
    ]
        .filter((x) => x)
        .join(', ');
}
exports.formatShortAddress = formatShortAddress;
const addZero = (value) => {
    if (value < 10) {
        return `0${value}`;
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
/**
 * Format street names by Removing punctuations
 * e.g. "Lordship Lane (North)" -> "lordship lane north"
 * @param streetName streetName string
 */
function formatStreetName(streetName) {
    return streetName ? streetName.replace(removePunctuationsRegex, '').toLowerCase() : '';
}
exports.formatStreetName = formatStreetName;
exports.formatStreetName = formatStreetName;
//# sourceMappingURL=index.js.map