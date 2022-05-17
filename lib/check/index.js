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
exports.checkPostcodeForCoordinates = exports.checkIfValidPostcode = exports.checkIfTerminatedPostcode = void 0;
const axios_1 = require("axios");
const postcodeIORequest = axios_1.default.create({
    baseURL: 'https://api.postcodes.io/',
    timeout: 3000,
    validateStatus: () => true,
});
/**
 * Uses the postcodes.io API to check if the postcode is terminated
 * @param postcode Postcode string
 */
function checkIfTerminatedPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield postcodeIORequest.get(`terminated_postcodes/${postcode}`);
            console.error(response);
            if (response.status) {
                if (response.status === 200) {
                    return {
                        ok: true,
                        value: {
                            terminated: true,
                            month_terminated: response.data.month_terminated,
                            year_terminated: response.data.year_terminated,
                            latitude: response.data.latitude,
                            longitude: response.data.longitude,
                        },
                    };
                }
                else if (response.status === 404) {
                    // N.B. According to the docs, a 404 will also be returned if the
                    // postcode string is invalid
                    // http://postcodes.io/docs
                    return { ok: true, value: { terminated: false } };
                }
            }
            return {
                ok: false,
                error: `Unexpected response from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            return { ok: false, error: `Error thrown by Axios ${e}` };
        }
    });
}
exports.checkIfTerminatedPostcode = checkIfTerminatedPostcode;
/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param postcode Postcode string
 */
function checkIfValidPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield postcodeIORequest.get(`postcodes/${postcode}/validate`);
            console.error(response);
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
            return { ok: false, error: `Error thrown by Axios ${e}` };
        }
    });
}
exports.checkIfValidPostcode = checkIfValidPostcode;
/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param latitude
 * @param longitude
 */
function checkPostcodeForCoordinates(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield postcodeIORequest.get(`postcodes/?lon=${longitude}&lat=${latitude}`);
            console.error(response);
            if (response.data && response.data.postcode) {
                return { ok: true, value: response.data.postcode };
            }
            return {
                ok: false,
                error: `No data returned from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            return { ok: false, error: `Error thrown by Axios ${e}` };
        }
    });
}
exports.checkPostcodeForCoordinates = checkPostcodeForCoordinates;
//# sourceMappingURL=index.js.map