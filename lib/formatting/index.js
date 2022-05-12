"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateDMYHMS = exports.formatShortAddress = exports.formatAddress = exports.formatPostcode = void 0;
const postcode_1 = require("postcode");
function formatPostcode(postcode) {
    return (0, postcode_1.parse)(postcode).postcode;
}
exports.formatPostcode = formatPostcode;
function formatAddress(address) {
    return Object.values(address)
        .filter(x => x)
        .join(', ');
}
exports.formatAddress = formatAddress;
function formatShortAddress(address) {
    return [
        address.buildingNumber,
        address.buildingName,
        address.flatName,
        address.addressLine1,
        address.addressLine2,
        address.addressLine3,
        address.postcode,
    ]
        .filter(x => x)
        .join(', ');
}
exports.formatShortAddress = formatShortAddress;
const addZero = value => {
    if (value < 10) {
        value = `0${value}`;
    }
    return value;
};
function formatDateDMYHMS() {
    const today = new Date();
    const day = addZero(today.getDate());
    const month = addZero(today.getMonth() + 1);
    const year = today.getFullYear();
    const hr = addZero(today.getHours());
    const min = addZero(today.getMinutes());
    const sec = addZero(today.getSeconds());
    return `${day}/${month}/${year} ${hr}:${min}:${sec}`;
}
exports.formatDateDMYHMS = formatDateDMYHMS;
//# sourceMappingURL=index.js.map