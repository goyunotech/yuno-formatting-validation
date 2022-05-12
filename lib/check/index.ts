import axios from 'axios';
import { Result } from '../shared';

const postcodeIORequest = axios.create({
  baseURL: 'https://api.postcodes.io/',
  timeout: 3000,
});

declare type PostcodeStatus =
  | { terminated: false }
  | {
      terminated: true;
      year_terminated: number;
      month_terminated: number;
      latitude: number;
      longitude: number;
    };

export async function checkIfTerminatedPostcode(
  postcode: string,
): Promise<Result<PostcodeStatus, String>> {
  try {
    const response = await postcodeIORequest.get(
      `terminated_postcodes/${postcode}`,
    );
    console.log(response);
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
