"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatter = exports.validator = void 0;
const validatorLibrary = require("validator");
const validation_1 = require("./validation");
const formatting_1 = require("./formatting");
exports.validator = Object.assign({ isValidPostcodeFormat: validation_1.isValidPostcodeFormat,
    parsePostcode: validation_1.parsePostcode,
    isValidPostcode: validation_1.isValidPostcode,
    isTerminatedPostcode: validation_1.isTerminatedPostcode }, validatorLibrary);
exports.formatter = {
    formatAddress: formatting_1.formatAddress,
    formatShortAddress: formatting_1.formatShortAddress,
    formatDateDMYHMS: formatting_1.formatDateDMYHMS,
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(Object.keys(exports.validator));
}))();
//# sourceMappingURL=main.js.map