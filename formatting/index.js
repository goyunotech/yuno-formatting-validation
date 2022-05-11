"use strict";
exports.__esModule = true;
exports.formatShortAddress = exports.formatAddress = void 0;
function formatAddress(address) {
    return Object.values(address)
        .filter(function (x) { return x; })
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
        .filter(function (x) { return x; })
        .join(', ');
}
exports.formatShortAddress = formatShortAddress;
