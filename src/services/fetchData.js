import { ENDPOINT_SEARCH } from "../constants";

export const FetchData = async () => {
  try {
    const response = await fetch(ENDPOINT_SEARCH);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};