"use strict";
exports.__esModule = true;
exports.isValidPostcode = exports.parsePostcode = void 0;
var postcode_1 = require("postcode");
function parsePostcode(postcode) {
    return (0, postcode_1.parse)(postcode);
}
exports.parsePostcode = parsePostcode;
function isValidPostcode(postcode) {
    return (0, postcode_1.isValid)(postcode);
}
exports.isValidPostcode = isValidPostcode;
