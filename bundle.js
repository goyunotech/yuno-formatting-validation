import * as validatorLibrary from 'validator';
import { isValidPostcode, parsePostcode } from './lib/validation';
import { formatDateDMYHMS, formatAddress, formatShortAddress, formatPostcode, formatStreetName } from './lib/formatting';
import { checkIfTerminatedPostcode, checkIfValidPostcode, checkPostcodesForCoordinates } from './lib/check';
/**
 * Functions for common string formatting
 */

export const formatter = {
  formatAddress,
  formatShortAddress,
  formatDateDMYHMS,
  formatPostcode,
  formatStreetName
};
/**
 * Functions which perform common validations
 * These functions are all synchronous and run locally
 */

export const validator = {
  isValidPostcode,
  parsePostcode,
  ...validatorLibrary
};
/**
 * Functions which perform external checks
 * These functions may be asynchronous and rely on external services
 */

export const checker = {
  checkIfValidPostcode,
  checkIfTerminatedPostcode,
  checkPostcodesForCoordinates
};
