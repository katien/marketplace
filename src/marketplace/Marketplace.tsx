import ListingItem from './ListingItem';
import { useEffect, useState } from 'react';
import {
  getListings,
  ListingData,
  pageSize,
} from '../services/RepliersService';
import { Loading } from '../components/Loading';
import Pagination from '../components/Pagination';

function Marketplace() {
  const [listings, setListings] = useState<ListingData[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  async function loadListingData() {
    setListings([]);
    const response = await getListings({ pageNum: currentPage });
    setListings(response.data.listings);
    setTotalPages(response.data.numPages);
  }

  function onPage(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    loadListingData();
  }, [currentPage]);

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
      <Pagination
        currentPage={currentPage}
        size={pageSize}
        totalPages={totalPages}
        onPage={onPage}
      />
    </div>
  );
}

export default Marketplace;
