// Pagination.jsx
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center items-center gap-2 mt-6 px-6 flex-wrap">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-4 py-2 rounded-md ${
              number === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            } hover:bg-gray-300`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;  // Ensure this line is here!
  