"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checker = exports.validator = exports.formatter = void 0;
const validatorLibrary = require("validator");
const validation_1 = require("./lib/validation");
const formatting_1 = require("./lib/formatting");
const check_1 = require("./lib/check");
/**
 * Functions for common string formatting
 */
exports.formatter = {
    formatAddress: formatting_1.formatAddress,
    formatShortAddress: formatting_1.formatShortAddress,
    formatDateDMYHMS: formatting_1.formatDateDMYHMS,
    formatPostcode: formatting_1.formatPostcode,
    formatStreetName: formatting_1.formatStreetName,
};
/**
 * Functions which perform common validations
 * These functions are all synchronous and run locally
 */
exports.validator = Object.assign({ isValidPostcode: validation_1.isValidPostcode,
    parsePostcode: validation_1.parsePostcode,
    isNullOrEmpty: validation_1.isNullOrEmpty,
    isValidPhoneNumber: validation_1.isValidPhoneNumber }, validatorLibrary);
/**
 * Functions which perform external checks
 * These functions may be asynchronous and rely on external services
 */
exports.checker = {
    checkIfValidPostcode: check_1.checkIfValidPostcode,
    checkIfTerminatedPostcode: check_1.checkIfTerminatedPostcode,
    checkPostcodesForCoordinates: check_1.checkPostcodesForCoordinates,
    checkPostcodeDetails: check_1.checkPostcodeDetails
};
//# sourceMappingURL=main.js.map