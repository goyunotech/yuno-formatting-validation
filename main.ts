import * as validatorLibrary from 'validator';
import { isValidPostcode, parsePostcode } from './lib/validation';
import {
  formatDateDMYHMS,
  formatAddress,
  formatShortAddress,
  formatPostcode,
} from './lib/formatting';
import {
  checkIfTerminatedPostcode,
  checkIfValidPostcode,
  checkPostcodeForCoordinates,
} from './lib/check';

/**
 * Functions for common string formatting
 */
export const formatter = {
  formatAddress,
  formatShortAddress,
  formatDateDMYHMS,
  formatPostcode,
};

/**
 * Functions which perform common validations
 * These functions are all synchronous and run locally
 */
export const validator = {
  isValidPostcode,
  parsePostcode,
  ...validatorLibrary,
};

/**
 * Functions which perform external checks
 * These functions may be asynchronous and rely on external services
 */
export const checker = {
  checkIfValidPostcode,
  checkIfTerminatedPostcode,
  checkPostcodeForCoordinates,
};
