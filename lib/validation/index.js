"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPhoneNumber = exports.isNullOrEmpty = exports.isValidPostcode = exports.parsePostcode = void 0;
const postcode_1 = require("postcode");
const libphonenumber_js_1 = require("libphonenumber-js");
function parsePostcode(postcode) {
    return (0, postcode_1.parse)(postcode);
}
exports.parsePostcode = parsePostcode;
function isValidPostcode(postcode) {
    return (0, postcode_1.isValid)(postcode);
}
exports.isValidPostcode = isValidPostcode;
function isNullOrEmpty(value) {
    return value == null || value.length === 0 || /^\s*$/.test(value);
}
exports.isNullOrEmpty = isNullOrEmpty;
function isValidPhoneNumber(number) {
    return (0, libphonenumber_js_1.isValidPhoneNumber)(number);
}
exports.isValidPhoneNumber = isValidPhoneNumber;
//# sourceMappingURL=index.js.map