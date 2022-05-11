const { isValid, parse } = require("postcode");

declare type ValidPostcode = {
  valid: true;
  postcode: string;
  incode: string;
  outcode: string;
  area: string;
  district: string;
  subDistrict: string | null;
  sector: string;
  unit: string;
};

declare type InvalidPostcode = {
  valid: false;
  postcode: null;
  incode: null;
  outcode: null;
  area: null;
  district: null;
  subDistrict: null;
  sector: null;
  unit: null;
};
declare type PropertyAddress = {
  addressLine1: string,
  addressLine2: string | null,
  addressLine3: string | null,
  city: string | null
  postcode: string,
  buildingName: string | null,
  buildingNumber: string | null,
  flatName: string | null,

}

exports.parsePostcode = function(postcode: string): ValidPostcode | InvalidPostcode {
  parse(postcode)
}

exports.validatePostcode = function(postcode: string): boolean {
  return isValid(postcode);
}

exports.formatAddress = function(address: PropertyAddress) {
  return Object.values(address).filter(x => x).join(', ');
}
