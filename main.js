"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = exports.validator = void 0;
const validatorLibrary = require("validator");
const validation_1 = require("./lib/validation");
const formatting_1 = require("./lib/formatting");
exports.validator = Object.assign({ isValidPostcodeFormat: validation_1.isValidPostcodeFormat,
    parsePostcode: validation_1.parsePostcode,
    isValidPostcode: validation_1.isValidPostcode,
    isTerminatedPostcode: validation_1.isTerminatedPostcode }, validatorLibrary);
exports.formatter = {
    formatAddress: formatting_1.formatAddress,
    formatShortAddress: formatting_1.formatShortAddress,
    formatDateDMYHMS: formatting_1.formatDateDMYHMS,
    formatPostcode: formatting_1.formatPostcode,
};
//# sourceMappingURL=main.js.map