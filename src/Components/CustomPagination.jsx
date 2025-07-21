export default function CustomPagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(currentPage, totalPages);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-6 gap-2 my-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "dark:text-white text-gray-600 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Prev
      </button>
      {pages.slice(currentPage - 1, currentPage + 2).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            currentPage === page
              ? "bg-primaryBlue text-white"
              : " dark:text-white text-black"
          }`}
        >
          {page}
        </button>
      ))}{" "}
      {currentPage !== totalPages && (
        <>
          <button>...</button>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "dark:text-white text-gray-600 cursor-not-allowed"
                : " text-white"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "dark:text-white text-gray-600 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
}
