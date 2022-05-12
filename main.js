"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checker = exports.formatter = exports.validator = void 0;
const validatorLibrary = require("validator");
const validation_1 = require("./lib/validation");
const formatting_1 = require("./lib/formatting");
const check_1 = require("./lib/check");
exports.validator = Object.assign({ isValidPostcode: validation_1.isValidPostcode,
    parsePostcode: validation_1.parsePostcode }, validatorLibrary);
exports.formatter = {
    formatAddress: formatting_1.formatAddress,
    formatShortAddress: formatting_1.formatShortAddress,
    formatDateDMYHMS: formatting_1.formatDateDMYHMS,
    formatPostcode: formatting_1.formatPostcode,
};
exports.checker = {
    checkIfValidPostcode: check_1.checkIfValidPostcode,
    checkIfTerminatedPostcode: check_1.checkIfTerminatedPostcode,
};
//# sourceMappingURL=main.js.map