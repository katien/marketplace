import { ListingData } from '../services/RepliersService';
import { useNavigate } from 'react-router-dom';

function ListingItem(props: { listing: ListingData }) {
  const listing = props.listing;
  const address = listing.address;
  const navigate = useNavigate();
  return (
    <div
      className="group"
      onClick={() => navigate(`/listings/${listing.mlsNumber}`)}
    >
      <div className="h-80 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img
          src={`https://4dul5f6u.cdn.imgeng.in/cdn_images/imageto.cfm?ix=1&idlist=${listing.mlsNumber}&imgeng=/w_auto,1080/f_webp/`}
          alt="picture of house"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p>
              {address.streetNumber} {address.streetName} <br />
              {address.city}, {address.state}
            </p>
          </h3>
        </div>
        <p className="text-sm text-right font-medium text-gray-900">
          ${(+listing.listPrice).toLocaleString('en-US')}
          <br /> MLS #{listing.mlsNumber}
        </p>
      </div>
    </div>
  );
}

export default ListingItem;
