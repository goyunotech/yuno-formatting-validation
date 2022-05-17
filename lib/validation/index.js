"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPostcode = exports.parsePostcode = void 0;
const postcode_1 = require("postcode");
function parsePostcode(postcode) {
    return (0, postcode_1.parse)(postcode);
}
exports.parsePostcode = parsePostcode;
function isValidPostcode(postcode) {
    return (0, postcode_1.isValid)(postcode);
}
exports.isValidPostcode = isValidPostcode;
//# sourceMappingURL=index.js.map