import * as validatorLibrary from 'validator';
import {
  isTerminatedPostcode,
  isValidPostcode,
  parsePostcode,
  isValidPostcodeFormat,
} from './validation';
import {
  formatDateDMYHMS,
  formatAddress,
  formatShortAddress,
} from './formatting';

export const validator = {
  isValidPostcodeFormat,
  parsePostcode,
  isValidPostcode,
  isTerminatedPostcode,
  ...validatorLibrary,
};

export const formatter = {
  formatAddress,
  formatShortAddress,
  formatDateDMYHMS,
};

(async () => {
  console.log(Object.keys(validator));
})();
