import * as validatorLibrary from 'validator';
import { isValidPostcode, parsePostcode } from './lib/validation';
import { formatDateDMYHMS, formatAddress, formatShortAddress, formatPostcode } from './lib/formatting';
import { checkIfTerminatedPostcode, checkIfValidPostcode } from './lib/check';
export const validator = {
  isValidPostcode,
  parsePostcode,
  ...validatorLibrary
};
export const formatter = {
  formatAddress,
  formatShortAddress,
  formatDateDMYHMS,
  formatPostcode
};
export const checker = {
  checkIfValidPostcode,
  checkIfTerminatedPostcode
};
