"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.checker = exports.validator = exports.formatter = void 0;
var validatorLibrary = require("validator");
var validation_1 = require("./lib/validation");
var formatting_1 = require("./lib/formatting");
var check_1 = require("./lib/check");
/**
 * Functions for common string formatting
 */
exports.formatter = {
    formatAddress: formatting_1.formatAddress,
    formatShortAddress: formatting_1.formatShortAddress,
    formatDateDMYHMS: formatting_1.formatDateDMYHMS,
    formatPostcode: formatting_1.formatPostcode
};
/**
 * Functions which perform common validations
 * These functions are all synchronous and run locally
 */
exports.validator = __assign({ isValidPostcode: validation_1.isValidPostcode, parsePostcode: validation_1.parsePostcode }, validatorLibrary);
/**
 * Functions which perform external checks
 * These functions may be asynchronous and rely on external services
 */
exports.checker = {
    checkIfValidPostcode: check_1.checkIfValidPostcode,
    checkIfTerminatedPostcode: check_1.checkIfTerminatedPostcode,
    checkPostcodeForCoordinates: check_1.checkPostcodeForCoordinates
};
