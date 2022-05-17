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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.checkPostcodeForCoordinates = exports.checkIfValidPostcode = exports.checkIfTerminatedPostcode = void 0;
var axios_1 = require("axios");
var postcodeIORequest = axios_1["default"].create({
    baseURL: 'https://api.postcodes.io/',
    timeout: 3000
});
/**
 * Uses the postcodes.io API to check if the postcode is terminated
 * @param postcode Postcode string
 */
function checkIfTerminatedPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, postcodeIORequest.get("terminated_postcodes/".concat(postcode))];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    if (response.status) {
                        if (response.status === 200) {
                            return [2 /*return*/, {
                                    ok: true,
                                    value: {
                                        terminated: true,
                                        month_terminated: response.data.month_terminated,
                                        year_terminated: response.data.year_terminated,
                                        latitude: response.data.latitude,
                                        longitude: response.data.longitude
                                    }
                                }];
                        }
                        else if (response.status === 404) {
                            // N.B. According to the docs, a 404 will also be returned if the
                            // postcode string is invalid
                            // http://postcodes.io/docs
                            return [2 /*return*/, { ok: true, value: { terminated: false } }];
                        }
                    }
                    return [2 /*return*/, {
                            ok: false,
                            error: "Unexpected response from postcodes.io ".concat(String(response))
                        }];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, { ok: false, error: String(e_1) }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkIfTerminatedPostcode = checkIfTerminatedPostcode;
/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param postcode Postcode string
 */
function checkIfValidPostcode(postcode) {
    return __awaiter(this, void 0, void 0, function () {
        var response, isValid, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, postcodeIORequest.get("postcodes/".concat(postcode, "/validate"))];
                case 1:
                    response = _a.sent();
                    if (response.data) {
                        isValid = response.data.result ? response.data.result : false;
                        return [2 /*return*/, { ok: true, value: isValid }];
                    }
                    return [2 /*return*/, {
                            ok: false,
                            error: "No data returned from postcodes.io ".concat(String(response))
                        }];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, { ok: false, error: String(e_2) }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkIfValidPostcode = checkIfValidPostcode;
/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param latitude
 * @param longitude
 */
function checkPostcodeForCoordinates(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function () {
        var response, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, postcodeIORequest.get("postcodes/?lon=".concat(longitude, "&lat=").concat(latitude))];
                case 1:
                    response = _a.sent();
                    if (response.data && response.data.postcode) {
                        return [2 /*return*/, { ok: true, value: response.data.postcode }];
                    }
                    return [2 /*return*/, {
                            ok: false,
                            error: "No data returned from postcodes.io ".concat(String(response))
                        }];
                case 2:
                    e_3 = _a.sent();
                    return [2 /*return*/, { ok: false, error: String(e_3) }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkPostcodeForCoordinates = checkPostcodeForCoordinates;
