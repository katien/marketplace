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
                  <br /> MLS #{listing.mlsNumber}
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
                alt="picture of house"
                className="rounded-lg h-96 mb-8 w-full object-cover"
              />
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {[2, 3, 4, 5, 6, 7].map((id) => (
                  <div
                    key={id}
                    className="h-60 w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden "
                  >
                    <img
                      src={`https://4dul5f6u.cdn.imgeng.in/cdn_images/imageto.cfm?ix=${id}&idlist=${listing.mlsNumber}&imgeng=/w_auto,1080/f_webp/`}
                      alt="picture of house"
                      className="lg:block rounded-lg object-cover"
                    />
                  </div>
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
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <p>{listing.details.description}</p>
                </div>
              </div>
              <ContactForm listing={listing} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
