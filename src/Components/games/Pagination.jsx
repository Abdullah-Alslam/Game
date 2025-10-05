export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 cursor-pointer"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 mx-2 rounded-lg cursor-pointer ${
              currentPage === pageNumber
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {pageNumber}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
