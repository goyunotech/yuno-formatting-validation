import { isValid, parse } from 'postcode';

import validator from 'validator';

interface ValidPostcode {
  valid: true;
  postcode: string;
  incode: string;
  outcode: string;
  area: string;
  district: string;
  subDistrict: string | null;
  sector: string;
  unit: string;
}

interface InvalidPostcode {
  valid: false;
  postcode: null;
  incode: null;
  outcode: null;
  area: null;
  district: null;
  subDistrict: null;
  sector: null;
  unit: null;
}

export function parsePostcode(
  postcode: string,
): ValidPostcode | InvalidPostcode {
  return parse(postcode);
}

export function validatePostcode(postcode: string): boolean {
  return isValid(postcode);
}

export function isEmail(email: string) {
  return validator.isEmail(email);
}

(() => {
  console.log(isEmail('test@test.com'));
})();
