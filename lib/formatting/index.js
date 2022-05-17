"use strict";
exports.__esModule = true;
exports.formatDateDMYHMS = exports.formatShortAddress = exports.formatAddress = exports.formatPostcode = void 0;
var postcode_1 = require("postcode");
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
        .filter(function (x) { return x; })
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
        .filter(function (x) { return x; })
        .join(', ');
}
exports.formatShortAddress = formatShortAddress;
var addZero = function (value) {
    if (value < 10) {
        value = "0".concat(value);
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
    var today = new Date();
    var day = addZero(today.getDate());
    var month = addZero(today.getMonth() + 1);
    var year = today.getFullYear();
    var hr = addZero(today.getHours());
    var min = addZero(today.getMinutes());
    var sec = addZero(today.getSeconds());
    return "".concat(day, "/").concat(month, "/").concat(year, " ").concat(hr, ":").concat(min, ":").concat(sec);
}
exports.formatDateDMYHMS = formatDateDMYHMS;
