import axios from 'axios';
import { Result } from '../shared';

const postcodeIORequest = axios.create({
  baseURL: 'https://api.postcodes.io/',
  timeout: 3000,
  validateStatus: () => true,
});

/**
 * @field terminated Whether the postcode has been terminated https://ideal-postcodes.co.uk/guides/missing-postcode
 * @field year_terminated Termination year
 * @field month_terminated Month terminated from 1-12
 * @field latitude: Center latitude of the terminated postcode
 * @field longitude: Center longitude of the terminated postcode
 */
declare type PostcodeStatus =
  | { terminated: false }
  | {
      terminated: true;
      year_terminated: number;
      month_terminated: number;
      latitude: number;
      longitude: number;
    };

/**
 * Uses the postcodes.io API to check if the postcode is terminated
 * @param postcode Postcode string
 */
export async function checkIfTerminatedPostcode(
  postcode: string,
): Promise<Result<PostcodeStatus, String>> {
  try {
    const response = await postcodeIORequest.get(
      `terminated_postcodes/${postcode}`,
    );
    console.error(response);
    if (response.status) {
      if (response.status === 200) {
        return {
          ok: true,
          value: {
            terminated: true,
            month_terminated: response.data.month_terminated,
            year_terminated: response.data.year_terminated,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          },
        };
      } else if (response.status === 404) {
        // N.B. According to the docs, a 404 will also be returned if the
        // postcode string is invalid
        // http://postcodes.io/docs
        return { ok: true, value: { terminated: false } };
      }
    }
    return {
      ok: false,
      error: `Unexpected response from postcodes.io ${String(response)}`,
    };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param postcode Postcode string
 */
export async function checkIfValidPostcode(
  postcode: string,
): Promise<Result<Boolean, String>> {
  try {
    const response = await postcodeIORequest.get(
      `postcodes/${postcode}/validate`,
    );
    if (response.data) {
      const isValid = response.data.result ? response.data.result : false;
      return { ok: true, value: isValid };
    }
    return {
      ok: false,
      error: `No data returned from postcodes.io ${String(response)}`,
    };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

/**
 * Checks whether the postcode is valid (currently recognised by Royal Mail)
 * @param latitude
 * @param longitude
 */
export async function checkPostcodeForCoordinates(
  latitude: number,
  longitude: number,
): Promise<Result<String, String>> {
  try {
    const response = await postcodeIORequest.get(
      `postcodes/?lon=${longitude}&lat=${latitude}`,
    );
    if (response.data && response.data.postcode) {
      return { ok: true, value: response.data.postcode };
    }
    return {
      ok: false,
      error: `No data returned from postcodes.io ${String(response)}`,
    };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
