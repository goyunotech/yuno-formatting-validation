import * as validatorLibrary from 'validator';
import { isTerminatedPostcode, isValidPostcode, parsePostcode, isValidPostcodeFormat } from './lib/validation';
import { formatDateDMYHMS, formatAddress, formatShortAddress, formatPostcode } from './lib/formatting';
export const validator = {
  isValidPostcodeFormat,
  parsePostcode,
  isValidPostcode,
  isTerminatedPostcode,
  ...validatorLibrary
};
export const formatter = {
  formatAddress,
  formatShortAddress,
  formatDateDMYHMS,
  formatPostcode
};
