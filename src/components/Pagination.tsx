interface PaginationProps {
  currentPage: number;
  totalPages: number;
  size: number;
  onPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  return (
    <nav
      className="my-10 py-3 flex items-center justify-between border-t border-gray-200"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-medium">
            {1 + (props.currentPage - 1) * props.size}
          </span>{' '}
          to{' '}
          <span className="font-medium"> {props.currentPage * props.size}</span>{' '}
          of{' '}
          <span className="font-medium">
            {(props.totalPages * props.size).toLocaleString('en-US')}
          </span>{' '}
          results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={() => props.onPage(props.currentPage - 1)}
          hidden={props.currentPage <= 1}
          className={
            (props.currentPage <= 1 ? 'hidden' : 'relative') +
            ' inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          }
        >
          Previous
        </button>
        <button
          onClick={() => props.onPage(props.currentPage + 1)}
          className={
            (props.currentPage >= props.totalPages ? 'hidden' : 'relative') +
            ' ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          }
        >
          Next
        </button>
      </div>
    </nav>
  );
}
