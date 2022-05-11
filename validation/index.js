"use strict";
exports.__esModule = true;
exports.anotherFunction = exports.isEmail = exports.validatePostcode = exports.parsePostcode = void 0;
var postcode_1 = require("postcode");
var validator_1 = require("validator");
function parsePostcode(postcode) {
    return (0, postcode_1.parse)(postcode);
}
exports.parsePostcode = parsePostcode;
function validatePostcode(postcode) {
    return (0, postcode_1.isValid)(postcode);
}
exports.validatePostcode = validatePostcode;
function isEmail(email) {
    return validator_1["default"].isEmail(email);
}
exports.isEmail = isEmail;
function anotherFunction(param) {
    return '';
}
exports.anotherFunction = anotherFunction;
(function () {
    console.log(isEmail('test@test.com'));
})();
