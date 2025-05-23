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
exports.checkPostcodeDetails = exports.checkPostcodesForCoordinates = exports.checkIfValidPostcode = exports.checkIfTerminatedPostcode = void 0;
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
            if (response.status) {
                if (response.status === 200) {
                    return {
                        ok: true,
                        value: {
                            terminated: true,
                            month_terminated: response.data.result.month_terminated,
                            year_terminated: response.data.result.year_terminated,
                            latitude: response.data.result.latitude,
                            longitude: response.data.result.longitude,
                        },
                    };
                }
                if (response.status === 404) {
                    // N.B. According to the docs, a 404 will also be returned if the
                    // postcode string is invalid
                    // http://postcodes.io/docs
                    return { ok: true, value: { terminated: false } };
                }
            }
            console.error(response);
            return {
                ok: false,
                error: `Unexpected response from postcodes.io ${JSON.stringify(response)}`,
            };
        }
        catch (e) {
            console.error(e);
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
            if (response.data) {
                const isValid = response.data.result ? response.data.result : false;
                return { ok: true, value: isValid };
            }
            console.error(response);
            return {
                ok: false,
                error: `No data returned from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            console.error(e);
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
function checkPostcodesForCoordinates(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield postcodeIORequest.get(`postcodes/?lon=${longitude}&lat=${latitude}`);
            if (response.data && response.data.result) {
                const postcodeDetails = response.data.result.map((entry) => {
                    return {
                        postcode: entry.postcode,
                        country: entry.country,
                        latitude: entry.latitude,
                        longitude: entry.longitude,
                        distance: entry.distance,
                    };
                });
                return { ok: true, value: postcodeDetails };
            }
            console.error(response);
            return {
                ok: false,
                error: `No data returned from postcodes.io ${String(response)}`,
            };
        }
        catch (e) {
            console.error(e);
            return { ok: false, error: `Error thrown by Axios ${e}` };
        }
    });
}
exports.checkPostcodesForCoordinates = checkPostcodesForCoordinates;
/**
 * get the postcode details
 * @param postcode
 */
function checkPostcodeDetails(postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield postcodeIORequest.get(`postcodes/${postcode}`);
            if (response.data && response.data.result) {
                const { admin_ward: ward, longitude, latitude, postcode, country, codes: { admin_district: councilOnsCode, admin_ward: wardOnsCode }, } = response.data.result;
                const postcodeDetails = {
                    ward, longitude, latitude, councilOnsCode, wardOnsCode, postcode,
                    country
                };
                return { ok: true, value: postcodeDetails };
            }
            console.error(response);
            return {
                ok: false,
                error: `No data returned from postcodes.io ${JSON.stringify(response)}`,
            };
        }
        catch (e) {
            console.error(e);
            return { ok: false, error: `Error thrown by Axios ${e}` };
        }
    });
}
exports.checkPostcodeDetails = checkPostcodeDetails;
//# sourceMappingURL=index.js.map