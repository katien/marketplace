import ListingItem from './ListingItem';
import { useEffect, useState } from 'react';
import { getListings, ListingData } from '../services/RepliersService';
import { Loading } from '../components/Loading';

function Marketplace() {
  const [listings, setListings] = useState<ListingData[]>([]);

  async function loadListingData() {
    const response = await getListings({});
    setListings(response.data.listings);
  }

  useEffect(() => {
    loadListingData();
  }, []);

  if (!listings.length) {
    return <Loading />;
  }
  const items = listings.map((listing) => (
    <ListingItem key={listing.mlsNumber} listing={listing} />
  ));
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items}
      </div>
    </div>
  );
}

export default Marketplace;
