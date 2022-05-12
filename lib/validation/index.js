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
exports.isTerminatedPostcode = exports.isValidPostcode = exports.isValidPostcodeFormat = exports.parsePostcode = void 0;
const postcode_1 = require("postcode");
const axios_1 = require("axios");
function parsePostcode(postcode) {
    return (0, postcode_1.parse)(postcode);
}
exports.parsePostcode = parsePostcode;
function isValidPostcodeFormat(postcode) {
    return (0, postcode_1.isValid)(postcode);
}
exports.isValidPostcodeFormat = isValidPostcodeFormat;
function isValidPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.postcodes.io/postcodes/${postcode}/validate`);
            if (response.data) {
                const isValid = response.data.result ? response.data.result : false;
                return { ok: true, value: isValid };
            }
            return {
                ok: false,
                error: `No data returned from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            return { ok: false, error: String(e) };
        }
    });
}
exports.isValidPostcode = isValidPostcode;
function isTerminatedPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.postcodes.io/terminated_postcodes/${postcode}`);
            console.log(response);
            if (response.status) {
                if (response.status === 200) {
                    return {
                        ok: true,
                        value: {
                            terminated: true,
                            month_terminated: 1,
                            year_terminated: 1,
                            latitude: 1,
                            longitude: 1,
                        },
                    };
                }
                else if (response.status === 404) {
                    return { ok: true, value: { terminated: false } };
                }
            }
            return {
                ok: false,
                error: `Unexpected response from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            return { ok: false, error: String(e) };
        }
    });
}
exports.isTerminatedPostcode = isTerminatedPostcode;
//# sourceMappingURL=index.js.map