import { parse } from 'postcode';

/**
 * Models OS property data
 */
declare type PropertyAddress = {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string | null;
  postcode: string;
  buildingName?: string;
  buildingNumber?: string;
  flatName?: string;
  terminatedPostcode?: {
    coordinatePostcode: string | null;
  };
};

/**
 * Formats a postcode as <outcode><space><incode> in uppercase
 * e.g. "eH74gT" -> "EH7 4GT"
 * @param postcode postcode string
 */
export function formatPostcode(postcode: string) {
  // TODO: Consider using the fix method, as it deals with common user mistakes
  return parse(postcode).postcode;
}

/**
 * If there is a terminated postcode entry for the PropertyAddress, format the postcode
 * as <original terminated postcode> (<new geolocated postcode>), otherwise <original postcode>
 */
function formatPostcodeFromAddress(address: PropertyAddress) {
  return address.terminatedPostcode?.coordinatePostcode
    ? `${address.postcode} (${address.terminatedPostcode.coordinatePostcode})`
    : address.postcode;
}

export function formatAddress(address: PropertyAddress) {
  return [
    address.flatName,
    address.buildingNumber,
    address.buildingName,
    address.addressLine1,
    address.addressLine2,
    address.addressLine3,
    address.city,
    formatPostcodeFromAddress(address),
  ]
    .filter(x => x)
    .join(', ');
}

export function formatShortAddress(address: PropertyAddress) {
  return [
    address.buildingNumber,
    address.buildingName,
    address.flatName,
    address.addressLine1,
    address.addressLine2,
    address.addressLine3,
    formatPostcodeFromAddress(address),
  ]
    .filter(x => x)
    .join(', ');
}

const addZero = value => {
  if (value < 10) {
    value = `0${value}`;
  }
  return value;
};

/**
 * Formats current date as zero padded "day/month/year hour:minute:second"
 * Used in mailObject in react/src/utils/helper.js
 * // TODO: Determine what this is used for and where it should go
 * `mailObject` is used in ContactYuno
 */
export function formatDateDMYHMS() {
  const today = new Date();
  const day = addZero(today.getDate());
  const month = addZero(today.getMonth() + 1);
  const year = today.getFullYear();
  const hr = addZero(today.getHours());
  const min = addZero(today.getMinutes());
  const sec = addZero(today.getSeconds());
  return `${day}/${month}/${year} ${hr}:${min}:${sec}`;
}
