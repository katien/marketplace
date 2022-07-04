import axios, { AxiosResponse } from 'axios';

// todo: extract into environment variables
const baseUrl = 'https://sandbox.repliers.io';
const apiKey = 'QeBzmChYdgHYIRNC4XN9Bb0StoCUWm';

export const maxPageSize = 15;

const headers = {
  'Content-Type': 'application/json',
  'REPLIERS-API-KEY': apiKey,
};

export async function getListings(
  params: GetListingsParams
): Promise<AxiosResponse<ListingResponse>> {
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/listings`,
    params: {
      ...params,
      class: 'residential',
      type: ['sale'],
    },
    headers,
  });
}

export async function getListing(
  mlsNumber: string
): Promise<AxiosResponse<ListingData>> {
  return await axios.request({
    method: 'GET',
    url: `${baseUrl}/listings/${mlsNumber}`,
    headers,
  });
}

export interface GetListingsParams {
  pageNum?: number;
  class?: string;
  type?: string;
}

export interface ListingResponse {
  page: number;
  numPages: number;
  pageSize: number;
  count: number;
  listings: ListingData[];
}

export interface ListingData {
  mlsNumber: string;
  details: Details;
  address: Address;
  listPrice: string;
}

export interface Address {
  area: string;
  zip: string;
  city: string;
  streetNumber: string;
  streetName: string;
  district: string;
  streetSuffix: string;
  neighborhood: string;
  state: string;
}

export interface Details {
  numRooms: string;
  numBedrooms: string;
  yearBuilt: string;
  numBathrooms: string;
  description: string;
}
