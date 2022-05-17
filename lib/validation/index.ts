import { isValid, parse } from 'postcode';

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

export function parsePostcode(
  postcode: string,
): ValidPostcode | InvalidPostcode {
  return parse(postcode);
}

export function isValidPostcode(postcode: string): boolean {
  return isValid(postcode);
}