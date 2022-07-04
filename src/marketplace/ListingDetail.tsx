import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getListing, ListingData } from '../services/RepliersService';
import { Loading } from '../components/Loading';
import ContactForm from './ContactForm';

export default function ListingDetail() {
  const params = useParams();
  const [listing, setListing] = useState<ListingData>();

  async function loadListingData() {
    const response = await getListing(params.mlsNumber || '');
    setListing(response.data);
  }

  useEffect(() => {
    loadListingData();
  }, []);

  if (!listing) return <Loading />;

  const yearBuilt = 1930 + (Number(listing.mlsNumber.substring(1)) % 100);
  const numBedrooms = (yearBuilt % 10) + 2;
  const numBathrooms = numBedrooms - 2;
  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-gray-900">
                  {listing.address.streetNumber} {listing.address.streetName}
                  <br />
                  {listing.address.city}, {listing.address.state}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  ${(+listing.listPrice).toLocaleString('en-US')}
                  <br />#{listing.mlsNumber}
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>
              <img
                key={1}
                src={`https://4dul5f6u.cdn.imgeng.in/cdn_images/imageto.cfm?ix=${1}&idlist=${
                  listing.mlsNumber
                }&imgeng=/w_auto,1080/f_webp/`}
                onError={(event: any) => (event.target.style.display = 'none')}
                className="rounded-lg h-96 mb-8 w-full object-cover"
              />
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {[2, 3, 4, 5, 6, 7].map((id) => (
                  <img
                    key={id}
                    src={`https://4dul5f6u.cdn.imgeng.in/cdn_images/imageto.cfm?ix=${id}&idlist=${listing.mlsNumber}&imgeng=/w_auto,1080/f_webp/`}
                    onError={(event: any) =>
                      (event.target.style.display = 'none')
                    }
                    className="lg:block h-full w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="mt-2 lg:col-span-5">
              <div className="mt-2 border-t border-gray-200 pt-8">
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.google.com/maps/embed/v1/place?q=${listing.address.neighborhood},${listing.address.state}&key=AIzaSyD5zDCRerXpydx1pA1FLsIAKuDT7RckXxQ`}
                ></iframe>
              </div>

              <div className="mt-10">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Year Built
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{yearBuilt}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Rooms</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {numBathrooms + numBedrooms}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Bedrooms
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {numBedrooms}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Bathrooms
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {numBathrooms}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                      <p>{listing.details.description}</p>
                    </dd>
                  </div>
                </dl>
              </div>
              <button className="mt-10 w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Buy
              </button>
              <ContactForm listing={listing} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
