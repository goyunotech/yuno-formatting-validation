import { isValid, parse } from 'postcode';
import axios from 'axios';

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

export function isValidPostcodeFormat(postcode: string): boolean {
  return isValid(postcode);
}

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export async function isValidPostcode(
  postcode: string,
): Promise<Result<Boolean, String>> {
  try {
    const response = await axios.get(
      `https://api.postcodes.io/postcodes/${postcode}/validate`,
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

declare type PostcodeStatus =
  | { terminated: false }
  | {
      terminated: true;
      year_terminated: number;
      month_terminated: number;
      latitude: number;
      longitude: number;
    };

export async function isTerminatedPostcode(
  postcode: string,
): Promise<Result<PostcodeStatus, String>> {
  try {
    const response = await axios.get(
      `https://api.postcodes.io/terminated_postcodes/${postcode}`,
    );
    console.log(response);
    if (response.status) {
      if (response.status === 200) {
        return {
          ok: true,
          value: {
            terminated: true,
            month_terminated: 1,
            year_terminated: 1,
            latitude: 1,
            longitude: 1,
          },
        };
      } else if (response.status === 404) {
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
